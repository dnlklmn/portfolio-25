import ChevronRightIcon from "../assets/Icons/ChevronRightIcon";

interface HyperlinkProps {
  link: string;
  text: string;
}

export default function Hyperlink({ link, text }: HyperlinkProps) {
  const isInternal = link.startsWith('#');
  
  const handleClick = (e: React.MouseEvent) => {
    if (isInternal) {
      e.preventDefault();
      const id = link.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="flex items-center gap-1">
      <ChevronRightIcon />
      <a 
        className="hover:underline" 
        target={isInternal ? undefined : "_blank"}
        href={link}
        onClick={handleClick}
      >
        {text}
      </a>
    </div>
  );
}
