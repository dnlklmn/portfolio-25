import { Link } from "react-router-dom";
import LayoutContext from "./Context";
import { useContext } from "react";
import Boop from "./Boop";

interface TeaserProps {
  title?: string;
  subtitle?: string;
  link: string;
  tags?: string[];
  draft?: boolean;
}

export default function Teaser({ link, title, subtitle, tags, draft }: TeaserProps) {
  const { state } = useContext(LayoutContext);
  return (
    <Boop className="w-full" scale={draft ? 1 : 1.02}>
      <Link
        to={link}
        onClick={draft ? (event) => event.preventDefault() : undefined}
        className={`${draft ? "primary bord-secondary border-[1px] pointer-events-none" : "inverted"} text-xl  justify-end  w-full flex flex-col text-start h-fit md:h-[25vh]`}
        style={{
          gap: state.padding / 4,
          padding: state.padding * 1.5,
        }}
      >
        <p
          className="uppercase font-semibold font-Franklin leading-tight transition-all duration-230"
          style={{ fontSize: state.fontSize }}
        >
          {title}
        </p>
        <p
          className="hidden md:block txt-secondary italic font-Gentium transition-all duration-230 "
          style={{ fontSize: state.fontSize }}
        >
          {subtitle}
        </p>
        <div className="font-semibold flex gap-2 pt-2 transition-all duration-230 ">
          {tags?.map((tag, index) => (
            <p
              className={`${draft ? "secondary" : "primary"} transition-all duration-230 `}
              key={index}
              style={{
                fontSize: state.fontSize * 0.75,
                paddingLeft: state.padding,
                paddingRight: state.padding,
              }}
            >
              {tag}
            </p>
          ))}
        </div>
      </Link>
    </Boop>
  );
}
