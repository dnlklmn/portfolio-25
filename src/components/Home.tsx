import { useContext, useEffect, useState } from "react";
import MyContext from "../components/Context";
import Teaser from "./Teaser";
import { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";

export default function Home() {
  const { state } = useContext(MyContext);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    // Initial animation on page load
    const initialMovement = () => {
      setTimeout(() => {
        setOffsetX(18);
      }, 100);
      setTimeout(() => {
        setOffsetX(0);
      }, 300);
    };

    initialMovement();
  }, []);

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setOffsetX(e.clientX - startX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - offsetX);
  };

  const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      setOffsetX(e.touches[0].clientX - startX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="h-full w-full flex flex-col text-center overscroll-none"
      style={{
        fontSize: state.fontSize,
        paddingTop: state.padding * 2,
        paddingBottom: state.padding * 2,
      }}
    >
      <div className=" w-full flex flex-col mt-2 md:mt-0" style={{ gap: state.padding / 1.5 }}>
        <div className="w-full h-1 inverted" />
        <div className="w-full h-2 inverted" />
        <div className="w-full h-4 inverted" />
        <div className="w-full h-8 inverted" />
      </div>

      <div
        className="w-full text-center h-3/4 md:h-full items-center flex flex-col justify-center"
        style={{ gap: state.padding }}
      >
        <div className="hidden md:flex scale-50 md:scale-100 gap-1 font-Franklin font-black items-center">
          <div className="w-[225px] flex justify-start transition-all">
            <div
              id="designer"
              className="overflow-clip"
              style={{
                width: 225 + offsetX,
                transition: isDragging ? "none" : "0.325s ease",
                fontSize: state.fontSize * 3.5,
              }}
            >
              DESIGNER
            </div>
          </div>
          <div className="w-3 h-full">
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="w-[420px] -ml-[204px] h-[240px] flex-grow flex justify-center items-center z-50"
              style={{
                transform: `translateX(${offsetX}px)`,
                cursor: "pointer",
                transition: isDragging ? "none" : "0.325s ease",
              }}
            >
              <div className="w-2 h-20 inverted rounded-sm z-50" />
            </div>
          </div>
          <div className="w-[220px] flex justify-end">
            <div
              className="overflow-clip flex justify-end"
              style={{
                width: 220 - offsetX,
                transition: isDragging ? "none" : "0.325s ease",
                fontSize: state.fontSize * 3.5,
              }}
            >
              ENGINEER
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:h-fit flex-col md:flex-row" style={{ gap: state.padding * 2 }}>
        <Teaser
          tags={["UX", "UI"]}
          draft
          link="/project#radicle-desktop-app"
          title="RADICLE DESKTOP APP"
          subtitle="Soon online"
        />
        <Teaser
          tags={["UI", "Front End"]} //bgImage="url('src/assets/tokens-in-figma.png')"
          link="/project#radicle-design-system"
          title="Radicle Design System"
          subtitle="Consistency By Design"
        />
        <Teaser
          tags={["UX", "UI", "Front End"]}
          link="/project#polkadot-delegation-dashboard"
          title="Polkadot Delegate Dashboard"
          subtitle="Participate in Governance"
        />
      </div>
    </div>
  );
}
