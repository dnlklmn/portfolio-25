import React from "react";

interface SeparatorProps {
  direction: "horizontal" | "vertical";
  thick?: boolean;
  className?: string;
}

export default function Separator({ direction, thick, className }: SeparatorProps) {
  return (
    <React.Fragment>
      {direction === "horizontal" ? (
        <div
          className={`w-full bord-secondary ${thick ? "border-b-[2px]" : "border-b-[1px]"} ${className}`}
        />
      ) : (
        <div
          className={`h-full bord-secondary ${thick ? "border-r-[2px]" : "border-r-[1px]"} ${className}`}
        />
      )}
    </React.Fragment>
  );
}
