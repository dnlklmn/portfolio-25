import Separator from "./Separator";
import { useContext } from "react";
import MyContext from "./Context";
import Section from "./Section";
import inboxSidebarImage from "../assets/RadicleDesktopApp/inbox-sidebar.png";
import cliAndAppImage from "../assets/RadicleDesktopApp/cli-and-app.png";
import wireframes1Image from "../assets/RadicleDesktopApp/wireframes-1.png";
import wireframes2Image from "../assets/RadicleDesktopApp/wireframes-2.png";
import patchesImage from "../assets/RadicleDesktopApp/patches.png";
import reviewImage from "../assets/RadicleDesktopApp/review.png";
import Lightbox from "./Lightbox";
import Project from "./Project";

export default function RadicleDesktopApp() {
  const { state } = useContext(MyContext);

  return (
    <Project
      id="radicle-desktop-app"
      title="Radicle Desktop App"
      subtitle="Your Code on Your Machine"
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
      <div className="flex flex-col" style={{ gap: state.padding }}>
        <div className="w-full flex" style={{ gap: state.padding * 2 }}>
          <Lightbox image={patchesImage} />
          <Lightbox image={reviewImage} />
        </div>
        <p className="txt-secondary italic text-center">
          Patches and the review flow is the essence of the application
        </p>
      </div>
      <div
        className="w-full flex text-center flexoverflow-visible"
        style={{ gap: state.padding * 2 }}
      >
        <div className="w-full flex flex-col gap-4">
          <p className="text-start font-bold">Challenge and Goals</p>
          <div
            className="flex flex-col text-start"
            style={{ gap: state.padding }}
          >
            <p>
              We envision the desktop app as an integral component of the
              Radicle toolchain, designed to enhance your workflow.
            </p>
            <p>
              Creating a local-first code review app for the Radicle code forge
              presents unique UX challenges due to the shift from cloud-based
              services and the use of a peer-to-peer network.
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-4">
          <p className="text-start font-bold">Process and Responsibilities</p>
          <div
            className="flex flex-col text-start "
            style={{ gap: state.padding }}
          >
            <p>
              I started by designing flows charts to understand the Radicle
              protocol and match Radicle CLI's functions. Once the flows were
              discussed and validated, I moved on to creating high fidelity
              mockups and prototypes and started testing.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="Foundations">
        <p>
          Getting the foundations right matters. I took the time needed to nail
          down the structure and hierarchy, exploring different options and
          weighing user needs against ease-of-use, before moving on to mockups.
          Patch structure and the ability to review changes are central to the
          Radicle desktop app.
        </p>
        <Lightbox image={wireframes1Image} />
        <Lightbox image={wireframes2Image} />
      </Section>
      <Section title="Local First">
        <Lightbox image={inboxSidebarImage} />
        <p>
          In local-first and peer-to-peer architectures, you're never entirely
          sure if you're viewing the latest version. Radicle also operates
          differently from centralized networks—users won't receive updates from
          unknown peers, even if they've both contributed to the same
          repository. Peer discovery is challenging and doesn't happen within
          the app itself.
        </p>
        <p>
          To address these challenges, I made sure the differentiation between
          canonical and non-canonical branches is visible in the UI and clear
          from the hierarchy. Everything is trackable by displaying IDs for all
          entities, always showing revisions and the nodes that published them.
          Since everything is signed, you can always trace the source of
          information—so we clearly indicate where data comes from and provide
          the necessary details for verification, along with connectivity and
          sync status.
        </p>
      </Section>
      <Section last title="True to Code">
        <Lightbox image={cliAndAppImage} />
        <p>
          The app mirrors the underlying protocol and CLI tools closely. This
          makes it easier for users to move between the desktop app and command
          line without switching mental models. Everything in Radicle is
          immutable and signed, so the UI reflects that—you can always see
          what's changed, by whom, and trace it back to its source.
        </p>
      </Section>
    </Project>
  );
}
