import Separator from "./Separator";
import { useContext } from "react";
import MyContext from "./Context";
import Section from "./Section";
import radicleDesktopAppImage from "../assets/radicle-desktop-app.png";
import Lightbox from "./Lightbox";
import Project from "./Project";
import { MarkdownComponent } from "./MarkdownComponent";

const noteContent = `
---
date: 2025-02-07T13:11:09.872Z
---

type: h-entry
name: Hey
content:

<p>Hey ho</p>`;

export default function RadicleDesktopApp() {
  const { state } = useContext(MyContext);

  return (
    <Project
      id="radicle-desktop-app"
      title="Radicle Desktop App"
      subtitle="Your Work on Your Machine"
      description="The Radicle desktop app allows you to manage issues and patches, review code, and
      receive change notifications directly on your machine, whether you're online or offline."
      tags={["UI", "UX"]}
      year={2024}
      links={[
        {
          link: "https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury",
          text: "Get the app",
        },
        {
          link: "https://radicle.xyz",
          text: "Get started with Radicle",
        },
      ]}
    >
      <Lightbox image={radicleDesktopAppImage} />
      <div
        className="w-full flex text-center flexoverflow-visible"
        style={{ gap: state.padding * 2 }}
      >
        <div className="w-full flex flex-col gap-4">
          <p className="text-start font-bold">Challenge and Goals</p>
          <div className="flex flex-col text-start" style={{ gap: state.padding }}>
            <p>
              We envision the desktop app as an integral component of the Radicle toolchain,
              designed to enhance your workflow.{" "}
            </p>
            <p>
              Creating a local-first code review app for the Radicle code forge presents unique UX
              challenges due to the shift from cloud-based services and the use of a peer-to-peer
              (p2p) network.
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-4">
          <p className="text-start font-bold">Process and Responsibilities</p>
          <div className="flex flex-col text-start " style={{ gap: state.padding }}>
            <p>
              I started by designing low fidelity flows to match Radicle CLI and the underlying
              protocol. Once the flows were validated, I created high fidelity mockups and
              prototypes so we can start testing.
            </p>
            <p>Currently we're implementing the designs and conducting user tests.</p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="Local First">
        <p>
          To build a great local-first user experiecne we need to indicate when the app is offline
          and when it is syncing data. Provide visual cues or notifications to inform users about
          the current state of connectivity and data synchronization.
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
      <Section last title="Wireframes">
        <p>
          Patch structure and the ability to review changes are central to the Radicle desktop app.
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
      <MarkdownComponent content={noteContent} />
    </Project>
  );
}
