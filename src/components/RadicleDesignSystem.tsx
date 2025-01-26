import ColorRange from "../assets/ColorRange";
import { pinks, blues } from "../assets/BaseColors";
import Separator from "./Separator";
import RadicleDesignSystemIcon from "../assets/RadicleDesignSystemIcon";
import ChevronRightIcon from "../assets/Icons/ChevronRightIcon";
import { useContext } from "react";
import MyContext from "./Context";
import RadicleSemanticIllustration from "./RadicleSemanticIllustration";
import GetInTouch from "./GetInTouch";
import LoremIpsum from "../assets/LoremIpsum";

function Left() {
  const { state } = useContext(MyContext);

  return (
    <div className="w-1/3">
      <div
        className={`w-full h-screen sticky top-4 font-Gentium flex h-100vh flex-col items-center gap-4 text-center`}
        style={{ fontSize: state.fontSize, paddingBottom: state.padding * 2 }}
      >
        <p className=" font-Franklin font-black md:text-5xl lg:text-6xl leading-none">
          RADICLE DESIGN SYSTEM
        </p>
        <RadicleDesignSystemIcon />
        <div
          className="h-full flex flex-col align-left text-left indent-4"
          style={{ gap: state.padding / 2 }}
        >
          <p className="font-Franklin uppercase font-semibold">Consistency By Design</p>
          <p>
            I joined Radicle as the first designer to improve consistency and create a consistent
            design system. Design consistency is crucial in any project, but it can be particularly
            challenging in open source projects due to the diverse and distributed nature of
            contributors.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-start items-start w-full">
          <div className="flex items-center">
            <ChevronRightIcon />
            <a href="/" className="underline">
              Radicle Tokens on Radicle
            </a>
          </div>
          <div className="flex items-center">
            <ChevronRightIcon />
            <a href="/" className="underline">
              Radicle UI Kit in Figma
            </a>
          </div>
        </div>
        <div
          className="font-Gentium w-full flex align-left text-left"
          style={{ gap: state.padding / 2 }}
        >
          <p className="font-Gentium uppercase font-semibold">2024</p>
          <p>Visual Design, UI, Front End</p>
        </div>
      </div>
    </div>
  );
}

function Right() {
  const { state } = useContext(MyContext);
  return (
    <div
      className={`font-Gentium -mt-4 flex w-full flex-col leading-snug`}
      style={{ fontSize: state.fontSize, gap: state.padding * 2.5 }}
    >
      <LoremIpsum />
      <div
        className="w-full text-center flex flex-col overflow-visible z-10"
        style={{ gap: state.padding / 2 }}
      >
        <div className="flex  overflow-visible">
          <p className="w-1/3 text-start font-bold">Challenge and Goals</p>
          <div className="w-2/3 flex flex-col" style={{ gap: state.padding * 2 }}>
            <p className="text-start pr-[10%]">
              Radicle Explorer is an open-source web application that anyone can deploy on their
              own. To ensure its success and usability, it is crucial that the design is consistent,
              easy to extend, and low maintenance. Contributors should be able to navigate the
              application effortlessly, match colors with specific use cases, and utilize a variety
              of front-end implementations.
            </p>
            <p className="text-start pr-[10%]">
              After carefully auditing the current UI and its patterns, I developed a color system,
              a typographic scale, and a bunch of components.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div
        className="w-full text-center flex flex-col overflow-visible z-10"
        style={{ gap: state.padding / 2 }}
      >
        <div className="flex  overflow-visible">
          <p className="w-1/3 text-start font-bold">Stable Base Color Scales</p>
          <div className="w-2/3 flex flex-col" style={{ gap: state.padding * 2 }}>
            <p className="text-start pr-[10%]">
              Selecting a harmonious set of base colors limits the palette to a manageable number
              while providing enough flexibility to address new and unforeseen use cases.
              Contributors can be confident that any two colors will work well together.
            </p>
            <div className="flex flex-col justify-center" style={{ gap: state.padding }}>
              <ColorRange range={blues} />
              <ColorRange range={pinks} />
              <p className="italic">Fig. 1.1 Primary and Secondary Color Ranges</p>
            </div>
            <p className="text-start pr-[10%]">
              Neighboring colors can highlight accents and suggest interactions, while colors
              further apart indicate hierarchy and relationships. Differences in lightness are not
              equally distributed: the first and last colors are for large areas like backgrounds,
              and the middle colors are for high-contrast UI elements like text or buttons.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8">
        <div className="flex">
          <p className="w-1/3 text-start font-bold">Semantic Definitions</p>
          <div className="w-2/3 flex flex-col" style={{ gap: state.padding * 2 }}>
            <p className=" text-start pr-[10%]">
              Abstracting design decisions into meaningful, reusable tokens improves collaboration
              between designers and developers by providing a common language. This streamlines the
              workflow and makes design systems more efficient.
            </p>
            <RadicleSemanticIllustration />
            <p className=" text-start pr-[10%]">
              Semantic tokens should address known use cases, while global tokens are available for
              new scenarios. With a shared understanding of the naming conventions for semantic
              tokens, developers can easily select the appropriate styles without needing further
              consultation with designers.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8 ">
        <div className="flex">
          <p className="w-1/3 text-start font-bold">Seamless Implementation</p>
          <p className="w-2/3 text-start pr-[10%]">
            Colors and font styles are managed in Figma, where they are incorporated into the UI kit
            and optimized for both dark and light modes. These tokenized design elements are then
            exported and converted into specific style sheets, which can be utilized in production
            components. The tokens are stored in a shared repo on Radicle that serves as a single
            source of truth.
            <br /> <br /> We use Tokens Studio to manage tokens in Figma and store them in a shared
            JSON file. From this JSON they get transformed automatically into separate style sheeets
            for easier management. Whenever a token gets updated, the style sheets and with them the
            components in production will also update.
          </p>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8 pb-8">
        <div className="flex">
          <p className="w-1/3 text-start font-bold">Delightful Details</p>
          <p className="w-2/3 text-start pr-[10%]">
            At Radicle we're' building developing developer tools. It's crucial to prioritize
            readability and a clear, easy-to-understand hierarchy while keeping decorative elements
            to a minimum. However, a design system should also have character. Radicle's style pays
            homage to the barefoot developers, drawing inspiration from the aesthetics of 90s
            programming games and interfaces.
          </p>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}

export default function RadicleDesignSystem() {
  return (
    <div className="w-full flex gap-8 text-center py-4 h-fit">
      <Left />
      <Separator direction="vertical" />
      <Right />
    </div>
  );
}
