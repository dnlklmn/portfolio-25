import { useState, useRef, useEffect } from "react";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Project from "./components/Project";
import Separator from "./components/Separator";
import SettingsIcon from "./assets/Icons/SettingsIcon";

interface FixedLeftProps {
  clickFunction: () => void;
}

function FixedLeft({ clickFunction }: FixedLeftProps) {
  return (
    <div id="fixed-left" className="fixed top-0 left-0 py-4 h-full flex">
      <div className="px-4 flex flex-col justify-between items-center">
        <Link
          to="/"
          className="writing-mode-vertical-lr h-fit whitespace-nowrap"
        >
          DANIEL KALMAN
        </Link>
        <div
          onClick={clickFunction}
          className="writing-mode-vertical-lr cursor-pointer h-fit whitespace-nowrap"
        >
          <SettingsIcon />
        </div>
      </div>
      <Separator direction="vertical" />
    </div>
  );
}

function FixedRight() {
  const location = useLocation();
  return (
    <div className="fixed top-0 right-0 py-4 h-full flex">
      <Separator direction="vertical" />
      <div className="flex flex-col justify-between items-center px-4">
        <Link
          to="/"
          className="writing-mode-vertical-lr h-fit whitespace-nowrap"
        >
          ABOUT
        </Link>
        <Link
          to="/project"
          className="writing-mode-vertical-lr w-full h-fit whitespace-nowrap"
        >
          <div className="flex flex-div w-full items-center gap-3">
            <div
              className={`${location.pathname === "/project" ? "rotate-45 h-2" : "h-[1px]"} w-2 bg-gray-950 transition-all duration-150`}
            />
            <div className="h-[1px] w-2 bg-gray-300" />
            <div className="h-[1px] w-2 bg-gray-300" />
            <div className="h-[1px] w-2 bg-gray-300" />
          </div>
        </Link>
        <p className="writing-mode-vertical-lr h-fit whitespace-nowrap">
          CONTACT
        </p>
      </div>
    </div>
  );
}

const Navigation = () => {
  const [settings, setSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = () => {
    if (settings) {
      setSettings(false);
    } else {
      setSettings(true);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      settingsRef.current &&
      !settingsRef.current.contains(event.target as Node)
    ) {
      setSettings(false);
    }
  };

  useEffect(() => {
    if (settings) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settings]);

  return (
    <div className="font-Franklin text-sm font-medium flex w-full h-screen justify-between px-12 overflow-hidden">
      <FixedLeft clickFunction={toggleVisibility} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      {settings && (
        <div
          ref={settingsRef}
          className="fixed left-12 bottom-4 w-1/2 h-1/4 border-[1px] border-gray-800/30 bg-white p-4 flex flex-col"
        >
          <p>Settings</p>
          <p>Padding</p>
          <p>Dark/L</p>
        </div>
      )}
      <FixedRight />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
