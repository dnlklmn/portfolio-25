import { useState, useEffect, useContext } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import RadicleDesignSystem from "./components/RadicleDesignSystem";
import Separator from "./components/Separator";
import MyContext from "./components/Context";
import RadicleDesktopApp from "./components/RadicleDesktopApp";
import MoonIcon from "./assets/Icons/MoonIcon";
import SunIcon from "./assets/Icons/SunIcon";
import About from "./components/About";
import PolkadotDelegationDashboard from "./components/PolkadotDelegationDashboard";

function FixedLeft() {
  const { state, setState } = useContext(MyContext);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFontSize = parseInt(event.target.value, 10);
    setState((prevState) => ({
      ...prevState,
      fontSize: newFontSize,
      padding: newFontSize,
    }));
  };

  const saveThemePreference = (isDark: boolean) => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    saveThemePreference(isDark);
    setCurrentTheme(isDark ? "dark" : "light");
  };

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

  useEffect(() => {
    loadThemePreference();
  }, []);

  return (
    <div id="fixed-left" className="fixed top-0 left-0 py-4 h-full flex">
      <div className="px-4 flex flex-col justify-between items-center">
        <Link to="/" className="writing-mode-vertical-lr h-fit whitespace-nowrap">
          DANIEL KALMAN
        </Link>
        <div className="font-Gentium font-bold flex flex-col gap-6 items-center justify-between">
          <p className="text-[14px]">A</p>
          <div className="flex justify-center items-center p-4 w-8 h-fit">
            <input
              type="range"
              min="12"
              max="24"
              value={state.fontSize}
              onChange={handleSliderChange}
              className="appearance-none rotate-90 slider w-16"
            />
          </div>
          <p className="text-[20px]">A</p>
        </div>
        <div className="p-1" onClick={toggleTheme}>
          {currentTheme === "dark" ? <MoonIcon /> : <SunIcon />}
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
      <div className="w-16 flex flex-col justify-between items-center px-4">
        <Link to="/about" className="writing-mode-vertical-lr h-fit whitespace-nowrap">
          ABOUT
        </Link>
        <Link to="/project" className="writing-mode-vertical-lr w-full h-fit whitespace-nowrap">
          <div className="flex flex-div w-full items-center gap-3">
            <div
              className={`${location.pathname === "/project" ? "rotate-45 h-2" : "h-[1px]"} w-2 bg-gray-950 transition-all duration-150`}
            />
            <div className="h-[1px] w-2 bg-gray-300" />
            <div className="h-[1px] w-2 bg-gray-300" />
            <div className="h-[1px] w-2 bg-gray-300" />
          </div>
        </Link>
        <p className="writing-mode-vertical-lr h-fit whitespace-nowrap">CONTACT</p>
      </div>
    </div>
  );
}

const Navigation = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="primary leading-tight font-Franklin text-sm font-medium flex w-full h-screen justify-between overflow-hidden">
      <div className="primary leading-tight font-Franklin px-12 text-sm font-medium flex w-full h-screen justify-between overflow-hidden">
        <FixedLeft />
        <Routes>
          <Route path="/" element={<div className="overflow-y-scroll px-4 w-full gap-8"><Home /></div>} />
          <Route
            path="/project"
            element={
              <div className="overflow-y-scroll w-full px-8 flex flex-col gap-8">
                <RadicleDesktopApp />
                <Separator direction="horizontal" />
                <RadicleDesignSystem />
                <Separator direction="horizontal" />
                <PolkadotDelegationDashboard />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="overflow-y-scroll px-8 flex flex-col gap-8">
                <About />
              </div>
            }
          />
        </Routes>
        <FixedRight />
      </div>
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
