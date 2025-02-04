import { useContext } from "react";
import MyContext from "./Context";
import Separator from "./Separator";

interface SectionProps {
  title: string;
  id?: string;
  children?: React.ReactNode;
  last?: boolean;
  thick?: boolean;
}

export default function Section({ title, children, last, thick, id }: SectionProps) {
  const { state } = useContext(MyContext);

  return (
    <div
      id={id}
      className="w-full text-center flex flex-col overflow-visible pt-4 md:py-0 "
      style={{ gap: state.padding * 2 }}
    >
      <div
        className="flex flex-col md:flex-row overflow-visible"
        style={{ gap: state.padding * 2 }}
      >
        <p className="w-full md:w-1/3 text-start font-bold">{title}</p>
        <div
          className="w-full md:w-2/3 flex flex-col text-start md:pr-[5%]"
          style={{ gap: state.padding * 2 }}
        >
          {children}
        </div>
      </div>
      {!last && <Separator thick={thick} className="pt-4 md:pt-0" direction="horizontal" />}
    </div>
  );
}
