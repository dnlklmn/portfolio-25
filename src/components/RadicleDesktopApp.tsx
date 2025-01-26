import Separator from "./Separator";
import ChevronRightIcon from "../assets/Icons/ChevronRightIcon";
import { useContext } from "react";
import MyContext from "./Context";
import GetInTouch from "./GetInTouch";

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
            to the shift from cloud-based services and the use of a peer-to-peer (p2p) network. The
            Radicle desktop app allows you to manage issues and patches, review code, and receive
            change notifications directly on your machine, whether you're online or offline.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-start items-start w-full">
          <div className="flex items-center">
            <ChevronRightIcon />
            <a href="/" className="underline">
              Get the app
            </a>
          </div>
          <div className="flex items-center">
            <ChevronRightIcon />
            <a href="/" className="underline">
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
        className="w-full text-center flex flex-col overflow-visible"
        style={{ gap: state.padding / 2 }}
      >
        <div className="flex  overflow-visible">
          <p className="w-1/3 text-start font-bold">Local First</p>
          <div className="w-2/3 flex flex-col" style={{ gap: state.padding * 2 }}>
            <p className="text-start pr-[10%]">
              Building a local-first app ensures seamless usage, whether offline or online, with
              instant local saving and no waiting for spinners. When you or your peers go online,
              updates sync automatically. Challenge: users need to always know if they are offline
              or online, know what data is synced and what is only on their computer.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8">
        <div className="flex">
          <p className="w-1/3 text-start font-bold">P2P UX</p>
          <div className="w-2/3 flex flex-col" style={{ gap: state.padding * 2 }}>
            <p className=" text-start pr-[10%]">
              Radicle operates differently from centralized networks. Users won't receive updates
              from unknown peers, even if they've both contributed to the same repository. Peer
              discovery is challenging and doesn't occur within the app. However, since everything
              is signed, you can always trace the source of information. To leverage this advantage,
              we have to clearly indicate where data comes from and provide the necessary details
              for verification.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8 ">
        <div className="flex">
          <p className="w-1/3 text-start font-bold"></p>
          <p className="w-2/3 text-start pr-[10%]">
            Colors and font styles are managed in Figma, where they are incorporated into the UI kit
            and optimized for both dark and light modes. These tokenized design elements are then
            exported and converted into specific style sheets, which can be utilized in production
            components. The tokens are stored in a shared repo on Radicle that serves as a single
            source of truth.
            <br /> <br /> We use Tokens Studio to manage tokens in Figma and store them in a shared
            JSON file. From this JSON they get transformed automatically into separate style sheeets
            for easier management. Whenever a token gets updated, the style sheets and with them the
            components in production will also update.
          </p>
        </div>
      </div>
      <Separator direction="horizontal" />
      <div className="w-full text-center flex flex-col gap-8 pb-8">
        <div className="flex">
          <p className="w-1/3 text-start font-bold">Delightful Details</p>
          <p className="w-2/3 text-start pr-[10%]">
            At Radicle we're' building developing developer tools. It's crucial to prioritize
            readability and a clear, easy-to-understand hierarchy while keeping decorative elements
            to a minimum. However, a design system should also have character. Radicle's style pays
            homage to the barefoot developers, drawing inspiration from the aesthetics of 90s
            programming games and interfaces.
          </p>
        </div>
      </div>
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
