import Separator from "./Separator";
import ChevronRightIcon from "../assets/Icons/ChevronRightIcon";
import { useContext } from "react";
import MyContext from "./Context";
import GetInTouch from "./GetInTouch";
import SectionBio from "./SectionBio";

function Left() {
  const { state } = useContext(MyContext);

  return (
    <div className="w-1/3">
      <div
        className={`w-full h-screen sticky top-4 font-Gentium flex h-100vh flex-col items-center gap-4 text-center`}
        style={{ fontSize: state.fontSize, paddingBottom: state.padding * 2 }}
      >
        <p className="uppercase font-Franklin font-black md:text-5xl lg:text-6xl leading-none">
          Daniel Kalman
        </p>
        <div
          className="h-full flex flex-col align-left text-left indent-4"
          style={{ gap: state.padding / 2 }}
        >
          <p className="font-Franklin uppercase font-semibold">DESIGN ENGINEER</p>
          <p>
            15 years of experience of UX design + 5 years of front end make for a flexible asset on
            a team, or an all-rounder on a project.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-start items-start w-full">
          <div className="flex items-center">
            <ChevronRightIcon />
            <a
              href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury"
              target="_blank"
              className="underline"
            >
              Get the app
            </a>
          </div>
          <div className="flex items-center">
            <ChevronRightIcon />
            <a href="https://radicle.xyz/" target="_blank" className="underline">
              Get started with Radicle
            </a>
          </div>
        </div>
        <div
          className="font-Gentium w-full flex align-left text-left"
          style={{ gap: state.padding / 2 }}
        >
          <p className="font-Gentium uppercase font-semibold">2024</p>
          <p>UX/UI Design</p>
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
      <SectionBio months={19} title="May 2023 - present">
        <div className="flex  justify-between">
          <p>
            <strong>Radicle - Sovereign Code Forge</strong>
          </p>
          <p>Berlin, Germany</p>
        </div>
        <p>
          As a product designer at Radicle, I'm responsible for the design and development of the
          blah blah
        </p>
      </SectionBio>
      <SectionBio months={27} title="Oct 2021 - Jan 2024">
        <div className="flex  justify-between">
          <p>
            <strong>Parity Technologies - Maintainers of Polkadot Blockchain</strong>
          </p>
          <p>Berlin, Germany</p>
        </div>
        <p>
          As a product designer at Radicle, I'm responsible for the design and development of the
          blah blah
        </p>
      </SectionBio>
      <SectionBio months={6} title="November 2020 - May 2021">
        <div className="flex  justify-between">
          <p>
            <strong>Quarters - Co-living</strong>
          </p>
          <p>Berlin, Germany</p>
        </div>
        <p>
          As a product designer at Radicle, I'm responsible for the design and development of the
          blah blah
        </p>
      </SectionBio>
      <SectionBio months={33} title="Mar 2018 - Nov 2020">
        <div className="flex  justify-between">
          <p>
            <strong>Satoshipay - Content Monetization with Stellar</strong>
          </p>
          <p>Berlin, Germany</p>
        </div>
        <p>
          As a product designer at Radicle, I'm responsible for the design and development of the
          blah blah
        </p>
      </SectionBio>
      <SectionBio months={6} title="January 2017 - July 2017">
        <div className="flex  justify-between">
          <p>
            <strong>Linkurious - Data Visualisation</strong>
          </p>
          <p>Paris, France</p>
        </div>
        <p>
          As a product designer at Radicle, I'm responsible for the design and development of the
          blah blah
        </p>
      </SectionBio>
      <SectionBio months={22} title="January 2017 - July 2017">
        <div className="flex  justify-between">
          <p>
            <strong>TOTL - Automatic Journaling</strong>
          </p>
          <p>San Francisco, CA</p>
        </div>
        <p>
          As a product designer at Radicle, I'm responsible for the design and development of the
          blah blah
        </p>
      </SectionBio>
      <SectionBio months={4} title="Jan 2015 - Apr 2015">
        <div className="flex  justify-between">
          <p>
            <strong>Dotloop - Paperless Project Management for Real Estate</strong>
          </p>
          <p>San Francisco, CA</p>
        </div>
        <p>
          As a product designer at Radicle, I'm responsible for the design and development of the
          blah blah
        </p>
      </SectionBio>
      <SectionBio months={42} title="Jul 2011 - Dec 2014">
        <div className="flex  justify-between">
          <p>
            <strong>Prezi - Zooming Presentations and Mindmapping Tool</strong>
          </p>
          <p>Budapest, Hungary</p>
        </div>
        <p>
          As a product designer at Radicle, I'm responsible for the design and development of the
          blah blah
        </p>
      </SectionBio>
      <GetInTouch />
    </div>
  );
}

export default function RadicleDesktopApp() {
  return (
    <div className="w-full flex gap-8 text-center py-4 h-fit">
      <Right />
      <Separator direction="vertical" />
      <Left />
    </div>
  );
}
