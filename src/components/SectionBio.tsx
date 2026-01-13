import { useContext, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex text-start" style={{ gap: state.padding }}>
      <div
        className={`${current ? "inverted" : "primary bord-secondary border-[1px]"} min-h-[120px] flex flex-col overflow-hidden`}
        style={{
          height: state.padding * months,
          width: state.padding * 15,
          padding: state.padding,
        }}
      >
        <p className="font-semibold truncate">{company}</p>
        <p className="truncate">{time}</p>
        <p className="txt-secondary truncate">{location}</p>
      </div>
      <div
        className="md:w-1/2 flex flex-col overflow-hidden min-w-0"
        style={{
          padding: state.padding,
          gap: state.padding,
          height: isMobile ? state.padding * months * 2 : "auto",
          minHeight: isMobile ? 120 * 2 : "auto",
        }}
      >
        {title && <p className="font-bold line-clamp-2">{title}</p>}
        <div className="line-clamp-3">{children}</div>
      </div>
    </div>
  );
}
