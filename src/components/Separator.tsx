import React from "react";

interface SeparatorProps {
  direction: "horizontal" | "vertical";
}

export default function Separator({ direction }: SeparatorProps) {
  return (
    <React.Fragment>
      {direction === "horizontal" ? (
        <div className="w-full border-gray-800/30 border-b-[1px]" />
      ) : (
        <div className="h-full border-gray-800/30 border-r-[1px]" />
      )}
    </React.Fragment>
  );
}
