import Separator from "./Separator";
import { useContext } from "react";
import MyContext from "./Context";
import Section from "./Section";
import Lightbox from "./Lightbox";
import DelegateSwipe from "../assets/polkadot-delegation-swipe.png";
import Flow2 from "../assets/polkadot-delegation-flow-2.png";
import DelegationScreens from "../assets/polkadot-delegation-screens.png";
import Hyperlink from "./Hyperlink";
import Portal1 from "../assets/polkadot-portal-1.png";
import DelegationDashboard from "../assets/polkadot-delegation-dashboard.png";

function Left() {
  const { state } = useContext(MyContext);

  return (
    <div className="w-1/3">
      <div
        className={` h-screen sticky top-4 font-Gentium flex h-100vh flex-col items-center gap-4 text-center`}
        style={{ fontSize: state.fontSize, paddingBottom: state.padding * 2 }}
      >
        <p className="font-Franklin font-black md:text-5xl lg:text-5xl leading-none">
          POLKADOT DELEGATION DASHBOARD
        </p>
        <div
          className="h-full flex flex-col align-left text-left indent-4"
          style={{ gap: state.padding / 2 }}
        >
          <p className="font-Franklin uppercase font-semibold">participate in governance</p>
          <p>
            By delegating their voting power users can support organizations in the Polkadot network
          </p>
        </div>
        <div className="flex flex-col gap-1 text-start items-start w-full">
          <Hyperlink link="https://opengov.framer.website/" text="Prototype in Framer" />
          <Hyperlink
            link="https://www.figma.com/proto/bed2VVoOIdhJAeioYGa7pf/Governance-App?page-id=100%3A14584&node-id=100-20791&viewport=1126%2C587%2C0.18&scaling=scale-down-width&starting-point-node-id=100%3A20791&t=ByUfKfX8tTl2PvIt-1"
            text="Prototype in Figma"
          />
        </div>
        <div
          className="font-Gentium w-full flex align-left text-left"
          style={{ gap: state.padding / 2 }}
        >
          <p className="font-Gentium uppercase font-semibold">2024</p>
          <p>Visual Design, UI, Front End</p>
        </div>
      </div>
    </div>
  );
}

