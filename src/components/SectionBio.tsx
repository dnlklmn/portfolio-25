import { useContext } from "react";
import MyContext from "./Context";

interface SectionProps {
  time: string;
  months: number;
  location: string;
  children?: React.ReactNode;
  current?: boolean;
}

export default function SectionBio({ time, children, months, location, current }: SectionProps) {
  const { state } = useContext(MyContext);

  return (
    <div className="flex text-start" style={{ gap: state.padding }}>
      <div
        className={`${current ? "inverted" : "primary bord-secondary border-[1px]"} p-4 min-h-[120px]`}
        style={{ height: state.padding * months, width: state.padding * 15 }}
      >
        {time}
        <p className="txt-secondary">{location}</p>
      </div>
      <div className="w-3/4 p-4 flex flex-col">{children}</div>
    </div>
  );
}
