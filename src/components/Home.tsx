import { useContext } from "react";
import MyContext from "../components/Context";
import Teaser from "./Teaser";

export default function Home() {
  const { state } = useContext(MyContext);

  return (
    <div
      className="h-full w-full flex flex-col text-center"
      style={{
        fontSize: state.fontSize,
        paddingTop: state.padding * 2,
        paddingBottom: state.padding * 2,
      }}
    >
      <div className=" w-full flex flex-col" style={{ gap: state.padding / 1.5 }}>
        <div className="w-full h-1 inverted" />
        <div className="w-full h-2 inverted" />
        <div className="w-full h-4 inverted" />
        <div className="w-full h-8 inverted" />
      </div>
      <div
        className="w-full text-center h-full items-center flex flex-col justify-center"
        style={{ gap: state.padding }}
      >
        <p
          className="font-Franklin font-black leading-tight"
          style={{ fontSize: state.fontSize * 4 }}
        >
          DIGITAL PRODUCT DESIGNER
        </p>
        <p className="font-Gentium" style={{ fontSize: state.fontSize * 2 }}>
          UX, UI, and Design Systems
        </p>
      </div>
      <div
        className="flex h-[18vh] md:h-fit flex-col md:flex-row"
        style={{ gap: state.padding * 2 }}
      >
        <Teaser
          tags={["UX", "UI"]}
          draft
          link="/project#radicle-desktop-app"
          title="RADICLE DESKTOP APP"
          subtitle="Soon online"
        />
        <Teaser
          tags={["UI", "Front End"]} //bgImage="url('src/assets/tokens-in-figma.png')"
          link="/project#radicle-design-system"
          title="Radicle Design System"
          subtitle="Consistency By Design"
        />
        <Teaser
          tags={["UX", "UI", "Front End"]}
          link="/project#polkadot-delegation-dashboard"
          title="Polkadot Delegate Dashboard"
          subtitle="Participate in Governance"
        />
      </div>
    </div>
  );
}
