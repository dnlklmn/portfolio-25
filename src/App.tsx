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
import { useContext } from "react";
import MyContext from "./components/Context";

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
    setSettings(!settings);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      settingsRef.current &&
      !settingsRef.current.contains(event.target as Node)
    ) {
      setSettings(false);
    }
  };

  const saveThemePreference = (isDark: boolean) => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const loadThemePreference = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentTheme("light");
    }
  };

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    saveThemePreference(isDark);
    setCurrentTheme(isDark ? "dark" : "light");
  };

  useEffect(() => {
    loadThemePreference();
  }, []);

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

  const { setState } = useContext(MyContext);

  const decreaseSize = () => {
    setState((prevState) => ({
      ...prevState,
      fontSize: prevState.fontSize - 2,
      padding: prevState.padding - 4,
    }));
  };

  const increaseSize = () => {
    setState((prevState) => ({
      ...prevState,
      fontSize: prevState.fontSize + 2,
      padding: prevState.padding + 4,
    }));
  };

  return (
    <div className="primary leading-tight font-Franklin px-12 text-sm font-medium flex w-full h-screen justify-between overflow-hidden">
      <FixedLeft clickFunction={toggleVisibility} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      {settings && (
        <div
          ref={settingsRef}
          className="primary text-sm font-Franklin fixed left-4 bottom-4 w-fit h-fit border-[1px] bord-secondary p-4 flex flex-col gap-4"
        >
          <p className="uppercase font-medium">Settings</p>
          <div className="div flex items-center justify-between">
            Size
            <div className="flex items-center gap-2">
              <button onClick={decreaseSize}>T-</button>
              <button onClick={increaseSize}>T+</button>
            </div>
          </div>
          <div
            onClick={toggleTheme}
            className="select-none font-Gentium cursor-pointer flex items-center w-full gap-4 justify-between"
          >
            <p>Dark/Light</p>
            <div
              className={`transition-all w-12 flex items-center justify-${currentTheme === "dark" ? "end" : "start"} rounded-full h-fit p-1 border-[1px] bord-secondary`}
            >
              <div className="w-4 h-4 rounded-full inverted" />
            </div>
          </div>
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
