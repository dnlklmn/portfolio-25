import { Link } from "react-router-dom";
import LayoutContext from "./Context";
import { useContext } from "react";
import PixelatedImage from "./PixelatedImage";

interface TeaserProps {
  title?: string;
  subtitle?: string;
  link: string;
  tags?: string[];
  draft?: boolean;
  bgImage?: string;
  bgScale?: number;
}

export default function Teaser({ link, title, subtitle, tags, draft, bgImage, bgScale = 1 }: TeaserProps) {
  const { state } = useContext(LayoutContext);
  return (
    <div className="w-full group">
      <Link
        to={link}
        onClick={draft ? (event) => event.preventDefault() : undefined}
        className={`${draft ? "primary bord-secondary border-[1px] pointer-events-none" : "primary"} text-xl justify-end w-full flex flex-col text-start h-fit md:h-[25vh] relative overflow-hidden ${!bgImage && draft ? '' : ''}`}
        style={{
          gap: state.padding / 4,
          padding: state.padding * 1.5,
        }}
      >
        {bgImage && (
          <>
            <div className="opacity-30 group-hover:opacity-0 transition-opacity duration-300">
              <PixelatedImage src={bgImage} pixelSize={8} scale={bgScale} />
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: `scale(${bgScale})`,
                transformOrigin: 'center'
              }}
            />
          </>
        )}
        <p
          className="uppercase font-semibold font-Franklin leading-tight transition-all duration-230 relative z-10"
          style={{ fontSize: state.fontSize }}
        >
          {title}
        </p>
        <p
          className="hidden md:block opacity-60 italic font-Gentium transition-all duration-230 relative z-10"
          style={{ fontSize: state.fontSize }}
        >
          {subtitle}
        </p>
        <div className="font-semibold flex gap-2 pt-2 transition-all duration-230 relative z-10">
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
    </div>
  );
}
