import { useContext } from "react";
import MyContext from "../components/Context";

export default function Home() {
  const { state } = useContext(MyContext);

  return (
    <div
      className="primary w-full flex flex-col text-center"
      style={{
        fontSize: state.fontSize,
        paddingLeft: state.padding * 2,
        paddingRight: state.padding * 2,
      }}
    >
      <div className="mt-4 w-full flex flex-col gap-2">
        <div className="w-full h-1 inverted" />
        <div className="w-full h-2 inverted" />
        <div className="w-full h-4 inverted" />
        <div className="w-full h-8 inverted" />
      </div>
      <div
        className="w-full text-center h-full items-center flex flex-col justify-center"
        style={{ gap: state.padding }}
      >
        <p className="font-Franklin font-black text-6xl uppercase">DANIEL KALMAN</p>
        <p className="font-Gentium text-2xl">Soon online.</p>
      </div>
      <div className="h-24" />
    </div>
  );
}
