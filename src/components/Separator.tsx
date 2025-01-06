import React from "react";

interface SeparatorProps {
  direction: "horizontal" | "vertical";
}

export default function Separator({ direction }: SeparatorProps) {
  return (
    <React.Fragment>
      {direction === "horizontal" ? (
        <div className="w-full bord-secondary border-b-[1px]" />
      ) : (
        <div className="h-full bord-secondary border-r-[1px]" />
      )}
    </React.Fragment>
  );
}
