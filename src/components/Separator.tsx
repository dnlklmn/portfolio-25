import React from "react";

interface SeparatorProps {
  direction: "horizontal" | "vertical";
  thick?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Separator({ direction, thick, className, style }: SeparatorProps) {
  return (
    <React.Fragment>
      {direction === "horizontal" ? (
        <div
          className={`w-full bord-secondary ${thick ? "border-b-[2px]" : "border-b-[1px]"} ${className}`}
          style={style}
        />
      ) : (
        <div
          className={`h-full bord-secondary ${thick ? "border-r-[2px]" : "border-r-[1px]"} ${className}`}
          style={style}
        />
      )}
    </React.Fragment>
  );
}
