import Separator from "./Separator";
import { useContext } from "react";
import MyContext from "./Context";
import Section from "./Section";
import Project from "./Project";

export default function AutoProject() {
  const { state } = useContext(MyContext);

  return (
    <Project
      id="auto-workflow-builder"
      title="Auto: Visual Workflow Builder"
      subtitle="Blockchain Automation Made Visual"
      description="A visual workflow automation builder for cryptocurrency operations, built with a systematic parallel development approach using AI agents."
      tags={["UX", "UI", "Front End", "Architecture"]}
      year={2025}
      links={[
        {
          link: "https://github.com/dnlklmn/auto",
          text: "View on GitHub",
        },
      ]}
    >
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
          <div className="flex flex-col text-start" style={{ gap: state.padding }}>
            <p>
              Building complex workflow automation tools typically requires balancing visual
              clarity with technical capability. The challenge was to create a block-based workflow
              builder that could handle real blockchain events while maintaining a clean,
              understandable interface.
            </p>
            <p>
              The project also served as an experiment in systematic development: could a complex
              application be built efficiently using a parallel development approach with multiple
              specialized AI agents?
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col" style={{ gap: state.padding }}>
          <p className="text-start font-bold">Process and Responsibilities</p>
          <div className="flex flex-col text-start" style={{ gap: state.padding }}>
            <p>
              I architected and documented the complete system specification, breaking it into
              modular components that could be developed independently. I then orchestrated five
              specialized development agents, each responsible for a distinct layer of the
              application.
            </p>
            <p>
              The approach emphasized clear separation of concerns, comprehensive type safety, and
              security-conscious design throughout the development process.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="Block-Based Visual System">
        <p>
          The interface centers around five distinct block types, each with its own purpose and
          visual identity. Listener blocks (yellow) trigger workflows from blockchain events.
          Action blocks (purple) perform operations like sending notifications or writing data.
          Logic blocks (cyan) enable conditional branching. Utility blocks (orange) transform data
          between blocks. Historical blocks query past blockchain data.
        </p>
        <p>
          Blocks connect via visual links that define the execution flow. The canvas supports
          pan/zoom navigation and features an automatic layout engine that positions blocks
          intelligently based on their connections, maintaining visual clarity as workflows grow
          complex.
        </p>
      </Section>
      <Section title="Data Flow Architecture">
        <p>
          A key design challenge was enabling blocks to reference data from previous blocks in the
          workflow. The solution uses a backtick-wrapped token system: <code>`blockName.field`</code>{" "}
          resolves to specific fields from earlier blocks. This provides powerful data composition
          while remaining readable and secure.
        </p>
        <p>
          The execution engine performs depth-first traversal from the listener block, evaluating
          conditions and transforming data at each step. All executions are tracked with automatic
          versioning, allowing users to see how workflow structure changes affect outputs over
          time.
        </p>
      </Section>
      <Section title="Blockchain Integration">
        <p>
          Real blockchain events drive the workflows through Alchemy SDK integration. Users can
          listen to specific addresses, track transactions, and trigger automated responses to
          on-chain activity. The listener system handles WebSocket connections and provides mock
          data for testing workflows before deploying them to live blockchain networks.
        </p>
      </Section>
      <Section title="Security-First Design">
        <p>
          The transform system deliberately avoids arbitrary code execution. Rather than allowing
          custom JavaScript expressions, the application provides 20+ predefined, validated
          transforms for common operations: hex conversion, date formatting, string manipulation,
          JSON parsing, and more. This constraint prevents injection attacks while covering the
          majority of real-world use cases.
        </p>
        <p>
          Path validation prevents directory traversal attacks, and all user inputs are sanitized
          before processing. The TypeScript architecture enforces type safety throughout, catching
          potential issues at compile time rather than runtime.
        </p>
      </Section>
      <Section last title="Systematic Development Approach">
        <p>
          The project implemented a novel parallel development methodology. After creating
          comprehensive specifications, I coordinated five specialized agents working
          simultaneously:
        </p>
        <div
          className="flex flex-col text-start"
          style={{ gap: state.padding, paddingTop: state.padding }}
        >
          <p>
            <strong>Foundation Engineer</strong> - Project setup, TypeScript configuration, design
            system, and core types. Established the architectural foundation and design tokens.
          </p>
          <p>
            <strong>State Manager</strong> - All Svelte stores managing workflow state, execution
            tracking, UI state, settings persistence, and data storage. Created the reactive data
            layer.
          </p>
          <p>
            <strong>Core Libraries Engineer</strong> - Utilities for validation, transforms, data
            reference resolution, layout engine, and security. Built the functional core.
          </p>
          <p>
            <strong>Execution Engineer</strong> - Workflow execution engine, blockchain service
            integration, versioning system. Implemented the runtime logic.
          </p>
          <p>
            <strong>UI Engineer</strong> - All components from canvas to configuration panels,
            routing, and complete user interface. Brought everything together visually.
          </p>
        </div>
        <p>
          This approach reduced development time by approximately 70% compared to sequential
          implementation, completing a 50-70 hour project in roughly 15-18 hours through parallel
          execution and clear module boundaries.
        </p>
      </Section>
    </Project>
  );
}
