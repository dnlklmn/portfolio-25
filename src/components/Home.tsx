import { useContext, useEffect, useRef, useState } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import { useLocation, Link } from "react-router-dom";
import MyContext from "../components/Context";
import Teaser from "./Teaser";
import { AboutBio } from "./About";
import radicleDesktopImage from "../assets/RadicleDesktopApp/patches.png";
import radicleDesignSystemImage from "../assets/RadicleDesignSystem/uikit-dark.png";
import polkadotDelegationImage from "../assets/polkadot-delegation-screens.png";
import Header from "../assets/auto/header.png";

export default function Home() {
  const { state } = useContext(MyContext);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Reset scroll position when navigating
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [isAboutPage]);

  // Timeline data: company, time, location, months, title, description
  const timelineData = [
    {
      company: "Entropy",
      time: "June 2025 - present",
      location: "Berlin, Germany",
      months: 6,
      title: "Blockchain workflow automation platform",
      description:
        "I am responsible for everything design. Research and ideation, building and testing prototypes and planning execution of the front end.",
    },
    {
      company: "Radicle",
      time: "May 2023 - June 2025",
      location: "Berlin, Germany",
      months: 19,
      title: "Sovereign code collaboration",
      description:
        "I was responsible for the UX of the web and desktop apps, and the design system. I also helped refine the front end, implement the design system and work on the visual design of the apps once the designs were done.",
    },
    {
      company: "Parity Technologies",
      time: "Oct 2021 - Jan 2024",
      location: "Berlin, Germany",
      months: 27,
      title: "Infrastructure and tools for Polkadot",
      description:
        "As a product designer at Parity, I helped create the Polkadot design system, and worked on decentralized apps like the Delegation Dashboard, and Multisig Commander.",
    },
    {
      company: "Quarters",
      time: "November 2020 - May 2021",
      location: "Berlin, Germany",
      months: 6,
      title: "Co-living management platform",
      description:
        "I joined Quarters as a (failed) attempt to return to web2. I quickly realized my heart lies with decenrtralization and distributed systems.",
    },
    {
      company: "Satoshipay",
      time: "Mar 2018 - Nov 2020",
      location: "Berlin, Germany",
      months: 33,
      title: "Cryptocurrency payments and content monetization",
      description:
        "As the first product designer I designed and build prototypes for monetizing content using cryptocurrency, and an app to facilitate cross-border payments.",
    },
    {
      company: "Linkurious",
      time: "January 2017 - July 2017",
      location: "Paris, France",
      months: 6,
      title: "Graph visualization and analysis",
      description:
        "As a UX consultant I helped Linkurious improve the usability of their graph visualization tool.",
    },
    {
      company: "TOTL",
      time: "January 2017 - July 2017",
      location: "San Francisco, CA",
      months: 22,
      title: "Experimental data visualization platform",
      description:
        "Joining this experimental project helped refine my skills in data visualization and rapid prototyping. I also learned a lot about the importance of user research and testing.",
    },
    {
      company: "Dotloop",
      time: "Jan 2015 - Apr 2015",
      location: "San Francisco, CA",
      months: 4,
      title: "Real estate transaction management",
      description:
        "As a UX consultant I helped integrate a camera into the Dotloop app to make it easier for real estate agents to document the acquisition of properties. The company was acquired by Zillow shortly thereafter.",
    },
    {
      company: "Prezi",
      time: "Jul 2011 - Dec 2014",
      location: "Budapest, Hungary",
      months: 42,
      title: "Zooming presentation software",
      description:
        "My first job with the time UX designer, I learned about the importance of user research, A/B testing, and how rapid prototyping helps with these efforts. I designed the capability to reuse content from previous presentations.",
    },
  ];

  const timelineHeights = timelineData.map((d) =>
    Math.max(
      isMobile ? 240 : 120,
      state.padding * d.months * (isMobile ? 2 : 1),
    ),
  );

  // Individual bar transformations - don't animate width, just height
  const animDuration = isMobile ? 0 : 150;
  const bar1Spring = useSpring({
    height: isAboutPage ? timelineHeights[0] : 4,
    config: {
      duration: animDuration,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    immediate: isMobile,
  });

  const bar2Spring = useSpring({
    height: isAboutPage ? timelineHeights[1] : 8,
    config: {
      duration: animDuration,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    immediate: isMobile,
  });

  const bar3Spring = useSpring({
    height: isAboutPage ? timelineHeights[2] : 16,
    config: {
      duration: animDuration,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    immediate: isMobile,
  });

  const bar4Spring = useSpring({
    height: isAboutPage ? timelineHeights[3] : 32,
    config: {
      duration: animDuration,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    immediate: isMobile,
  });

  const barsContainerSpring = useSpring({
    width: isAboutPage ? "25%" : "100%",
    config: {
      duration: animDuration,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    immediate: isMobile,
  });

  const titleSpring = useSpring({
    opacity: isAboutPage ? 0 : 1,
    transform: isAboutPage ? "translateY(-20px)" : "translateY(0px)",
    config: {
      duration: isMobile ? 0 : 200,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    immediate: isMobile,
  });

  const thumbnailsSpring = useSpring({
    opacity: isAboutPage ? 0 : 1,
    transform: isAboutPage
      ? "scale(0.95) translateY(20px)"
      : "scale(1) translateY(0px)",
    config: {
      duration: isMobile ? 0 : 200,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    immediate: isMobile,
  });

  const rightColumnSpring = useSpring({
    opacity: isAboutPage ? 1 : 0,
    width: isAboutPage ? "75%" : "0%",
    config: {
      duration: isMobile ? 0 : 300,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    immediate: isMobile,
  });

  const descriptionsTrail = useTrail(timelineData.length, {
    opacity: isAboutPage ? 1 : 0,
    config: { duration: isMobile ? 0 : 50 },
    delay: isAboutPage && !isMobile ? 250 : 0, // Wait for blocks to finish shrinking plus 100ms
    immediate: isMobile,
  });

  // Additional blocks (5-9) that drop in after the first 4
  const additionalBlocksSpring = useSpring({
    height: isAboutPage ? "auto" : 0,
    opacity: isAboutPage ? 1 : 0,
    config: {
      duration: isMobile ? 0 : 400,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    delay: isMobile ? 0 : 150, // Start after initial animation
    immediate: isMobile,
  });

  // Label opacity for all blocks
  const labelSpring = useSpring({
    opacity: isAboutPage ? 1 : 0,
    config: {
      duration: isAboutPage && !isMobile ? 200 : 0,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
    delay: isAboutPage && !isMobile ? 200 : 0, // Delay when opening, instant when closing
    immediate: isMobile,
  });

  return (
    <div
      ref={containerRef}
      className={`w-full flex flex-col no-scrollbar ${isAboutPage ? "overflow-y-auto overflow-x-visible" : "md:overflow-hidden h-full md:h-full"}`}
      style={
        isAboutPage
          ? {
              marginTop: -state.padding * 2,
              marginBottom: -state.padding * 2,
              paddingTop: state.padding * 2,
              paddingBottom: state.padding * 2,
              height: `calc(100% + ${state.padding * 4}px)`,
              WebkitOverflowScrolling: "touch",
            }
          : {}
      }
    >
      <div
        className="flex flex-col w-full h-full"
        style={{
          gap: isMobile && !isAboutPage ? state.padding * 4 : 0,
          paddingLeft: isMobile ? state.padding * 2 : 0,
          paddingRight: isMobile ? state.padding * 2 : 0,
        }}
      >
        {isAboutPage && isMobile && (
          <>
            <div style={{ marginBottom: state.padding * 4 }}>
              <AboutBio />
            </div>
            <p
              className="font-Franklin font-black uppercase"
              style={{
                fontSize: state.fontSize * 2,
                marginBottom: state.padding * 2,
              }}
            >
              Experience
            </p>
          </>
        )}
        <div
          className={`flex flex-row w-full ${!isAboutPage ? "flex-shrink-0 order-1 md:order-1" : "flex-1"}`}
          style={{ gap: state.padding / 2 }}
        >
          <animated.div
            className="flex flex-col"
            style={{
              width: barsContainerSpring.width,
              gap: isAboutPage ? state.padding : state.padding / 1.5,
            }}
          >
            <animated.div
              className="inverted w-full relative flex flex-col overflow-hidden"
              style={{
                height: bar1Spring.height,
                flexShrink: 0,
                padding: isAboutPage ? state.padding : 0,
              }}
            >
              <animated.p
                className="font-Gentium font-bold truncate"
                style={labelSpring}
              >
                {timelineData[0].company}
              </animated.p>
              <animated.p className="font-Gentium truncate" style={labelSpring}>
                {timelineData[0].time}
              </animated.p>
              <animated.p
                className="font-Gentium txt-secondary truncate"
                style={labelSpring}
              >
                {timelineData[0].location}
              </animated.p>
            </animated.div>
            <animated.div
              className={`${isAboutPage ? "primary bord-secondary border-[1px]" : "inverted"} w-full relative flex flex-col overflow-hidden`}
              style={{
                height: bar2Spring.height,
                flexShrink: 0,
                padding: isAboutPage ? state.padding : 0,
              }}
            >
              <animated.p
                className="font-Gentium font-bold truncate"
                style={labelSpring}
              >
                {timelineData[1].company}
              </animated.p>
              <animated.p className="font-Gentium truncate" style={labelSpring}>
                {timelineData[1].time}
              </animated.p>
              <animated.p
                className="font-Gentium txt-secondary truncate"
                style={labelSpring}
              >
                {timelineData[1].location}
              </animated.p>
            </animated.div>
            <animated.div
              className={`${isAboutPage ? "primary bord-secondary border-[1px]" : "inverted"} w-full relative flex flex-col overflow-hidden`}
              style={{
                height: bar3Spring.height,
                flexShrink: 0,
                padding: isAboutPage ? state.padding : 0,
              }}
            >
              <animated.p
                className="font-Gentium font-bold truncate"
                style={labelSpring}
              >
                {timelineData[2].company}
              </animated.p>
              <animated.p className="font-Gentium truncate" style={labelSpring}>
                {timelineData[2].time}
              </animated.p>
              <animated.p
                className="font-Gentium txt-secondary truncate"
                style={labelSpring}
              >
                {timelineData[2].location}
              </animated.p>
            </animated.div>
            <animated.div
              className={`${isAboutPage ? "primary bord-secondary border-[1px]" : "inverted"} w-full relative flex flex-col overflow-hidden`}
              style={{
                height: bar4Spring.height,
                flexShrink: 0,
                padding: isAboutPage ? state.padding : 0,
              }}
            >
              <animated.p
                className="font-Gentium font-bold truncate"
                style={labelSpring}
              >
                {timelineData[3].company}
              </animated.p>
              <animated.p className="font-Gentium truncate" style={labelSpring}>
                {timelineData[3].time}
              </animated.p>
              <animated.p
                className="font-Gentium txt-secondary truncate"
                style={labelSpring}
              >
                {timelineData[3].location}
              </animated.p>
            </animated.div>
            {isAboutPage && (
              <animated.div
                className="overflow-hidden"
                style={additionalBlocksSpring}
              >
                {timelineData.slice(4).map((data, idx) => (
                  <div
                    key={idx}
                    className="primary bord-secondary border-[1px] w-full flex flex-col overflow-hidden"
                    style={{
                      height: timelineHeights[idx + 4],
                      minHeight: isMobile ? 240 : 120,
                      padding: state.padding,
                      marginBottom:
                        idx < timelineData.length - 5 ? state.padding : 0,
                    }}
                  >
                    <p className="font-Gentium font-bold truncate">
                      {data.company}
                    </p>
                    <p className="font-Gentium truncate">{data.time}</p>
                    <p className="font-Gentium txt-secondary truncate">
                      {data.location}
                    </p>
                  </div>
                ))}
              </animated.div>
            )}
          </animated.div>
          <animated.div
            className="font-Gentium"
            style={{
              opacity: rightColumnSpring.opacity,
              width: rightColumnSpring.width,
              display: isAboutPage ? "block" : "none",
              overflow: "hidden",
              minWidth: 0,
              flex: "1 1 auto",
            }}
          >
            <div className="flex flex-col" style={{ gap: state.padding }}>
              {timelineData.map((data, idx) => (
                <animated.div
                  key={idx}
                  className="flex flex-col overflow-hidden min-w-0"
                  style={{
                    padding: state.padding,
                    gap: state.padding,
                    height: timelineHeights[idx],
                    minHeight: isMobile ? 240 : 120,
                    ...descriptionsTrail[idx],
                  }}
                >
                  {data.title && (
                    <p
                      className={`font-bold ${isMobile ? "line-clamp-4 leading-relaxed" : ""}`}
                    >
                      {data.title}
                    </p>
                  )}
                  <p className={isMobile ? "line-clamp-6 leading-relaxed" : ""}>
                    {data.description}
                  </p>
                </animated.div>
              ))}
            </div>
          </animated.div>
        </div>
        <animated.div
          className={`text-center items-center flex flex-col justify-center ${!isAboutPage ? "order-2 md:order-2 flex-1 md:flex-1" : ""}`}
          style={{
            gap: isMobile ? state.padding * 2 : state.padding,
            ...titleSpring,
            display: isAboutPage ? "none" : "flex",
            height: isAboutPage ? 0 : "auto",
          }}
        >
          <p
            className="font-Franklin font-black leading-tight"
            style={{
              fontSize: `clamp(${state.fontSize * 2}px, 10vw, ${state.fontSize * 3.5}px)`,
            }}
          >
            DESIGN ENGINEER
          </p>
          <p
            className="font-Gentium"
            style={{
              fontSize: isMobile ? state.fontSize : state.fontSize * 1.5,
            }}
          >
            I design and build digital products. From understanding user needs
            to orchestrating implementation.
          </p>
          {isMobile && (
            <Link
              to="/about"
              className="font-Franklin font-semibold uppercase bg-neutral-800 text-neutral-50 dark:bg-neutral-200 dark:text-neutral-900"
              style={{
                fontSize: state.fontSize,
                padding: `${state.padding}px ${state.padding * 2}px`,
              }}
            >
              ABOUT
            </Link>
          )}
        </animated.div>
        <animated.div
          className="flex md:h-fit flex-col md:flex-row order-3 md:order-3 w-full"
          style={{
            gap: state.padding * 1.5,
            ...thumbnailsSpring,
            pointerEvents: isAboutPage ? "none" : "auto",
            marginTop: isMobile && !isAboutPage ? "auto" : 0,
          }}
        >
          <Teaser
            tags={["UX", "UI", "Front End"]}
            link="/project#auto-workflow-builder"
            title="Auto: Workflow Builder"
            subtitle="Blockchain Automation Made Visual"
            bgImage={Header}
            bgScale={1.75}
          />
          <Teaser
            tags={["UX", "UI"]}
            link="/project#radicle-desktop-app"
            title="RADICLE DESKTOP APP"
            subtitle="Your Code on Your Machine"
            bgImage={radicleDesktopImage}
            bgScale={1.75}
          />
          <Teaser
            tags={["UI", "Front End"]}
            link="/project#radicle-design-system"
            title="Radicle Design System"
            subtitle="Consistency By Design"
            bgImage={radicleDesignSystemImage}
            bgScale={1.75}
          />
          <Teaser
            tags={["UX", "UI", "Front End"]}
            link="/project#polkadot-delegation-dashboard"
            title="Polkadot Delegate Dashboard"
            subtitle="Participate in Governance"
            bgImage={polkadotDelegationImage}
            bgScale={1.75}
          />
        </animated.div>
      </div>
    </div>
  );
}
