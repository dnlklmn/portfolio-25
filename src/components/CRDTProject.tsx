import Separator from "./Separator";
import { useContext } from "react";
import MyContext from "./Context";
import Section from "./Section";
import Project from "./Project";
import PasswordProtected from "./PasswordProtected";

function CRDTProjectContent() {
  const { state } = useContext(MyContext);

  return (
    <Project
      id="crdt-workflow-builder"
      title="Local First Multiplayer Workflow Builder"
      subtitle="Real-time Collaboration Without Servers"
      description="A multiplayer workflow editor that uses CRDTs (Conflict-free Replicated Data Types) to enable real-time collaboration without requiring a central server. Changes sync peer-to-peer while maintaining local-first principles."
      tags={["UX", "UI", "Front End", "CRDT"]}
      year={2025}
      links={[
        {
          link: "https://github.com/dnlklmn/auto/crdt",
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
              Building a workflow editor that supports real-time collaboration while maintaining
              local-first principles presents unique challenges: how do you sync complex nested
              data structures across peers without conflicts? How do you ensure the interface
              remains responsive even with network latency? How do you handle concurrent edits
              to the same workflow elements?
            </p>
            <p>
              The goal was to extend the Auto workflow builder with true multiplayer capabilities
              using CRDTs, enabling teams to collaborate on workflow design without sacrificing
              the responsiveness and reliability of local-first software.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col" style={{ gap: state.padding }}>
          <p className="text-start font-bold">Process and Responsibilities</p>
          <div className="flex flex-col text-start" style={{ gap: state.padding }}>
            <p>
              I designed the collaboration patterns and real-time update behaviors, ensuring
              that concurrent edits felt natural and predictable. The design emphasized visual
              feedback for remote changes, clear indicators of peer presence, and graceful
              handling of conflict resolution.
            </p>
            <p>
              The technical architecture uses Yjs as the CRDT implementation, with WebRTC for
              peer-to-peer communication and optional relay servers for NAT traversal. I designed
              the data structures to map cleanly to CRDT types while maintaining the existing
              workflow model.
            </p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="CRDT Architecture">
        <div className="w-full bg-secondary" style={{ aspectRatio: "16/9", marginBottom: state.padding * 2 }} />
        <p>
          The workflow structure maps to Yjs shared types: Y.Map for workflow metadata, Y.Array
          for ordered block sequences, and nested Y.Map structures for individual block
          configurations. This mapping allows the CRDT to handle concurrent modifications to
          different parts of the workflow without conflicts.
        </p>
        <p>
          When two users edit different blocks simultaneously, changes merge automatically. When
          they edit the same block property, last-write-wins semantics apply with visual
          indicators showing when a remote change overwrites local edits. The interface makes
          these resolution decisions visible rather than hiding them.
        </p>
      </Section>
      <Section title="Real-Time Collaboration UI">
        <div className="w-full bg-secondary" style={{ aspectRatio: "16/9", marginBottom: state.padding * 2 }} />
        <p>
          Each connected peer appears as a colored presence indicator in the interface. When
          someone selects or edits a block, other users see a subtle colored outline in that
          user's color. Cursor positions and selections sync across the canvas, providing
          awareness of what others are looking at without creating visual clutter.
        </p>
        <p>
          Changes from remote peers animate smoothly into view. New blocks slide into position,
          configuration updates highlight briefly, and connection changes draw animated paths.
          These animations serve a functional purpose: they help users track what changed while
          they were focused elsewhere in the workflow.
        </p>
      </Section>
      <Section title="Peer-to-Peer Sync">
        <div className="w-full bg-secondary" style={{ aspectRatio: "16/9", marginBottom: state.padding * 2 }} />
        <p>
          The implementation uses WebRTC data channels for peer-to-peer communication, with a
          signaling server only needed for the initial connection handshake. Once connected,
          workflow data syncs directly between peers without touching a server. This approach
          reduces latency and maintains privacy—workflow content never passes through third-party
          infrastructure.
        </p>
        <p>
          For users behind restrictive NATs, the system falls back to a lightweight relay server.
          The relay forwards encrypted data packets but cannot read workflow content. This
          fallback ensures the collaboration features work reliably across different network
          environments.
        </p>
      </Section>
      <Section title="Local-First Principles">
        <p>
          The editor works fully offline. Users can create and edit workflows without any network
          connection. When they reconnect, changes sync automatically with peers who have the
          same workflow open. If no peers are online, changes wait in the local CRDT state until
          the next sync opportunity.
        </p>
        <p>
          Each user maintains a complete copy of the workflow's CRDT state locally. This
          redundancy provides resilience: losing a peer doesn't lose any data, and users can
          continue working even if all other peers disconnect. The workflow becomes a
          collaborative document that exists across all peers equally.
        </p>
      </Section>
      <Section title="Conflict-Free Block Connections">
        <p>
          Workflow connections between blocks present a particular challenge for CRDTs. If two
          users create different outgoing connections from the same block port simultaneously,
          the CRDT must resolve this in a predictable way. The design uses a last-write-wins
          register for single-output ports and a CRDT set for multi-output ports.
        </p>
        <p>
          Visual feedback helps users understand conflict resolution. When a connection is
          overwritten by a remote change, both the old and new connections briefly show
          highlighted before settling to the final state. This helps users notice and respond to
          unexpected changes from concurrent edits.
        </p>
      </Section>
      <Section last title="Design Implications">
        <p>
          Designing for CRDTs means rethinking traditional UI patterns. Undo/redo needs to
          account for remote changes that may have interleaved with local edits. Form validation
          must handle the possibility that remote changes make local edits invalid. Loading
          states need to communicate sync status rather than just network requests.
        </p>
        <p>
          These constraints led to design improvements: showing who made each change adds
          accountability and context. Visualizing the sync status helps users understand what
          will happen when they reconnect. Making conflict resolution visible builds trust in
          the system's behavior. The result is a collaboration tool that feels more transparent
          and predictable than traditional real-time editors.
        </p>
      </Section>
    </Project>
  );
}

export default function CRDTProject() {
  return (
    <PasswordProtected
      storageKey="crdt-project-unlocked"
      correctPassword="localfirst"
    >
      <CRDTProjectContent />
    </PasswordProtected>
  );
}
