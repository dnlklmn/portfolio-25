import { useContext } from "react";
import MyContext from "./Context";

interface SectionProps {
  company: string;
  time: string;
  months: number;
  location: string;
  title?: string;
  children?: React.ReactNode;
  current?: boolean;
}
export default function SectionBio({
  company,
  time,
  children,
  months,
  location,
  title,
  current,
}: SectionProps) {
  const { state } = useContext(MyContext);

  return (
    <div className="flex text-start" style={{ gap: state.padding }}>
      <div
        className={`${current ? "inverted" : "primary bord-secondary border-[1px]"} min-h-[120px] flex flex-col`}
        style={{
          height: state.padding * months,
          width: state.padding * 15,
          padding: state.padding,
        }}
      >
        <p className="font-semibold">{company}</p>
        <p>{time}</p>
        <p className="txt-secondary">{location}</p>
      </div>
      <div
        className="md:w-1/2 flex flex-col"
        style={{ padding: state.padding, gap: state.padding }}
      >
        {title && <p className="font-bold">{title}</p>}
        {children}
      </div>
    </div>
  );
}
