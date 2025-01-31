import { useContext } from "react";
import MyContext from "./Context";
import Separator from "./Separator";

interface SectionProps {
  title: string;
  id?: string;
  children?: React.ReactNode;
  last?: boolean;
  bio?: boolean;
  thick?: boolean;
}

export default function Section({ title, children, last, bio, thick, id }: SectionProps) {
  const { state } = useContext(MyContext);

  return (
    <div
      id={id}
      className="z-50 w-full text-center flex flex-col overflow-visible"
      style={{ gap: state.padding * 2 }}
    >
      <div className="flex overflow-visible">
        <p className="w-1/3 text-start font-bold">{title}</p>
        <div
          className="w-2/3 flex flex-col text-start pr-[5%]"
          style={bio ? { gap: state.padding * 0.75 } : { gap: state.padding * 2 }}
        >
          {children}
        </div>
      </div>
      {!last && <Separator thick={thick} direction="horizontal" />}
    </div>
  );
}
