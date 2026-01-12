import { useContext } from "react";
import MyContext from "../components/Context";
import Teaser from "./Teaser";
import autoImage from "../assets/auto/image 8.png";
import radicleDesktopImage from "../assets/RadicleDesktopApp/patches.png";
import radicleDesignSystemImage from "../assets/RadicleDesignSystem/uikit-dark.png";
import polkadotDelegationImage from "../assets/polkadot-delegation-screens.png";

export default function Home() {
  const { state } = useContext(MyContext);

  return (
    <div
      className="h-full w-full flex flex-col text-center "
      style={{
        fontSize: state.fontSize,
        paddingTop: state.padding * 2,
        paddingBottom: state.padding * 2,
      }}
    >
      <div
        className=" w-full flex flex-col mt-2 md:mt-0 "
        style={{ gap: state.padding / 1.5 }}
      >
        <div className="w-full h-1 inverted" />
        <div className="w-full h-2 inverted" />
        <div className="w-full h-4 inverted" />
        <div className="w-full h-8 inverted" />
      </div>
      <div
        className="w-full text-center h-3/4 md:h-full items-center flex flex-col justify-center "
        style={{ gap: state.padding }}
      >
        <p
          className="font-Franklin font-black leading-tight "
          style={{ fontSize: state.fontSize * 3.5 }}
        >
          DESIGN ENGINEER
        </p>
        <p className="font-Gentium " style={{ fontSize: state.fontSize * 1.5 }}>
          I design and build digital products. From understanding user needs to
          orchestrating implementation.
        </p>
      </div>
      <div
        className="flex md:h-fit flex-col md:flex-row "
        style={{ gap: state.padding * 1.5 }}
      >
        <Teaser
          tags={["UX", "UI", "Front End", "Architecture"]}
          link="/project#auto-workflow-builder"
          title="Auto: Workflow Builder"
          subtitle="Blockchain Automation Made Visual"
          bgImage={autoImage}
        />
        <Teaser
          tags={["UX", "UI"]}
          link="/project#radicle-desktop-app"
          title="RADICLE DESKTOP APP"
          subtitle="Soon online"
          bgImage={radicleDesktopImage}
        />
        <Teaser
          tags={["UI", "Front End"]}
          link="/project#radicle-design-system"
          title="Radicle Design System"
          subtitle="Consistency By Design"
          bgImage={radicleDesignSystemImage}
        />
        <Teaser
          tags={["UX", "UI", "Front End"]}
          link="/project#polkadot-delegation-dashboard"
          title="Polkadot Delegate Dashboard"
          subtitle="Participate in Governance"
          bgImage={polkadotDelegationImage}
          bgScale={1.25}
        />
      </div>
    </div>
  );
}
