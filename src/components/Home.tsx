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
        paddingLeft: state.padding * 2,
        paddingRight: state.padding * 2,
      }}
    >
      <div className="mt-4 w-full flex flex-col gap-2">
        <div className="w-full h-1 inverted" />
        <div className="w-full h-2 inverted" />
        <div className="w-full h-4 inverted" />
        <div className="w-full h-8 inverted" />
      </div>
      <div
        className="w-full text-center h-full items-center flex flex-col justify-center"
        style={{ gap: state.padding }}
      >
        <p className="font-Franklin font-black text-6xl">DIGITAL PRODUCT DESIGNER</p>
        <p className="font-Gentium text-2xl">UX, UI, and Design Systems</p>
      </div>

      <div className="flex" style={{ gap: state.padding * 3, paddingBottom: state.padding, paddingLeft: state.padding * 2, paddingRight: state.padding * 2 }}>
        <Teaser tags={["UX", "UI"]} dark link='/project#radicle-desktop-app' title='RADICLE DESKTOP APP'
          subtitle="Your Work Belongs on Your Machine"
        />

        <Teaser tags={["UI", "Front End"]} dark //bgImage="url('src/assets/tokens-in-figma.png')"
          link='/project#radicle-design-system'
          title='Radicle Design System'
          subtitle="Consistency By Design"
        />
        <Teaser tags={["UI", "Front End"]} dark
          link='/project#polkadot-delegation-dashboard'
          title='Polkadot Delegate Dashboard'
          subtitle="Participate in Governance"
        />
      </div>
    </div >
  );
}
