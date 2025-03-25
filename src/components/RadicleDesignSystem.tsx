import ColorRange from "../assets/ColorRange";
import { pinks, blues } from "../assets/BaseColors";
import Separator from "./Separator";
import { useContext } from "react";
import RadicleSemanticIllustration from "../assets/RadicleSemanticIllustration";
import Section from "./Section";
import TokensImage from "../assets/tokens-in-figma.png";
import TokensDocs from "../assets/tokens-documentation.png";
import ExplorerBefore from "../assets/explorer-before.png";
import ExplorerAfter from "../assets/explorer-after.png";
import ComponentAPI from "../assets/RadicleDesignSystem/component-api.png";
import UIKitDark from "../assets/RadicleDesignSystem/uikit-dark.png";
import FontStyles from "../assets/token-font-styles";
import RadicleIcons from "../assets/radicle-icons";
import Lightbox from "./Lightbox";
import Project from "./Project";
import MyContext from "./Context";

export default function RadicleDesignSystem() {
  const { state } = useContext(MyContext);

  return (
    <Project
      id="radicle-design-system"
      title="Radicle Design System"
      subtitle="Consistency By Design"
      description="  I joined Radicle to improve consistency and create a consistent design system. Design
        consistency is crucial in any project, but it can be particularly challenging in open
        source projects due to the diverse and distributed nature of contributors."
      tags={["UI", "Front End"]}
      year={2024}
      links={[
        {
          link: "https://app.radicle.xyz/nodes/seed.radicle.garden/rad:z4Vy9mFPHWxFNrZxM6f1p8PXs6svF",
          text: "Radicle Tokens on Radicle",
        },
        {
          link: "https://www.figma.com/design/FfIFgrdXKq547NsdeGZIsp/%5BDark%5D-Radicle-Design-System?node-id=1027-290&p=f",
          text: "Radicle UI Kit in Figma",
        },
      ]}
    >
      <div className="flex flex-col " style={{ gap: state.padding }}>
        <div
          className="w-full flex text-center flexoverflow-visible"
          style={{ gap: state.padding * 2 }}
        >
          <Lightbox
            alt="The Radicle Explorer before implementing the design system"
            image={ExplorerBefore}
          />
          <Lightbox
            alt="The Radicle Explorer after implementing the design system"
            image={ExplorerAfter}
          />
        </div>
        <p className="txt-secondary italic text-center">
          Radicle Explorer before and after implementing the design system
        </p>
      </div>
      <div
        className="w-full flex text-center flexoverflow-visible"
        style={{
          gap: state.padding * 2,
          paddingTop: state.padding * 2,
          paddingBottom: state.padding * 2,
        }}
      >
        <div className="w-full flex flex-col" style={{ gap: state.padding }}>
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
        <div className="w-full flex flex-col" style={{ gap: state.padding }}>
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
          <p className="txt-secondary italic">Primary and Secondary Color Ranges</p>
        </div>
        <p>
          We use a simplified type scale with only the essential font styles. This ensures visual
          harmony and readability without unnecessary complexity. By defining a concise set of font
          sizes, we maintain a consistent and balanced look, enhancing the user experience and
          streamlining the design process.
        </p>
        <div className="flex flex-col" style={{ gap: state.padding }}>
          <div
            className="light flex flex-col bg-neutral-200"
            style={{ gap: state.padding, padding: state.padding * 2 }}
          >
            <FontStyles />
          </div>
          <p className="txt-secondary italic text-center">Text styles used in the library</p>
        </div>
      </Section>
      <Section title="Semantic Definitions">
        <p>
          Abstracting design decisions into meaningful, reusable tokens improves collaboration
          between designers and developers by providing a common language. This streamlines the
          workflow and makes design systems more efficient.
        </p>
        <div className="flex flex-col" style={{ gap: state.padding }}>
          <RadicleSemanticIllustration />
          <p className="txt-secondary italic text-center">
            Semantic colors Used in the primary button
          </p>
        </div>
        <p>
          Semantic tokens should address known use cases, while global tokens are available for new
          scenarios. With a shared understanding of the naming conventions for semantic tokens,
          developers can easily select the appropriate styles without needing further consultation
          with designers.
        </p>
      </Section>
      <Section title="Components">
        <p>
          The UI kit consists only of the components currently used in the app. No unused button
          variants or typography styles allowed.
        </p>
        <div className="flex flex-col gap-4">
          <Lightbox
            alt="Components from the Figma UI kit in dark mode"
            image={UIKitDark}
          ></Lightbox>
          <p className="txt-secondary italic text-center">
            Components from the Figma UI kit in dark mode
          </p>
        </div>
        <p>
          The behavior of components in Figma matches those in production. It is often quicker to
          experiment with Figma’s properties to design the API than having to do it all in code.
        </p>
        <div className="flex flex-col" style={{ gap: state.padding }}>
          <Lightbox alt="Component API" image={ComponentAPI}></Lightbox>
          <p className="txt-secondary italic text-center">Component API</p>
        </div>
      </Section>
      <Section title="Seamless Implementation">
        <p>
          Colors and font styles are managed in Figma, where they are incorporated into the UI kit
          and optimized for both dark and light modes. These tokenized design elements are then
          exported and converted into specific style sheets, which can be utilized in production
          components. The tokens are stored in a shared repo on Radicle that serves as a single
          source of truth.
        </p>
        <div className="flex flex-col" style={{ gap: state.padding }}>
          <img src={TokensImage} alt="Tokens Studio in Figma" />
          <p className="txt-secondary italic text-center">Tokens Studio in Figma</p>
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

        <div className="flex flex-col" style={{ gap: state.padding }}>
          <img src={TokensDocs} alt="Tokens Studio in Figma" />
          <p className="txt-secondary italic text-center">Documentation at the token level</p>
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
        <div className="flex flex-col" style={{ gap: state.padding }}>
          <RadicleIcons />
          <p className="txt-secondary italic text-center">16x16 pixel icons</p>
        </div>
      </Section>
      {/* <GetInTouch /> */}
    </Project>
  );
}
