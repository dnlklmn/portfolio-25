import ChevronRightIcon from "../assets/Icons/ChevronRightIcon";

interface HyperlinkProps {
  link: string;
  text: string;
}

export default function Hyperlink({ link, text }: HyperlinkProps) {
  return (
    <div className="flex items-center gap-1">
      <ChevronRightIcon />
      <a className="hover:underline" target="_blank" href={link}>
        {text}
      </a>
    </div>
  );
}
