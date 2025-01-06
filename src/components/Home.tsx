import { Link } from "react-router-dom";
import RadicleDesignSystemIcon from "../assets/RadicleDesignSystemIcon";
import { useContext } from "react";
import MyContext from "../components/Context";

export default function Home() {
  const { state } = useContext(MyContext);

  return (
    <div
      className="primary w-full flex flex-col text-center"
      style={{
        fontSize: state.fontSize,
        paddingLeft: state.padding * 2,
        paddingRight: state.padding * 2,
      }}
    >
      <div
        className="w-full text-center h-full items-center flex flex-col justify-center"
        style={{ gap: state.padding }}
      >
        <p className="font-Franklin font-black text-6xl">
          DIGITAL PRODUCT DESIGNER
        </p>
        <p className="font-Gentium text-2xl">UX, UI, and Design Systems</p>
      </div>
      <div
        className="flex"
        style={{ gap: state.padding * 3, paddingBottom: state.padding }}
      >
        <Link
          to="/project"
          className="w-full flex flex-col gap-1 indent-8 align-start text-start"
        >
          <p className="text-xl uppercase text-center font-semibold font-Franklin">
            Radicle Design System
          </p>
          <p className="txt-secondary text-xl text-center italic font-Gentium">
            Consistency By Design
          </p>
          <RadicleDesignSystemIcon />
          <p className="font-Gentium" style={{ paddingTop: state.padding }}>
            Consistency not only enhances the user experience but also builds
            trust. Ensuring consistency in an open-source project can be
            particularly challenging, as it requires a universal framework that
            contributors can easily work with.
          </p>
        </Link>
        <Link
          to="/project"
          className="w-full flex flex-col gap-1 indent-8 align-start text-start"
        >
          <p className="text-xl uppercase text-center font-semibold font-Franklin">
            RADICLE DESKTOP APP
          </p>
          <p className="txt-secondary text-xl text-center italic font-Gentium">
            Your Work Belongs on Your Machine
          </p>
          <p className="font-Gentium" style={{ paddingTop: state.padding }}>
            This approach reduces dependency on constant internet connectivity,
            allowing users to access and interact with their data even offline.
            Additionally, local-first apps can offer better data security, as
            sensitive information remains on the user's device rather than being
            transmitted to and stored on remote servers. This can lead to a more
            responsive and reliable user experience, fostering greater trust and
            satisfaction.
          </p>
        </Link>
        <Link
          to="/project"
          className="w-full flex flex-col gap-1 indent-8 align-start text-start"
        >
          <p className="text-xl uppercase text-center font-semibold font-Franklin">
            Polkadot Delegate Dashboard
          </p>
          <p className="txt-secondary text-xl text-center italic font-Gentium">
            Participate in Governance
          </p>
          <p className="font-Gentium" style={{ paddingTop: state.padding }}>
            Local-first apps can offer better data security, as sensitive
            information remains on the user's device rather than being
            transmitted to and stored on remote servers. <br /> <br /> This can
            lead to a more responsive and reliable user experience, fostering
            greater trust and satisfaction.
          </p>
        </Link>
      </div>
    </div>
  );
}