function Right() {
  const { state } = useContext(MyContext);
  return (
    <div
      className={`font-Gentium flex flex-col leading-snug`}
      style={{ fontSize: state.fontSize, gap: state.padding * 2 }}
    >
      <div className="flex flex-col gap-4 ">
        <Lightbox enableMove={false} image={DelegationScreens} />
        <p className="italic text-center"> Delegation App Designs</p>
      </div>
      <Separator direction="horizontal" />
      <div
        className="z-50 w-full flex text-center flexoverflow-visible"
        style={{ gap: state.padding * 2 }}
      >
        <div className="w-full flex flex-col gap-8">
          <p className="text-start font-bold">Challenge and Goals</p>
          <div className="flex flex-col text-start" style={{ gap: state.padding }}>
            <p>...</p>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-4">
          <p className="text-start font-bold">Process and Responsibilities</p>
          <div className="flex flex-col text-start " style={{ gap: state.padding }}>
            <p>...</p>
          </div>
        </div>
      </div>
      <Separator direction="horizontal" />
      <Section title="I. Tinder for Voting">
        <p>
          Inspired by a{" "}
          <a
            className="underline"
            href="https://forum.polkadot.network/t/a-better-treasury-system/291/16"
          >
            public forum post
          </a>
          , the swiping interface was meant to make voting on Polkadot Open Governance proposals
          easier and more accessible, building on a familiar gesture.
        </p>
        <div className="flex flex-col gap-4 ">
          <img className="p-4 bg-white" src={DelegateSwipe} alt="Tokens Studio in Figma" />
          <p className="italic text-center"> The original post</p>
        </div>
        <p>
          The flow diagrams help understand the user journey and its building blocks. They serve as
          an anchor to check if the final designs, after multiple iterations, still serve the
          desired goal.
        </p>
        <div className="flex flex-col gap-4 ">
          <Lightbox image={Flow2} />
          <p className="italic text-center"> Flow map</p>
        </div>
      </Section>
      <Section title="High Fidelity Protypes">
        <p>
          Using the Polkadot Design System I created high-fidelity mockups of the flow, and built
          prototypes of different fidelity - try swiping the cards in Framer!
        </p>

        <div className="flex flex-col gap-2">
          <Hyperlink link="https://opengov.framer.website/" text="Prototype in Framer" />
          <Hyperlink
            link="https://www.figma.com/proto/bed2VVoOIdhJAeioYGa7pf/Governance-App?page-id=100%3A14584&node-id=100-20791&viewport=1126%f2C587%2C0.18&scaling=scale-down-width&starting-point-node-id=100%3A20791&t=ByUfKfX8tTl2PvIt-1"
            text="Prototype in Figma"
          />
        </div>
      </Section>
      <Section thick title="Evaluation">
        <div className="flex gap-16">
          <p>
            <strong>Great </strong> <div className="h-2" /> Simple to use <div className="h-2" />{" "}
            Focused on 1 referendum
          </p>
          <p>
            <strong>Not great </strong> <div className="h-2" /> Swiping is strange on desktop{" "}
            <div className="h-2" /> Difficult to filter for types of referenda
            <div className="h-2" /> Might favor quick uninformed decisions
          </p>
        </div>
      </Section>
      <Section title="II. Governance Portal">
        <p>
          In a second iteration the goal was to be more explicit, and offer a view with referenda
          one is interested in voting on, and try to understand how community members vote.
        </p>
        <p>
          We’d display news (eg. latest referendum), stats about how active governance on Polkadot
          is, list proposals, and delegates, and track how users navigate through it all to find
          their focus.
        </p>
        <div className="flex flex-col gap-4  ">
          <Lightbox image={Portal1} className="shadow-md" />
          <p className="italic text-center">Polkadot Governance Portal prototype</p>
        </div>
      </Section>
      <Section thick title="Evaluation">
        <div className="flex gap-16">
          <p>
            <strong>Great </strong> <div className="h-2" /> Everything in one place
            <div className="h-2" /> Informative
            <div className="h-2" />
            Helpful for those fluent in governance
          </p>
          <p>
            <strong>Not great </strong> <div className="h-2" /> Too much information
            <div className="h-2" />
            Doesn’t help get started
          </p>
        </div>
      </Section>
      <Section title="III. Delegation First">
        <p>
          After more testing and further aligning with the goals of the network, we narrowed our
          focus to delegation: instead of letting more users participate in governance, we shifted
          our focus on getting more tokens to participate.
        </p>
        <p>More tokens make decision quicker, and with that, they make democracy more efficient.</p>
      </Section>
      <Section thick title="2 Parallel Tracks">
        <div className="flex gap-16">
          <p>
            <strong>Pick a delegate you trust </strong> <div className="h-2" /> Delegate them your
            entire voting power
            <div className="h-2" /> For less technical users
            <div className="h-2" />
            DAOs can pool together their influence
          </p>
          <p>
            <strong>Specify tracks to keep or delegate </strong> <div className="h-2" />
            Narrow your focus
            <div className="h-2" />
            Let a delegate vote for a particular track
            <div className="h-2" />
            Let a delegate vote for everything else
          </p>
        </div>
      </Section>
      <Section last title="III. Delegation First">
        <p>
          The delegation first structure allows for token holders to find the people they trust, but
          also offers a peak into how open governance works, and how they can participate by
          themselves.
        </p>
        <div className="flex flex-col gap-4  ">
          <Lightbox image={DelegationDashboard} className="shadow-md" />
          <p className="italic text-center">The final Delegation Dashboard</p>
        </div>
        <p>
          I contributed to building the web app by implementing the Polkadot Design System I
          created, and various front end refinements from responsiveness to animations.
        </p>
      </Section>
    </div>
  );
}

export default function PolkadotDelegationDashboard() {
  return (
    <div id="polkadot-delegation-dashboard" className="w-full flex gap-8 text-center py-4 h-fit">
      <Left />
      <Separator direction="vertical" />
      <Right />
    </div>
  );
}
