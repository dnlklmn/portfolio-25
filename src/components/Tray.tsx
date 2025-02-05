import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "./Context";

interface TrayProps {
  toggleTray: () => void;
}

export default function Tray({ toggleTray }: TrayProps) {
  const { state } = useContext(MyContext);

  return (
    <>
      <div
        className="flex flex-col items-end fixed font-Franklin font-semibold uppercase inverted z-50"
        style={{
          top: state.padding * 9,
          right: state.padding * 2,
          paddingTop: state.padding * 3,
          paddingBottom: state.padding * 3,
          paddingLeft: state.padding * 5,
          paddingRight: state.padding * 3,
          gap: state.padding * 4,
        }}
      >
        <Link onClick={toggleTray} to="/">
          Home
        </Link>
        <Link onClick={toggleTray} to="/project">
          Works
        </Link>
        <Link onClick={toggleTray} to="/about">
          About
        </Link>
        <p className="txt-secondary">Blog</p>
      </div>
    </>
  );
}
