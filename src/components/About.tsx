import Separator from "./Separator";
import { useContext } from "react";
import MyContext from "./Context";
import SectionBio from "./SectionBio";
import ProfilePicture from "../assets/dk.png";

function Left() {
  const { state } = useContext(MyContext);

  return (
    <div className="w-1/3 ">
      <div
        className={`w-full sticky font-Gentium flex flex-col items-center text-center top-0`}
        style={{ fontSize: state.fontSize, gap: state.padding * 2, height: `calc(100vh - ${state.padding * 4}px)` }}
      >
        <img src={ProfilePicture} alt="Radicle Desktop App" />
        <p className="uppercase font-Franklin font-black md:text-5xl lg:text-7xl leading-none">
          Daniel Kalman
        </p>
        <div
          className="h-full flex flex-col align-left text-left"
          style={{ gap: state.padding / 2 }}
        >
          <p>
            I'm a design engineer with 15 years of UX design experience and 5 years on the front of
            front end.
          </p>
          <p>
            I believe in a decentralized future where individuals have full ownership and control
            over their personal data in the digital world.
          </p>
          <p>I'm a father of 2, based in Berlin, Germany.</p>
        </div>
        <div className="flex gap-8 text-start justify-center w-full">
          <a href="https://github.com/dnlklmn" target="_blank" className="underline">
            Github
          </a>
          <a href="https://bsky.app/profile/dnlklmn.online" target="_blank" className="underline">
            Bluesky
          </a>
          <a href="mailto:dnl.klmn@gmail.com" className="underline">
            Email
          </a>
        </div>
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
      <SectionBio current location="Berlin, Germany" months={19} time="May 2023 - present">
        <p>
          <strong>Radicle - Sovereign Code Forge</strong>
        </p>
        <p>
          As a product designer at Radicle, I'm responsible for the UX of our web and desktop apps,
          and the design system. I also help refine the front end, implement the design system and
          work on the visual design of the apps.
        </p>
      </SectionBio>
      <SectionBio location="Berlin, Germany" months={27} time="Oct 2021 - Jan 2024">
        <p>
          <strong>Parity Technologies - Maintainers of Polkadot Blockchain</strong>
        </p>
        <p>
          As a product designer at Parity, I helped create the Polkadot design system, and worked on
          decentralized apps like the Delegation Dashboard, and Multisig Commander.
        </p>
      </SectionBio>
      <SectionBio location="Berlin, Germany" months={6} time="November 2020 - May 2021">
        <p>
          <strong>Quarters - Co-living</strong>
        </p>
        <p>
          I joined Quarters was a (failed) attempt to return to web2. I quickly realized my heart
          lies with decenrtralization and distributed systems.
        </p>
      </SectionBio>
      <SectionBio location="Berlin, Germany" months={33} time="Mar 2018 - Nov 2020">
        <p>
          <strong>Satoshipay - Content Monetization with Stellar</strong>
        </p>
        <p>
          As the first product designer I designed and build prototypes for monetizing content using
          cryptocurrency, and an app to facilitate cross-border payments.
        </p>
      </SectionBio>
      <SectionBio location="Paris, France" months={6} time="January 2017 - July 2017">
        <p>
          <strong>Linkurious - Data Visualisation</strong>
        </p>
        <p>
          As a UX consultant I helped Linkurious improve the usability of their graph visualization
          tool.
        </p>
      </SectionBio>
      <SectionBio location="San Francisco, CA" months={22} time="January 2017 - July 2017">
        <p>
          <strong>TOTL - Automatic Journaling</strong>
        </p>
        <p>
          Joining this experimental project helped refine my skills in data visualization and rapid
          prototyping. I also learned a lot about the importance of user research and testing.
        </p>
      </SectionBio>
      <SectionBio location="San Francisco, CA" months={4} time="Jan 2015 - Apr 2015">
        <p>
          <strong>Dotloop - Paperless Project Management for Real Estate</strong>
        </p>
        <p>
          As a UX consultant I helped integrate a camera into the Dotloop app to make it easier for
          real estate agents to document the acquisition of properties. The company was acquired by
          Zillow shortly thereafter.
        </p>
      </SectionBio>
      <SectionBio location="Budapest, Hungary" months={42} time="Jul 2011 - Dec 2014">
        <p>
          <strong>Prezi - Zooming Presentations and Mindmapping Tool</strong>
        </p>
        <p>
          My first job with the time UX designer, I learned about the importance of user research,
          A/B testing, and how rapid prototyping helps with these efforts. I designed the capability
          to reuse content from previous presentations.
        </p>
      </SectionBio>
    </div>
  );
}

export default function RadicleDesktopApp() {
  return (
    <div className="w-full flex gap-8 text-center h-fit">
      <Right />
      <Separator direction="vertical" />
      <Left />
    </div>
  );
}
