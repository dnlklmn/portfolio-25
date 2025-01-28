import { useContext } from "react";
import MyContext from "./Context";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  months: number;
}

export default function SectionBio({ title, children, months }: SectionProps) {
  const { state } = useContext(MyContext);

  return (
    <div className="flex text-start" style={{ gap: state.padding }}>
      <div className="inverted w-1/4 p-4" style={{ height: state.padding * months }}>
        {title}
      </div>
      <div className="w-3/4 p-4 flex flex-col">{children}</div>
    </div>
  );
}
