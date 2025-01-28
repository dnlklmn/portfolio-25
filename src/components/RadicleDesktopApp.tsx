import Separator from "./Separator";
import ChevronRightIcon from "../assets/Icons/ChevronRightIcon";
import { useContext } from "react";
import MyContext from "./Context";
import GetInTouch from "./GetInTouch";
import Section from "./Section";
import radicleDesktopAppImage from "../assets/radicle-desktop-app.png";

function Left() {
  const { state } = useContext(MyContext);

  return (
    <div className="w-1/3">
      <div
        className={`w-full h-screen sticky top-4 font-Gentium flex h-100vh flex-col items-center gap-4 text-center`}
        style={{ fontSize: state.fontSize, paddingBottom: state.padding * 2 }}
      >
        <p className="uppercase font-Franklin font-black md:text-5xl lg:text-6xl leading-none">
          Radicle Desktop App
        </p>
        <div
          className="h-full flex flex-col align-left text-left indent-4"
          style={{ gap: state.padding / 2 }}
        >
          <p className="font-Franklin uppercase font-semibold">Your Work on Your Machine</p>
          <p>
            Creating a local-first app for the Radicle code forge presents unique UX challenges due
            to the shift from cloud-based services and the use of a peer-to-peer (p2p) network.
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
      style={{ fontSize: state.fontSize, gap: state.padding * 2 }}
    >
      <div
        className="z-50 w-full flex text-center flexoverflow-visible"
        style={{ gap: state.padding * 2 }}
      >
        <div className="w-full flex flex-col gap-4">
          <p className="text-start font-bold">Challenge and Goals</p>
          <div className="flex flex-col text-start" style={{ gap: state.padding * 2 }}>
            <p>
              Radicle Explorer is an open-source web application that anyone can deploy on their
              own. To ensure its success and usability, it is crucial that the design is consistent,
              easy to extend, and low maintenance. Contributors should be able to navigate the
              application effortlessly, match colors and text styles with specific use cases, and
              utilize a variety of front-end implementations.
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-4">
          <p className="text-start font-bold">Process and Responsibilities</p>
          <div className="flex flex-col text-start " style={{ gap: state.padding * 2 }}>
            <p>
              After carefully auditing the current UI and its patterns, I developed a color system,
              a typographic scale, and a bunch of components.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="Local First">
        <p>
          The Radicle desktop app allows you to manage issues and patches, review code, and receive
          change notifications directly on your machine, whether you're online or offline.
        </p>
        <div className="flex flex-col gap-0">
          <img src={radicleDesktopAppImage} alt="Radicle Desktop App" />
          <p className="italic text-center">
            Fig. 2.1 Looking at a Patch in the Radicle Desktop App
          </p>
        </div>
        <p>
          Building a local-first app ensures seamless usage but users need to always know if they
          are offline or online, where data comes from, what is synced and what is only on their
          computer.
        </p>
      </Section>
      <Section title="True to Code">
        <p>
          We envision the desktop app as an integral component of the Radicle toolchain, designed to
          enhance your workflow. By aligning the app's architecture and functionality closely with
          the underlying protocol and CLI tools, we aim to facilitate a smoother learning curve for
          new users. Central to these concepts is the immutable nature of Radicle's collaborative
          objects, which serves as the cornerstone of our system.
        </p>
      </Section>
      <Section last title="P2P UX">
        <p>
          Radicle operates differently from centralized networks. Users won't receive updates from
          unknown peers, even if they've both contributed to the same repository. Peer discovery is
          challenging and doesn't occur within the app. However, since everything is signed, you can
          always trace the source of information. To leverage this advantage, we have to clearly
          indicate where data comes from and provide the necessary details for verification.
        </p>
      </Section>
      <GetInTouch />
    </div>
  );
}

export default function RadicleDesktopApp() {
  return (
    <div className="w-full flex gap-8 text-center py-4 h-fit">
      <Left />
      <Separator direction="vertical" />
      <Right />
    </div>
  );
}
