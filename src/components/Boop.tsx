import React from "react";
import { animated, useSpring } from "@react-spring/web";

interface BoopProps {
  children: React.ReactNode;
  rotation?: number;
  timing?: number;
  scale?: number;
  y?: number;
  className?: string;
}

export default function Boop({ scale = 1.5, timing = 150, children, className }: BoopProps) {
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    display: "inline-block",
    transform: isBooped ? `scale(${scale}) translate(0px, 0px)` : `scale(1) translate(0px, 0px)`,
  });
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = () => {
    setIsBooped(true);
  };

  return (
    <animated.div className={className} onMouseEnter={trigger} style={style}>
      {children}
    </animated.div>
  );
}
