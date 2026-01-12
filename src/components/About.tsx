import { useState, useContext } from "react";
import Separator from "./Separator";
import MyContext from "./Context";
import SectionBio from "./SectionBio";
import ProfilePicture from "../assets/dk.png";

function Left() {
  const { state } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="w-full md:w-1/3 md:sticky font-Gentium flex flex-col items-center text-center top-0"
      style={{
        fontSize: state.fontSize,
        gap: state.padding * 2,
        height: `calc(100vh - ${state.padding * 4}px)`,
      }}
    >
      {isLoading && (
        <div className="flex items-center justify-center h-1/4 w-full light ">
          Loading...
        </div>
      )}
      <img
        src={ProfilePicture}
        alt="Radicle Desktop App"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
      />
      <p
        className="uppercase font-Franklin font-black leading-none"
        style={{ fontSize: state.fontSize * 2.5 }}
      >
        Daniel Kalman
      </p>
      <div
        className="md:h-full flex flex-col align-left text-left"
        style={{ gap: state.padding }}
      >
        <p>
          I'm a design engineer with 15 years of design experience and 7 years
          on the front of front end.
        </p>
        <p>
          I've always operated between design and code: playing with ideas in
          Figma, then trying them out in prototypes built with real logic and
          data. I build design systems help maintain consistency and formalize
          decisions as the product evolves.
        </p>
        <p>
          Since AI has supercharged my building capacity I can experiment way
          quicker and make better decisions.
        </p>
        <div style={{ height: "24px", display: "flex", alignItems: "center" }}>
          <Separator direction="horizontal" />
        </div>
        <p>
          I believe in a decentralized future where individuals have full
          ownership and control over their personal data in the digital world.
        </p>
        <p>I'm a father of 2, based in Berlin, Germany.</p>
      </div>
      <div
        className="flex text-start justify-start md:justify-center w-full"
        style={{ gap: state.padding * 2 }}
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
      </div>
    </div>
  );
}

function Right() {
  const { state } = useContext(MyContext);

  return (
    <div
      className={`font-Gentium flex w-full flex-col leading-snug`}
      style={{ fontSize: state.fontSize, gap: state.padding }}
    >
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
      <SectionBio
        company="Quarters"
        location="Berlin, Germany"
        months={6}
        time="November 2020 - May 2021"
        title="Co-living management platform"
      >
        <p>
          I joined Quarters as a (failed) attempt to return to web2. I quickly
          realized my heart lies with decenrtralization and distributed systems.
        </p>
      </SectionBio>
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
      <SectionBio
        company="Linkurious"
        location="Paris, France"
        months={6}
        time="January 2017 - July 2017"
        title="Graph visualization and analysis"
      >
        <p>
          As a UX consultant I helped Linkurious improve the usability of their
          graph visualization tool.
        </p>
      </SectionBio>
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
      <SectionBio
        company="Dotloop"
        location="San Francisco, CA"
        months={4}
        time="Jan 2015 - Apr 2015"
        title="Real estate transaction management"
      >
        <p>
          As a UX consultant I helped integrate a camera into the Dotloop app to
          make it easier for real estate agents to document the acquisition of
          properties. The company was acquired by Zillow shortly thereafter.
        </p>
      </SectionBio>
      <SectionBio
        company="Prezi"
        location="Budapest, Hungary"
        months={42}
        time="Jul 2011 - Dec 2014"
        title="Zooming presentation software"
      >
        <p>
          My first job with the time UX designer, I learned about the importance
          of user research, A/B testing, and how rapid prototyping helps with
          these efforts. I designed the capability to reuse content from
          previous presentations.
        </p>
      </SectionBio>
    </div>
  );
}

export default function RadicleDesktopApp() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-8 text-center h-fit">
      <Right />
      <Separator className="hidden md:block" direction="vertical" />
      <Left />
    </div>
  );
}
