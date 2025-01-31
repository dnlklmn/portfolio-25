import { Link } from "react-router-dom";


interface TeaserProps {
    title?: string;
    subtitle?: string;
    link: string;
    bgImage?: string;
    dark?: boolean;
}

export default function Teaser({ link, title, subtitle, bgImage, dark }: TeaserProps) {


    return (
        <Link
            to={link}
            className={`${dark ? "inverted" : 'primary'} w-full flex justify-end flex-col gap-1 text-start h-[25vh]`}
            style={{
                backgroundImage: bgImage,
                backgroundSize: "110%",
                backgroundPosition: "center",
            }}
        >

            <div className="flex flex-col items-start bg-linear-to-bl from-cyan-500 to-blue-500 p-4">
                <p className="text-xl uppercase text-center font-semibold font-Franklin">
                    {title}
                </p>
                <p className="txt-secondary text-xl text-center italic font-Gentium">
                    {subtitle}
                </p>
            </div>
        </Link>
    );
}