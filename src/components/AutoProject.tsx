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
      description="A visual workflow builder that bridges on-chain and off-chain automation. Use blockchain triggers to kick off workflows, or aggregate off-chain data to construct on-chain transactions."
      tags={["UX", "UI", "Front End"]}
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
              Blockchain automation requires bridging two worlds: on-chain events that trigger
              off-chain workflows (monitoring accounts, updating dashboards), and off-chain data
              that constructs on-chain transactions (sentiment analysis timing token airdrops).
              The challenge was creating a visual interface that made these complex interactions
              intuitive.
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
              I designed the complete interaction model and visual system, then created detailed
              specifications for each component. The design process emphasized clarity through
              color-coded block types, intuitive data flow visualization, and progressive
              disclosure of complexity.
            </p>
            <p>
              After designing the system, I orchestrated five specialized development agents to
              build it in parallel, reducing development time by approximately 70% while
              maintaining design fidelity.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="Research and Early Experiments">
        <p>
          Before settling on the final design, I explored multiple approaches through working
          prototypes. This iterative process helped identify which interaction patterns worked
          best for blockchain workflows and informed key design decisions in the final version.
        </p>
        <div
          className="w-full flex flex-col"
          style={{
            gap: state.padding * 2,
            paddingTop: state.padding * 2,
            paddingBottom: state.padding * 2,
          }}
        >
          <div className="w-full bg-secondary" style={{ aspectRatio: "16/9" }} />
          <div className="flex flex-col" style={{ gap: state.padding }}>
            <p>
              <strong>n8n Fork with AI Workflow Generation</strong> - Extended n8n's existing
              interface to explore AI-powered workflow generation and blockchain-specific node
              types. This experiment revealed the limitations of adapting existing tools versus
              designing purpose-built interfaces.
            </p>
            <p>
              <a
                href="https://github.com/dnlklmn/n8n"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-secondary hover:txt-primary"
              >
                View n8n Fork →
              </a>
            </p>
          </div>
        </div>
        <div
          className="w-full flex flex-col"
          style={{
            gap: state.padding * 2,
            paddingBottom: state.padding * 2,
          }}
        >
          <div className="w-full bg-secondary" style={{ aspectRatio: "16/9" }} />
          <div className="flex flex-col" style={{ gap: state.padding }}>
            <p>
              <strong>Early Prototype: Block-Based Interface</strong> - First exploration of a
              custom block-based design. Tested different approaches to block configuration,
              connection visualization, and data flow representation to find the most intuitive
              patterns.
            </p>
            <p>
              <a
                href="https://github.com/dnlklmn/auto-proto-1"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-secondary hover:txt-primary"
              >
                View Prototype 1 →
              </a>
            </p>
          </div>
        </div>
        <div
          className="w-full flex flex-col"
          style={{
            gap: state.padding * 2,
            paddingBottom: state.padding * 2,
          }}
        >
          <div className="w-full bg-secondary" style={{ aspectRatio: "16/9" }} />
          <div className="flex flex-col" style={{ gap: state.padding }}>
            <p>
              <strong>Canvas-Based Workflow Editor</strong> - Explored a more flexible canvas
              approach with free-form positioning. User testing showed that automatic layout was
              preferable to manual positioning, informing the final design's layout engine.
            </p>
            <p>
              <a
                href="https://github.com/dnlklmn/auto-proto-2"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-secondary hover:txt-primary"
              >
                View Prototype 2 →
              </a>
            </p>
          </div>
        </div>
      </Section>
      <Section title="Block-Based Visual System">
        <div className="w-full bg-secondary" style={{ aspectRatio: "16/9", marginBottom: state.padding * 2 }} />
        <p>
          The design uses color as a primary navigation tool. Five distinct block types each have
          their own hue: Listener blocks (yellow) for blockchain triggers, Action blocks (purple)
          for operations, Logic blocks (cyan) for conditionals, Utility blocks (orange) for
          transforms, and Historical blocks for querying past data. This color system lets users
          quickly scan complex workflows and understand execution patterns at a glance.
        </p>
        <p>
          Visual connection lines show execution flow between blocks. The interface includes an
          automatic layout engine that positions blocks intelligently based on their
          relationships, preventing the visual clutter that typically emerges in workflow tools
          as complexity grows.
        </p>
      </Section>
      <Section title="Data Flow and Token System">
        <div className="w-full bg-secondary" style={{ aspectRatio: "16/9", marginBottom: state.padding * 2 }} />
        <p>
          A key design challenge was making data references between blocks both powerful and
          approachable. The interface uses a backtick-wrapped token system:{" "}
          <code>`blockName.field`</code> resolves to specific outputs from earlier blocks. This
          syntax is familiar to developers while remaining readable enough for non-technical
          users to understand and modify.
        </p>
        <p>
          The execution view shows how data flows through the workflow in real-time, with each
          block's output visualized as it processes. Version tracking lets users see how changes
          to workflow structure affect results over time, making iteration and debugging more
          transparent.
        </p>
      </Section>
      <Section title="Blockchain Integration">
        <div className="w-full bg-secondary" style={{ aspectRatio: "16/9", marginBottom: state.padding * 2 }} />
        <p>
          Real blockchain events drive the workflows through Alchemy SDK integration. Users can
          listen to specific addresses, track transactions, and trigger automated responses to
          on-chain activity. The listener system handles WebSocket connections and provides mock
          data for testing workflows before deploying them to live blockchain networks.
        </p>
      </Section>
      <Section title="Constrained Design for Security">
        <p>
          Instead of allowing arbitrary code execution, the interface provides 20+ predefined
          transforms through a searchable menu. Users select operations like hex conversion, date
          formatting, or JSON parsing from validated options. This constraint-based design
          prevents security vulnerabilities while covering the majority of real-world use cases,
          proving that good design can enhance security rather than compromise it.
        </p>
        <p>
          The transform selection interface uses autocomplete and categorization to make finding
          the right operation fast, turning a security requirement into a feature that actually
          improves usability.
        </p>
      </Section>
      <Section last title="Design-Led Development Process">
        <p>
          After finalizing the design system and interaction specifications, I coordinated five
          specialized development agents working in parallel. Each agent received detailed design
          documentation including component specs, interaction patterns, and visual guidelines.
        </p>
        <div
          className="flex flex-col text-start"
          style={{ gap: state.padding, paddingTop: state.padding }}
        >
          <p>
            <strong>Foundation Engineer</strong> - Implemented the design system, typography scale,
            color tokens, spacing system, and core component primitives from the design specs.
          </p>
          <p>
            <strong>State Manager</strong> - Built reactive data layer for workflow state, UI
            state, and settings, ensuring the interface could handle complex state changes
            smoothly.
          </p>
          <p>
            <strong>Core Libraries Engineer</strong> - Implemented the automatic layout engine,
            data transform system, and validation logic specified in the design documentation.
          </p>
          <p>
            <strong>Execution Engineer</strong> - Built the workflow execution engine and
            blockchain integration that powers the designed interactions.
          </p>
          <p>
            <strong>UI Engineer</strong> - Assembled all designed components, from the canvas
            interface to configuration panels, implementing every interaction pattern and visual
            detail.
          </p>
        </div>
        <p>
          This design-first approach with parallel development reduced implementation time by
          approximately 70%, completing the project in roughly 15-18 hours instead of 50-70 hours,
          while maintaining complete design fidelity.
        </p>
      </Section>
    </Project>
  );
}
