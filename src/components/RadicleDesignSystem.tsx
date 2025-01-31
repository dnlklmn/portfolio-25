import ColorRange from "../assets/ColorRange";
import { pinks, blues } from "../assets/BaseColors";
import Separator from "./Separator";
import RadicleDesignSystemIcon from "../assets/RadicleDesignSystemIcon";
import ChevronRightIcon from "../assets/Icons/ChevronRightIcon";
import { useContext } from "react";
import MyContext from "./Context";
import RadicleSemanticIllustration from "../assets/RadicleSemanticIllustration";
import GetInTouch from "./GetInTouch";
import Section from "./Section";
import TokensImage from "../assets/tokens-in-figma.png";
import TokensDocs from "../assets/tokens-documentation.png";
import ExplorerBefore from "../assets/explorer-before.png";
import ExplorerAfter from "../assets/explorer-after.png";
import FontStyles from "../assets/token-font-styles";
import RadicleIcons from "../assets/radicle-icons";
import Lightbox from "./Lightbox";



function Left() {
  const { state } = useContext(MyContext);

  return (
    <div className="w-1/3" >
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
            I joined Radicle to improve consistency and create a consistent design system. Design
            consistency is crucial in any project, but it can be particularly challenging in open
            source projects due to the diverse and distributed nature of contributors.
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
      id="radicle-design-system"
      className={`font-Gentium flex w-full flex-col leading-snug`}
      style={{ fontSize: state.fontSize, gap: state.padding * 2 }}
    >
      <div className="flex flex-col gap-4">
        <div
          className="z-50 w-full flex text-center flexoverflow-visible"
          style={{ gap: state.padding * 2 }}
        >
          <Lightbox image={ExplorerBefore} />
          <Lightbox image={ExplorerAfter} />
        </div>
        <p className="italic text-center">
          Fig. 1.1 Radicle Explorer before and after implementing the design system
        </p>
      </div>
      <Separator direction="horizontal" />
      <div
        className="z-50 w-full flex text-center flexoverflow-visible"
        style={{ gap: state.padding * 2 }}
      >
        <div className="w-full flex flex-col gap-8">
          <p className="text-start font-bold">Challenge and Goals</p>
          <div className="flex flex-col text-start" style={{ gap: state.padding }}>
            <p>
              Radicle Explorer is an open-source web application that anyone can deploy on their
              own. To ensure its success and usability, it is crucial that the design is consistent,
              easy to extend, and low maintenance.
            </p>
            <p>
              Contributors should be able to navigate the application effortlessly, match colors and
              text styles with specific use cases.
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-4">
          <p className="text-start font-bold">Process and Responsibilities</p>
          <div className="flex flex-col text-start " style={{ gap: state.padding }}>
            <p>
              After carefully auditing the current UI and its patterns, I developed a color system,
              a typographic scale, and components in Figma.
            </p>
            <p>
              Once all stakeholders agreed I created the pipeline to export and transform tokens
              into stylesheets and implemented these in the Svelte front end.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="Stable Base Scales">
        <p>
          Selecting a harmonious set of base colors limits the palette to a manageable number while
          providing enough flexibility to address new and unforeseen use cases. Contributors can be
          confident that any two colors will work well together. Neighboring colors can highlight
          accents and suggest interactions, while colors further apart indicate hierarchy and
          relationships.
        </p>
        <div className="flex flex-col justify-center text-center" style={{ gap: state.padding }}>
          <ColorRange range={blues} />
          <ColorRange range={pinks} />
          <p className="italic">Fig. 1.1 Primary and Secondary Color Ranges</p>
        </div>
        <p>
          We use a simplified type scale with only the essential font styles. This ensures visual
          harmony and readability without unnecessary complexity. By defining a concise set of font
          sizes, we maintain a consistent and balanced look, enhancing the user experience and
          streamlining the design process.
        </p>
        <div className="flex flex-col gap-4">
          <div
            className="light flex py-8 px-8 flex-col z-50 bg-neutral-200"
            style={{ gap: state.padding * 2 }}
          >
            <FontStyles />
          </div>
          <p className="italic text-center">Fig. 1.2 Text styles used in the library</p>
        </div>
      </Section>
      <Section title="Semantic Definitions">
        <p>
          Abstracting design decisions into meaningful, reusable tokens improves collaboration
          between designers and developers by providing a common language. This streamlines the
          workflow and makes design systems more efficient.
        </p>
        <div className="flex flex-col gap-4">
          <RadicleSemanticIllustration />
          <p className="italic text-center">Fig. 1.3 Semantic colors Used in the primary button</p>
        </div>
        <p>
          Semantic tokens should address known use cases, while global tokens are available for new
          scenarios. With a shared understanding of the naming conventions for semantic tokens,
          developers can easily select the appropriate styles without needing further consultation
          with designers.
        </p>
      </Section>
      <Section title="Seamless Implementation">
        <p>
          Colors and font styles are managed in Figma, where they are incorporated into the UI kit
          and optimized for both dark and light modes. These tokenized design elements are then
          exported and converted into specific style sheets, which can be utilized in production
          components. The tokens are stored in a shared repo on Radicle that serves as a single
          source of truth.
        </p>
        <div className="flex flex-col gap-4">
          <img src={TokensImage} alt="Tokens Studio in Figma" />
          <p className="italic text-center">Fig. 1.4 Tokens Studio in Figma</p>
        </div>
        <p>
          We use Tokens Studio to manage tokens in Figma and store them in a shared JSON file. From
          this JSON they get transformed automatically into separate style sheeets for easier
          management. Whenever a token gets updated, the style sheets and with them the components
          in production will also update.
        </p>
        <p>
          To minimize bloat and make maintenance easier, the documentation is attached directly to
          the tokens in the form of code comments.
        </p>

        <div className="flex flex-col gap-4">
          <img src={TokensDocs} alt="Tokens Studio in Figma" />
          <p className="italic text-center">Fig. 1.5 Documentation at the token level</p>
        </div>
      </Section>
      <Section last title="Delightful Details">
        <p>
          At Radicle we're building developing developer tools. It's crucial to prioritize
          readability and a clear, easy-to-understand hierarchy while keeping decorative elements to
          a minimum. However, a design system should also have character. Radicle's style pays
          homage to the barefoot developers, drawing inspiration from the aesthetics of 90s
          programming games and interfaces.
        </p>
        <div className="flex flex-col gap-4">
          <RadicleIcons />
          <p className="italic text-center">Fig. 1.6 16x16 pixel icons</p>
        </div>
      </Section>
      <GetInTouch />
    </div>
  );
}

export default function RadicleDesignSystem() {

  return (
    <div id='radicle-design-system' className="w-full flex gap-8 text-center py-4 h-fit">
      <Left />
      <Separator direction="vertical" />
      <Right />
    </div>
  );
}
