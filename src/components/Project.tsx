import Separator from "./Separator";
import { useContext } from "react";
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

function Left({ title, subtitle, description, tags, year, links, id }: LeftProps) {
  const { state } = useContext(MyContext);

  return (
    <div
      className={`w-full md:w-1/4 md:sticky font-Gentium flex flex-col pb-24 md:pb-0 justify-end items-center text-center`}
      style={{
        fontSize: state.fontSize,
        height: `calc(100vh - ${state.padding * 4}px)`,
        gap: state.padding * 2,
        top: state.padding * 2,
      }}
      id={id}
    >
      <p
        className="h-full flex flex-col justify-center md:h-fit uppercase font-Franklin font-black  leading-none"
        style={{ fontSize: state.fontSize * 3 }}
      >
        {title}
      </p>
      <div
        className="h-fit md:h-full flex flex-col align-left text-left md:indent-4  "
        style={{ gap: state.padding / 2 }}
      >
        <p className="font-Franklin uppercase font-semibold">{subtitle}</p>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-1 text-start items-start w-full py-2 md:py-0">
        {links?.map((link, index) => <Hyperlink link={link.link} text={link.text} key={index} />)}
      </div>
      <Tags tags={tags} year={year} />
    </div>
  );
}

function Right({ children }: { children: React.ReactNode }) {
  const { state } = useContext(MyContext);

  return (
    <div
      id="radicle-desktop-app"
      className="w-full md:w-3/4 font-Gentium flex flex-col leading-snug"
      style={{ fontSize: state.fontSize, gap: state.padding * 2 }}
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

  return (
    <div
      id={id}
      className="w-full flex flex-col md:flex-row text-center"
      style={{
        gap: state.padding * 2,
        paddingTop: state.padding * 2,
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
      />

      <Separator className="hidden md:block" direction="vertical" />
      <Right>{children}</Right>
    </div>
  );
}
