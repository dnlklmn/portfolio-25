import React from "react";

interface SeparatorProps {
  direction: "horizontal" | "vertical";
  thick?: boolean;
}

export default function Separator({ direction, thick }: SeparatorProps) {
  return (
    <React.Fragment>
      {direction === "horizontal" ? (
        <div className={`w-full bord-secondary ${thick ? "border-b-[2px]" : "border-b-[1px]"}`} />
      ) : (
        <div className={`h-full bord-secondary ${thick ? "border-r-[2px]" : "border-r-[1px]"}`} />
      )}
    </React.Fragment>
  );
}
