import { useState, useContext, useEffect } from "react";
import { useTrail, animated, config } from "@react-spring/web";
import Separator from "./Separator";
import MyContext from "./Context";
import SectionBio from "./SectionBio";
import ProfilePicture from "../assets/dk.png";

export function AboutBio() {
  const { state } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Items: name, bio paragraphs (3), separator, paragraphs (2), links
  const items = Array(8).fill(null);

  const textTrail = useTrail(items.length, {
    opacity: 1,
    from: { opacity: isMobile ? 1 : 0 },
    config: { duration: isMobile ? 0 : 50 },
    delay: isMobile ? 0 : 50, // Reduced delay to appear quicker after columns animation
  });

  return (
    <div
      className="w-full font-Gentium flex flex-col items-center text-center"
      style={{
        fontSize: state.fontSize,
        gap: state.padding * 2,
        paddingBottom: state.padding * 4, // Add padding at bottom for scroll space
      }}
    >
      {isLoading && (
        <div className="flex items-center justify-center h-1/4 w-full light ">
          Loading...
        </div>
      )}
      <img
        src={ProfilePicture}
        alt="Daniel Kalman"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        style={{
          display: isLoading ? "none" : "block",
          paddingTop: isMobile ? state.padding * 2 : 0,
        }}
      />
      <animated.p
        className="uppercase font-Franklin font-black leading-none"
        style={{ fontSize: state.fontSize * 2.5, ...textTrail[0] }}
      >
        Daniel Kalman
      </animated.p>
      <div
        className="md:h-full flex flex-col align-left text-left"
        style={{ gap: state.padding }}
      >
        <animated.p
          className={isMobile ? "leading-relaxed" : ""}
          style={textTrail[1]}
        >
          I'm a design engineer with 15 years of design experience and 7 years
          on the front of front end.
        </animated.p>
        <animated.p
          className={isMobile ? "leading-relaxed" : ""}
          style={textTrail[2]}
        >
          I operate between design and code: from exploring concepts to building
          functional prototypes and creating design systems to formalize
          decisions as products evolve.
        </animated.p>
        <animated.p
          className={isMobile ? "leading-relaxed" : ""}
          style={textTrail[3]}
        >
          I've been progressively integrating AI into my workflow, starting with
          exploring the problem space, then expanding to ideation and rapid
          prototyping, and more recently orchestrating multi-agent systems for
          complex production challenges.
        </animated.p>
        <animated.div
          style={{
            height: "24px",
            display: "flex",
            alignItems: "center",
            ...textTrail[4],
          }}
        >
          <Separator direction="horizontal" />
        </animated.div>
        <animated.p
          className={isMobile ? "leading-relaxed" : ""}
          style={textTrail[5]}
        >
          I believe in a decentralized future where individuals have full
          ownership and control over their personal data in the digital world.
        </animated.p>
        <animated.p
          className={isMobile ? "leading-relaxed" : ""}
          style={textTrail[6]}
        >
          I'm a father of 2, based in Berlin, Germany.
        </animated.p>
      </div>
      <animated.div
        className="flex text-start justify-start md:justify-center w-full"
        style={{ gap: state.padding * 2, ...textTrail[7] }}
      >
        <a
          href="https://github.com/dnlklmn"
          target="_blank"
          className="underline"
        >
          Github
        </a>
        <a
          href="https://bsky.app/profile/dnlklmn.online"
          target="_blank"
          className="underline"
        >
          Bluesky
        </a>
        <a href="mailto:dnl.klmn@gmail.com" className="underline">
          Email
        </a>
      </animated.div>
    </div>
  );
}

