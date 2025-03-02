import { useContext, useRef } from "react";
import MyContext from "../components/Context";
import Teaser from "./Teaser";
import { useScroll } from "motion/react";

export default function Home() {
  const { state } = useContext(MyContext);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  const bannerHeight =
    window.innerHeight * 0.75 - 60 - (3 * state.padding) / 1.5 - state.padding * 4;

  return (
    <div
      id="main-div"
      ref={scrollRef}
      className="snap-y snap-mandatory h-screen scroll-smooth overflow-y-scroll w-full overscroll-auto"
      style={{
        fontSize: state.fontSize,
        paddingLeft: state.padding * 3,
        paddingRight: state.padding * 3,
      }}
    >
      <div
        className="snap-start w-full flex flex-col"
        style={{ gap: state.padding / 1.5, paddingTop: state.padding * 2 }}
      >
        <div className="w-full h-1 inverted" />
        <div className="w-full h-2 inverted" />
        <div className="w-full h-4 inverted" />
        <div className="w-full h-8 inverted" />
      </div>
      <div
        className={`w-full text-center items-center flex flex-col justify-center`}
        style={{ gap: state.padding, height: bannerHeight }}
      >
        <p
          className="font-Franklin font-black leading-tight "
          style={{ fontSize: state.fontSize * 3.5 }}
        >
          DIGITAL PRODUCT DESIGNER
        </p>
        <p className="font-Gentium " style={{ fontSize: state.fontSize * 1.5 }}>
          UX, UI, and Design Systems
        </p>
      </div>
      <div
        id="featured"
        className="flex md:h-fit flex-col md:flex-row "
        style={{ gap: state.padding * 1.5 }}
      >
        <Teaser
          tags={["UX", "UI"]}
          draft
          link="/project#radicle-desktop-app"
          title="RADICLE DESKTOP APP"
          subtitle="Soon online"
          scrollYProgress={scrollYProgress}
          windowY={window.innerHeight * 0.5 + state.padding * 4}
        />
        <Teaser
          tags={["UI", "Front End"]} //bgImage="url('src/assets/tokens-in-figma.png')"
          link="/project#radicle-design-system"
          title="Radicle Design System"
          subtitle="Consistency By Design"
          scrollYProgress={scrollYProgress}
          windowY={window.innerHeight * 0.25 + state.padding * 2}
        />
        <Teaser
          tags={["UX", "UI", "Front End"]}
          link="/project#polkadot-delegation-dashboard"
          title="Polkadot Delegate Dashboard"
          subtitle="Participate in Governance"
          scrollYProgress={scrollYProgress}
          windowY={window.innerHeight * 0.5 + state.padding * 4}
        />
      </div>
      <div
        className="snap-start flex flex-col justify-between"
        style={{ height: window.innerHeight * 1.2 }}
      >
        <p>New title</p>
        <div
          id="top-lines"
          className="snap-start snap-mandatory w-full flex flex-col"
          style={{ gap: state.padding / 1.5, paddingBottom: state.padding * 2 }}
        >
          <div className="w-full h-8 inverted" />
          <div className="w-full h-4 inverted" />
          <div className="w-full h-2 inverted" />
          <div className="w-full h-1 inverted" />
        </div>
      </div>
    </div>
  );
}
