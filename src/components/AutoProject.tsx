import Separator from "./Separator";
import { useContext } from "react";
import MyContext from "./Context";
import Section from "./Section";
import Project from "./Project";
import PasswordProtected from "./PasswordProtected";
import Lightbox from "./Lightbox";
import Conditions from "../assets/auto/conditions.png";
import NestedBlocks from "../assets/auto/nested-blocks.png";
import BlocksGrid from "../assets/auto/blocks-grid.png";
import GenerateWorkflow from "../assets/auto/generate-workflow.png";
import CryptoListeners from "../assets/auto/crypto-listeners.png";
import MCPServer from "../assets/auto/mcp-server.png";
import SimplerBlocks from "../assets/auto/simpler-blocks.png";
import RealTimeCollab from "../assets/auto/real-time-collab.png";
import Header from "../assets/auto/header.png";

function AutoProjectContent() {
  const { state } = useContext(MyContext);

  return (
    <Project
      id="auto-workflow-builder"
      title="Auto"
      subtitle="Visual Workflow Builder for Blockchain Automation"
      description="A visual workflow builder with real-time collaboration that bridges on-chain and off-chain automation. Use blockchain triggers to kick off workflows, or aggregate off-chain data to construct on-chain transactions."
      tags={["UX", "UI", "Front End"]}
      year={2025}
      links={[
        {
          link: "https://auto-workflow-builder.netlify.app",
          text: "Live Demo",
        },
      ]}
    >
      <Lightbox image={Header} />
      <div
        className="w-full flex text-center flexoverflow-visible"
        style={{
          gap: state.padding * 2,
          paddingTop: state.padding * 2,
          paddingBottom: state.padding * 2,
        }}
      >
        <div className="w-full flex flex-col" style={{ gap: state.padding }}>
          <p className="text-start font-bold">Challenge and Goals</p>
          <div
            className="flex flex-col text-start"
            style={{ gap: state.padding }}
          >
            <p>
              The goal was to create a crypto-native workflow automation tool
              that bridges on-chain and off-chain worlds. On-chain events should
              trigger off-chain workflows, and off-chain data should construct
              on-chain transactions.
            </p>
            <p>
              The challenge: could we build a better workflow builder
              altogether, or would making it crypto-native be our only
              advantage? Use cases vary widely, and workflow builders already
              exist.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col" style={{ gap: state.padding }}>
          <p className="text-start font-bold">Process and Responsibilities</p>
          <div
            className="flex flex-col text-start"
            style={{ gap: state.padding }}
          >
            <p>
              I started exploring how workflows can be built, what are common
              structures for recurring crypto workflows, and where these 2 meet.
            </p>
            <p>
              Once I landed on a set of requirements, I started designing the
              interface with a limited set of nodes and connectors to check if
              the structure meets works, the primary goal being to reduce
              cognitive load.
            </p>
            <p>
              Once the initial user tests eliminated the usability issues I
              implemented a simple multiplayer experience using Yjs and WebRTC
              to enable real-time collaboration. I am currently running user
              tests on this prototype as the requirements for the production MVP
              form.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="Early Experiments">
        <p>
          The initial research happened on 2 tracks: I wanted to explore what's
          the best way to build workflow maps, and in parallel, find out what a
          good workflow is that we'd like to map.
        </p>
        <p>
          I built multiple prototypes to explore different approaches to
          building workflow maps. Should we direct the flow or let the user go
          freeform? Should we build atomic nodes users can build anything from
          or more complex ones to solve for particular use cases? Is a condition
          a connector or a node?
        </p>
        <Lightbox image={NestedBlocks} />
        <Lightbox image={BlocksGrid} />
        <Lightbox image={Conditions} />
        <p>
          I then forked n8n so I can experiment with a real worfklow builder and
          find out what users should be aiming for. What is a good workflow,
          what are the workflows we'd like to let users build and what are some
          we don't need to accomodate? Do we need loops and recursion? What are
          the most commond crypto workflows people struggle with and how could
          we prototype them quickly?
        </p>
        <Lightbox image={GenerateWorkflow} />
        <Lightbox image={CryptoListeners} />
        <Lightbox image={MCPServer} />
      </Section>
      <Section title="MVP Requirements">
        <p>
          The requirements for the MVP are based on where the 2 research paths
          met: simplified use cases we need to solve first, and a simplified
          worfklow builder we can build them with.
        </p>
        <Lightbox image={SimplerBlocks} />
        <p>
          A limited set of blocks, each serving a distinct purpose reduce
          cognitive load. Good defaults educate users about ideal outcomes.
        </p>
      </Section>
      <Section title="Real-Time Collaboration" last>
        <p>
          Real-time collaboration sets our platform apart, allowing users to
          work together on projects in real-time. This feature is powered by
          Yjs, which enables real-time communication between users through
          WebRTC.
        </p>
        <Lightbox image={RealTimeCollab} />
        <p>
          CRDTs allow to share updates without a central server which is great
          for privacy and tracability but also makes prototyping very quick.
        </p>
      </Section>
    </Project>
  );
}

export default function AutoProject() {
  return (
    <PasswordProtected
      storageKey="auto-project-unlocked"
      correctPassword="blockchain"
    >
      <AutoProjectContent />
    </PasswordProtected>
  );
}
