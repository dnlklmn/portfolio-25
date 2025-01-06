import { Link } from "react-router-dom";
import RadicleDesignSystemIcon from "../assets/RadicleDesignSystemIcon";

export default function Home() {
  return (
    <div className="w-full flex flex-col text-center px-8">
      <div className="w-full text-center h-full items-center flex flex-col justify-center gap-4">
        <p className="font-Franklin font-black text-6xl">
          DIGITAL PRODUCT DESIGNER
        </p>
        <p className="font-Gentium text-2xl">UX, UI, and Design Systems</p>
      </div>
      <div className="flex gap-12 pb-4">
        <Link
          to="/project"
          className="w-full flex flex-col gap-1 indent-8 align-start text-start"
        >
          <p className="text-xl uppercase text-center font-semibold font-Franklin">
            Radicle Design System
          </p>
          <p className="text-xl text-center italic text-gray-600 font-Gentium">
            Consistency By Design
          </p>
          <RadicleDesignSystemIcon />
          <p className="font-Gentium pt-4">
            Consistency in design ensures a cohesive user experience, making
            interfaces intuitive and predictable. By adhering to design
            guidelines and patterns, teams can create a unified visual language
            across all products.
          </p>
        </Link>
        <div className="w-full flex flex-col gap-1 indent-8 align-start text-start">
          <p className="text-xl uppercase text-center font-semibold font-Franklin">
            RADICLE DESKTOP APP
          </p>
          <p className="text-xl text-center italic text-gray-600 font-Gentium">
            Your Work Belongs on Your Machine
          </p>
          <p className="font-Gentium pt-4">
            This approach reduces dependency on constant internet connectivity,
            allowing users to access and interact with their data even offline.
            Additionally, local-first apps can offer better data security, as
            sensitive information remains on the user's device rather than being
            transmitted to and stored on remote servers. This can lead to a more
            responsive and reliable user experience, fostering greater trust and
            satisfaction.
          </p>
        </div>
        <div className="w-full flex flex-col gap-1 indent-8 align-start text-start">
          <p className="text-xl uppercase text-center font-semibold font-Franklin">
            Polkadot Delegate Dashboard
          </p>
          <p className="text-xl text-center italic text-gray-600 font-Gentium">
            Participate in Governance
          </p>
          <p className="font-Gentium pt-4">
            Local-first apps can offer better data security, as sensitive
            information remains on the user's device rather than being
            transmitted to and stored on remote servers. <br /> <br /> This can
            lead to a more responsive and reliable user experience, fostering
            greater trust and satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
