import { useContext, useEffect, useRef, ReactNode, memo } from "react";
import { useLocation } from "react-router-dom";
import LayoutContext from "./Context";

interface RouteLayoutProps {
  children: ReactNode;
  gap?: number;
  includeVerticalPadding?: boolean;
}

const RouteLayout = memo(
  ({ children, gap = 2, includeVerticalPadding = false }: RouteLayoutProps) => {
    const { state } = useContext(LayoutContext);
    const padding = state.basePadding + state.userPaddingOffset;
    const scrollRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
      if (!location.hash || !scrollRef.current) return;
      const hashId = location.hash.substring(1);

      const attemptScroll = () => {
        const wrapper = document.getElementById(`${hashId}-wrapper`);
        const target = wrapper || document.getElementById(hashId);
        if (!target || !scrollRef.current) return false;

        let offset = 0;
        let el: HTMLElement | null = target;
        while (el && el !== scrollRef.current) {
          offset += el.offsetTop;
          el = el.offsetParent as HTMLElement | null;
        }
        scrollRef.current.scrollTop = offset;
        return true;
      };

      requestAnimationFrame(() => {
        if (attemptScroll()) return;
        const timers = [100, 300, 600].map((ms) =>
          setTimeout(attemptScroll, ms),
        );
        return () => timers.forEach(clearTimeout);
      });
    }, [location]);

    return (
      <div
        ref={scrollRef}
        className="overflow-y-auto md:overflow-y-auto overflow-x-visible w-full flex flex-col"
        style={{
          gap: padding * gap,
          marginTop: -padding * 2,
          marginBottom: -padding * 2,
          paddingTop: padding * 2,
          paddingBottom: padding * 2,
          height: `calc(100% + ${padding * 4}px)`,
          WebkitOverflowScrolling: "touch",
          overflowClipMargin: "content-box",
          ...(includeVerticalPadding && {
            paddingTop: padding * 2,
            paddingBottom: padding * 2,
          }),
        }}
      >
        {children}
      </div>
    );
  },
);

RouteLayout.displayName = "RouteLayout";

export default RouteLayout;
