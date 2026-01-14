import Separator from "./Separator";
import { useContext, useState, useEffect } from "react";
import MyContext from "./Context";
import Tags from "./Tags";
import Hyperlink from "./Hyperlink";

interface Link {
  link: string;
  text: string;
}

interface LeftProps {
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  year?: number;
  links?: Link[];
  children?: React.ReactNode;
  id?: string;
}

function Left({
  title,
  subtitle,
  description,
  tags,
  year,
  links,
  id,
}: LeftProps) {
  const { state } = useContext(MyContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`w-full md:w-1/4 ${isMobile ? '' : 'sticky'} font-Gentium flex flex-col pb-4 justify-between items-center text-center overflow-visible md:px-0`}
      style={{
        paddingLeft: isMobile ? state.padding * 2 : 0,
        paddingRight: isMobile ? state.padding * 2 : 0,
        fontSize: state.fontSize,
        gap: isMobile ? state.padding * 3 : 0,
        ...(!isMobile && {
          top: state.padding * 2,
          height: `calc(100vh - ${state.padding * 4}px)`,
          paddingBottom: state.padding * 2,
        }),
      }}
      id={id}
    >
      <div className="flex flex-col items-center w-full overflow-hidden" style={{ gap: state.padding * 2 }}>
        {!isMobile && (
          <p
            className="uppercase font-Franklin font-black leading-none w-full"
            style={{ 
              fontSize: title.length > 10 
                ? `clamp(${state.fontSize * 1.2}px, 2.5vw, ${state.fontSize * 2.2}px)` 
                : `clamp(${state.fontSize * 1.5}px, 3vw, ${state.fontSize * 3}px)` 
            }}
          >
            {title}
          </p>
        )}
        <div
          className="h-fit flex flex-col align-left text-left md:indent-4 overflow-visible min-w-0 w-full"
          style={{ gap: state.padding / 2 }}
        >
          <p className="font-Franklin uppercase font-semibold">{subtitle}</p>
          <p>{description}</p>
        </div>
        {links && links.length > 0 && (
          <div className="flex flex-col gap-1 text-start items-start w-full py-2 md:py-0 md:indent-4">
            {links.map((link, index) => (
              <Hyperlink link={link.link} text={link.text} key={index} />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center w-full" style={{ gap: state.padding * 2 }}>
        <Tags tags={tags} year={year} />
      </div>
    </div>
  );
}

function Right({ children }: { children: React.ReactNode }) {
  const { state } = useContext(MyContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id="radicle-desktop-app"
      className="w-full md:w-3/4 font-Gentium flex flex-col leading-snug overflow-visible md:px-0"
      style={{ fontSize: state.fontSize, gap: state.padding * 2, paddingLeft: isMobile ? state.padding * 2 : 0, paddingRight: isMobile ? state.padding * 2 : 0 }}
    >
      {children}
    </div>
  );
}

export default function RadicleDesktopApp({
  title,
  subtitle,
  description,
  tags,
  year,
  links,
  children,
  id,
}: LeftProps) {
  const { state } = useContext(MyContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    if (id) {
      const element = document.getElementById(`${id}-wrapper`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div id={`${id}-wrapper`} className="w-full flex flex-col overflow-visible">
      {/* Sticky title for mobile */}
      {isMobile && (
        <div 
          className="sticky top-0 w-full"
          onClick={scrollToTop}
          style={{ cursor: 'pointer', paddingBottom: state.padding * 2 }}
        >
          <p
            className="uppercase font-Franklin font-black leading-none py-4 px-4 text-center"
            style={{ fontSize: `clamp(${state.fontSize * 1.5}px, 8vw, ${state.fontSize * 3}px)` }}
          >
            {title}
          </p>
        </div>
      )}
      
      <div
        id={id}
        className="w-full flex flex-col md:flex-row text-center overflow-visible"
        style={{
          gap: state.padding * 2,
          paddingTop: isMobile ? 0 : state.padding * 2,
          paddingBottom: state.padding,
        }}
      >
        <Left
          title={title}
          subtitle={subtitle}
          description={description}
          links={links}
          tags={tags}
          year={year}
          id={id}
        />

        <Separator className="hidden md:block" direction="vertical" />
        <Right>{children}</Right>
      </div>
    </div>
  );
}
