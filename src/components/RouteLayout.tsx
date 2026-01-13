import { useContext, ReactNode, memo } from "react";
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

    return (
      <div
        className="overflow-y-scroll w-full flex flex-col"
        style={{
          gap: padding * gap,
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
