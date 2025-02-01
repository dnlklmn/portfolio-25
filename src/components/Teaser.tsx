import { Link } from "react-router-dom";
import MyContext from "./Context";
import { useContext } from "react";


interface TeaserProps {
    title?: string;
    subtitle?: string;
    link: string;
    bgImage?: string;
    dark?: boolean;
    tags?: string[];
}

export default function Teaser({ link, title, subtitle, bgImage, dark, tags }: TeaserProps) {

    const { state } = useContext(MyContext);
    return (
        <Link
            to={link}
            className={`${dark ? "inverted" : 'primary'} text-xl  justify-end  w-full flex flex-col text-start h-[25vh]`}
            style={{
                gap: state.padding / 4,
                padding: state.padding * 1.5,
                backgroundImage: bgImage,
                backgroundSize: "110%",
                backgroundPosition: "center",
            }}
        >

            <p className="uppercase font-semibold font-Franklin ">
                {title}
            </p>
            <p className="txt-secondary italic font-Gentium">
                {subtitle}
            </p>
            <div className="text-sm font-semibold flex gap-2 pt-2">
                {tags?.map((tag) => (<p className="px-2 py-1 primary rounded-full">{tag}</p>))}</div>
        </Link>
    );
}