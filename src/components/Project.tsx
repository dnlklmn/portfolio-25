import ColorRange from "./ColorRange";
import { pinks, blues } from "../assets/BaseColors";
import Separator from "./Separator";
import RadicleDesignSystemIcon from "../assets/RadicleDesignSystemIcon";
import ChevronRightIcon from "../assets/Icons/ChevronRightIcon";
import { useContext } from "react";
import MyContext from "../components/Context";
import RadicleSemanticIllustration from "./RadicleSemanticIllustration";

function Left() {
  const { state } = useContext(MyContext);

  return (
    <div className="w-1/3">
      <div
        className={`w-full h-screen  sticky top-4 font-Gentium flex h-100vh flex-col items-center gap-4 text-center`}
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
            Consistency not only enhances the user experience but also builds trust. Ensuring
            consistency in an open-source project can be particularly challenging, as it requires a
            universal framework that contributors can easily work with.
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
      className={`font-Gentium flex w-full flex-col`}
      style={{ fontSize: state.fontSize, gap: state.padding * 2 }}
    >
      <div
        className="w-full text-center flex flex-col overflow-visible"
        style={{ gap: state.padding / 2 }}
      >
        <div className="flex  overflow-visible">
          <p className="w-1/3 text-start font-bold">Stable Base Color Scales</p>
          <div className="w-2/3 flex flex-col" style={{ gap: state.padding * 2 }}>
            <p className="text-start pr-[10%]">
              Selecting a harmonious set of base colors limits the palette to a manageable number
              while providing enough flexibility to address new and unforeseen use cases.
              Contributors can be confident that any two colors will work well together. Neighboring
              colors can be used to highlight accents and suggest interactions, while colors further
              apart help indicate hierarchy and relationships.
            </p>
            <div className="flex flex-col justify-center" style={{ gap: state.padding }}>
              <ColorRange range={blues} />
              <ColorRange range={pinks} />
              <p className="italic">Fig. 1.1 Primary and Secondary Color Ranges</p>
            </div>
            <p className="text-start pr-[10%]">
              You might notice that the differences in lightness are not equally distributed. The
              first and last few colors are reserved for large areas like backgrounds, while the
              colors in the middle are used for high-contrast UI elements that need to be instantly
              recognizable, such as text or buttons. The varying shades of background colors help
              indicate elevation, while the different shades of the central colors provide detail on
              significant UI elements, such as hover and pressed states on buttons.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8">
        <div className="flex">
          <p className="w-1/3 text-start font-bold">Semantic Definitions</p>
          <div className="w-2/3 flex flex-col" style={{ gap: state.padding * 2 }}>
            <p className="w-2/3 text-start pr-[10%]">
              Abstracting design decisions into meaningful, reusable tokens improves collaboration
              between designers and developers by providing a common language. This streamlines the
              workflowm makes the design systems efficient - and helps reduce misunderstandings.
            </p>
            <RadicleSemanticIllustration />
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8 ">
        <div className="flex">
          <p className="w-1/3 text-start font-bold">Stable Base Color Scales</p>
          <p className="w-2/3 text-start pr-[10%]">
            A design system is a comprehensive collection of design standards, documentation, and
            principles that guide the creation of consistent and cohesive user interfaces across a
            product or suite of products. It includes a library of reusable components, such as
            buttons, forms, and navigation elements, which are built to adhere to a unified visual
            language and interaction pattern. <br /> <br /> By providing a single source of truth
            for designers and developers, a design system ensures that the user experience is
            seamless and intuitive, regardless of the platform or device. It also streamlines the
            design and development process, reducing redundancy and enabling teams to focus on
            solving complex problems rather than reinventing the wheel. Ultimately, a
            well-implemented design system enhances brand identity, improves accessibility, and
            accelerates the delivery of high-quality digital products.
          </p>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8 pb-8">
        <div className="flex">
          <p className="w-1/3 text-start font-bold">Semantic Definitions</p>
          <p className="w-2/3 text-start pr-[10%]">
            emantic design tokens are a set of standardized variables that represent the core design
            decisions of a user interface, such as colors, typography, spacing, and other visual
            properties. Unlike traditional design tokens that might be named after their specific
            values (e.g., `primary-blue` or `font-size-16`), semantic design tokens are named based
            on their intended use and meaning within the design system (e.g.,
            `primary-button-background` or `heading-font-size`). This approach promotes a more
            intuitive and maintainable design system by abstracting the underlying values and
            focusing on the purpose and context of each token. By using semantic design tokens,
            designers and developers can ensure consistency across different components and
            platforms, facilitate easier updates and theming, and enhance collaboration by providing
            a common language that bridges the gap between design and development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div className="overflow-y-scroll px-8 flex flex-col gap-8">
      <div className="w-full flex gap-8 text-center py-4 h-fit">
        <Left />
        <Separator direction="vertical" />
        <Right />
      </div>
      <Separator direction="horizontal" />
      <div className="snap-start w-full flex gap-8 py-4 text-center">
        <Left />
        <Separator direction="vertical" />
        <Right />
      </div>
    </div>
  );
}