export function AboutTimeline() {
  const { state } = useContext(MyContext);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), isMobile ? 0 : 400);
    return () => clearTimeout(timer);
  }, [isMobile]);

  const items = Array(9).fill(null); // 9 SectionBio components

  const trail = useTrail(items.length, {
    from: {
      opacity: isMobile ? 1 : 0,
      transform: isMobile ? "translateX(0px)" : "translateX(-20px)",
    },
    to: showContent
      ? { opacity: 1, transform: "translateX(0px)" }
      : {
          opacity: isMobile ? 1 : 0,
          transform: isMobile ? "translateX(0px)" : "translateX(-20px)",
        },
    config: isMobile
      ? { duration: 0 }
      : { ...config.gentle, tension: 180, friction: 28 },
  });

  return (
    <div
      className={`font-Gentium flex w-full flex-col leading-snug`}
      style={{ fontSize: state.fontSize, gap: state.padding }}
    >
      <animated.div style={trail[0]}>
        <SectionBio
          current
          company="Entropy"
          location="Berlin, Germany"
          months={6}
          time="June 2025 - present"
          title="Blockchain workflow automation platform"
        >
          <p>
            I am responsible for everything design. Research and ideation,
            building and testing prototypes and planning execution of the front
            end.
          </p>
        </SectionBio>
      </animated.div>
      <animated.div style={trail[1]}>
        <SectionBio
          company="Radicle"
          location="Berlin, Germany"
          months={19}
          time="May 2023 - June 2025"
          title="Sovereign code collaboration"
        >
          <p>
            I was responsible for the UX of the web and desktop apps, and the
            design system. I also helped refine the front end, implement the
            design system and work on the visual design of the apps once the
            designs were done.
          </p>
        </SectionBio>
      </animated.div>
      <animated.div style={trail[2]}>
        <SectionBio
          company="Parity Technologies"
          location="Berlin, Germany"
          months={27}
          time="Oct 2021 - Jan 2024"
          title="Infrastructure and tools for Polkadot"
        >
          <p>
            As a product designer at Parity, I helped create the Polkadot design
            system, and worked on decentralized apps like the Delegation
            Dashboard, and Multisig Commander.
          </p>
        </SectionBio>
      </animated.div>
      <animated.div style={trail[3]}>
        <SectionBio
          company="Quarters"
          location="Berlin, Germany"
          months={6}
          time="November 2020 - May 2021"
          title="Co-living management platform"
        >
          <p>
            I joined Quarters as a (failed) attempt to return to web2. I quickly
            realized my heart lies with decenrtralization and distributed
            systems.
          </p>
        </SectionBio>
      </animated.div>
      <animated.div style={trail[4]}>
        <SectionBio
          company="Satoshipay"
          location="Berlin, Germany"
          months={33}
          time="Mar 2018 - Nov 2020"
          title="Cryptocurrency payments and content monetization"
        >
          <p>
            As the first product designer I designed and build prototypes for
            monetizing content using cryptocurrency, and an app to facilitate
            cross-border payments.
          </p>
        </SectionBio>
      </animated.div>
      <animated.div style={trail[5]}>
        <SectionBio
          company="Linkurious"
          location="Paris, France"
          months={6}
          time="January 2017 - July 2017"
          title="Graph visualization and analysis"
        >
          <p>
            As a UX consultant I helped Linkurious improve the usability of
            their graph visualization tool.
          </p>
        </SectionBio>
      </animated.div>
      <animated.div style={trail[6]}>
        <SectionBio
          company="TOTL"
          location="San Francisco, CA"
          months={22}
          time="January 2017 - July 2017"
          title="Experimental data visualization platform"
        >
          <p>
            Joining this experimental project helped refine my skills in data
            visualization and rapid prototyping. I also learned a lot about the
            importance of user research and testing.
          </p>
        </SectionBio>
      </animated.div>
      <animated.div style={trail[7]}>
        <SectionBio
          company="Dotloop"
          location="San Francisco, CA"
          months={4}
          time="Jan 2015 - Apr 2015"
          title="Real estate transaction management"
        >
          <p>
            As a UX consultant I helped integrate a camera into the Dotloop app
            to make it easier for real estate agents to document the acquisition
            of properties. The company was acquired by Zillow shortly
            thereafter.
          </p>
        </SectionBio>
      </animated.div>
      <animated.div style={trail[8]}>
        <SectionBio
          company="Prezi"
          location="Budapest, Hungary"
          months={42}
          time="Jul 2011 - Dec 2014"
          title="Zooming presentation software"
        >
          <p>
            My first job with the time UX designer, I learned about the
            importance of user research, A/B testing, and how rapid prototyping
            helps with these efforts. I designed the capability to reuse content
            from previous presentations.
          </p>
        </SectionBio>
      </animated.div>
    </div>
  );
}

export default function About() {
  return <AboutTimeline />;
}
