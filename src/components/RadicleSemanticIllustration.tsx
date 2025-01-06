import React from "react";
import RadicleButton from "../assets/RadicleButton";
import MyContext from "./Context";
import SeedIcon from "../assets/Icons/SeedIcon";
import Separator from "./Separator";

export default function RadicleSemanticIllustration() {
  const { state } = React.useContext(MyContext);
  return (
    <div className="flex flex-col pr-8" style={{ gap: state.padding }}>
      <div className="p-8 border-[1px] bord-secondary">
        <div className="group h-8 my-12  flex gap-12 items-center">
          <RadicleButton>
            <SeedIcon />
            Press me
          </RadicleButton>
          <div
            className="flex w-full items-center gap-2 font-Franklin"
            style={{ fontSize: state.fontSize - 2 }}
          >
            <Separator direction="vertical" />
            <div className="flex flex-col gap-4">
              <p className="h-4 w-4 font-semibold overflow-visible whitespace-nowrap">
                Semantic Token
              </p>

              <div className="rounded-full h-4 w-4 group-hover:bg-[#9497FF] bg-neutral-300 group-active:bg-neutral-300" />
              <div className="rounded-full h-4 w-4 bg-[#8585FF]" />
              <div className="rounded-full h-4 w-4 bg-[#7070FF]" />
              <div className="rounded-full h-4 w-4 bg-[#5555FF] group-hover:bg-neutral-300 group-active:bg-[#5555FF]" />
            </div>
            <div className="w-full items-start justify-center flex flex-col gap-4">
              <div className="rounded-full h-4 w-4" />

              <p className="h-4 group-hover:text-[#9497FF] text-neutral-300 group-active:text-neutral-300">
                fill-primary-hover
              </p>
              <p className="h-4 text-[#8585FF]">fill-primary-hover</p>
              <p className="h-4 text-[#7070FF]">fill-primary</p>
              <p className="h-4 text-[#5555FF] group-hover:text-neutral-300 group-active:text-[#5555FF]">
                fill-primary-shade
              </p>
            </div>
            <div className="w-full whitespace-nowrap items-start pr-4 justify-center flex flex-col gap-4">
              <p className="h-4 w-4 font-semibold overflow-visible whitespace-nowrap">
                Global Token
              </p>
              <p className="h-4 group-hover:text-[#9497FF] text-neutral-300 group-active:text-neutral-300">
                --blue-100
              </p>
              <p className="h-4 text-[#8585FF]">--blue-200</p>
              <p className="h-4 text-[#7070FF]">--blue-300</p>
              <p className="h-4 text-[#5555FF] group-hover:text-neutral-300 group-active:text-[#5555FF]">
                --blue-400
              </p>
            </div>
            <div className="items-start justify-center flex flex-col gap-4">
              <p className="h-4 w-4 font-semibold overflow-visible whitespace-nowrap">Value</p>

              <p className="h-4 group-hover:text-[#9497FF] text-neutral-300 group-active:text-neutral-300">
                #9497FF
              </p>
              <p className="h-4 text-[#8585FF]">#8585FF</p>
              <p className="h-4 text-[#7070FF]">#7070FF</p>
              <p className="h-4 text-[#5555FF] group-hover:text-neutral-300 group-active:text-[#5555FF]">
                #5555FF
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="italic">Fig. 1.2 Semantic Colors in the Primary Button</p>
    </div>
  );
}
