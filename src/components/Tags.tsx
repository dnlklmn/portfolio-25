import { useContext } from "react";
import MyContext from "./Context";

interface TagsProps {
  tags?: string[];
  year?: number;
}

export default function Tags({ tags, year }: TagsProps) {
  const { state } = useContext(MyContext);

  return (
    <div className="w-full font-semibold font-Franklin items-center flex justify-between">
      <div className="flex" style={{ gap: state.padding / 1.5 }}>
        {tags?.map((tag, index) => (
          <p
            className="inverted"
            key={index}
            style={{
              fontSize: state.fontSize * 0.875,
              paddingLeft: state.padding / 2,
              paddingRight: state.padding / 2,
              paddingTop: state.padding / 12,
              paddingBottom: state.padding / 12,
            }}
          >
            {tag}
          </p>
        ))}
      </div>
      <p className="font-Gentium uppercase font-semibold"> {year} </p>
    </div>
  );
}
