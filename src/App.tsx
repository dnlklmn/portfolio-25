import { useState, useEffect, useContext } from "react";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import RadicleDesignSystem from "./components/RadicleDesignSystem";
import Separator from "./components/Separator";
import MyContext from "./components/Context";
import RadicleDesktopApp from "./components/RadicleDesktopApp";
import MoonIcon from "./assets/Icons/MoonIcon";
import SunIcon from "./assets/Icons/SunIcon";
import About from "./components/About";
import PolkadotDelegationDashboard from "./components/PolkadotDelegationDashboard";
import Tray from "./components/Tray";
import MenuIcon from "./assets/MenuIcon";
import CloseIcon from "./assets/CloseIcon";
import Boop from "./components/Boop";
import MinusIcon from "./assets/Icons/MinusIcon";
import PlusIcon from "./assets/Icons/PlusIcon";

function FixedLeft() {
  const { state, setState } = useContext(MyContext);
  const [isTrayOpen, setIsTrayOpen] = useState(false);

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

  const [currentTheme, setCurrentTheme] = useState("light");

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

  const toggleTray = () => {
    setIsTrayOpen(!isTrayOpen);
  };

  return (
    <div
      id="fixed-left"
      className="fixed top-0 left-0 w-full md:w-fit h-fit md:h-full flex "
      style={{
        paddingTop: state.padding * 2,
        paddingBottom: state.padding * 2,
      }}
    >
      <div
        className="w-full h-12 md:h-full flex md:flex-col justify-between items-center mx-3 md:mx-0  "
        style={{ paddingLeft: state.padding, paddingRight: state.padding }}
      >
        <Link
          to="/"
          className="md:writing-mode-vertical-lr font-semibold md:h-[200px] whitespace-nowrap  "
          style={{ fontSize: state.fontSize }}
        >
          DANIEL KALMAN
        </Link>
        <div className="font-Gentium font-bold md:flex-col gap-8 items-center justify-between hidden md:flex">
          <Boop>
            <button
              onClick={() => {
                setState((prevState) => ({
                  ...prevState,
                  fontSize: prevState.fontSize - 1,
                  padding: prevState.padding - 1,
                }));
              }}
            >
              <MinusIcon size={state.fontSize} />
            </button>
          </Boop>
          <div className="flex justify-center items-center p-4 w-8 h-fit">
            <input
              type="range"
              min="12"
              max="24"
              value={state.fontSize}
              onChange={handleSliderChange}
              className="appearance-none md:rotate-90 slider w-16"
            />
          </div>
          <Boop>
            <button
              onClick={() => {
                setState((prevState) => ({
                  ...prevState,
                  fontSize: prevState.fontSize + 1,
                  padding: prevState.padding + 1,
                }));
              }}
            >
              <PlusIcon size={state.fontSize} />
            </button>
          </Boop>
        </div>
        <div
          className="p-1 hidden md:flex h-[200px] items-end"
          onClick={toggleTheme}
        >
          <div className="cursor-pointer">
            <Boop>
              {currentTheme === "dark" ? (
                <MoonIcon size={state.fontSize * 1.25} />
              ) : (
                <SunIcon size={state.fontSize * 1.25} />
              )}
            </Boop>
          </div>
        </div>
        <button className="md:hidden" onClick={toggleTray}>
          {isTrayOpen ? (
            <CloseIcon size={state.fontSize} />
          ) : (
            <MenuIcon size={state.fontSize} />
          )}
        </button>
      </div>
      <Separator direction="vertical" />
      {isTrayOpen && <Tray toggleTray={toggleTray} />}
    </div>
  );
}

function FixedRight() {
  const { state } = useContext(MyContext);
  return (
    <div
      id="fixed-right"
      className="hidden fixed top-0 right-0 w-fit h-full md:flex  "
      style={{
        paddingTop: state.padding * 2,
        paddingBottom: state.padding * 2,
      }}
    >
      <Separator className="hidden md:block" direction="vertical" />
      <Separator className="block md:hidden" direction="horizontal" />
      <div
        className="w-fit h-12 md:h-full flex md:flex-col justify-between items-center md:mx-[6px]  "
        style={{ paddingLeft: state.padding, paddingRight: state.padding }}
      >
        <Link
          to="/about"
          className="md:writing-mode-vertical-lr font-semibold h-[200px] whitespace-nowrap  "
          style={{ fontSize: state.fontSize }}
        >
          ABOUT
        </Link>
        <p
          className="md:writing-mode-vertical-lr font-semibold h-[200px] whitespace-nowrap text-end txt-secondary"
          style={{ fontSize: state.fontSize }}
        >
          BLOG
        </p>
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

  const { state } = useContext(MyContext);

  return (
    <div className="primary leading-tight font-Franklin text-sm font-medium flex w-full h-screen justify-between overflow-hidden">
      <div className="primary leading-tight font-Franklin pt-12 md:pt-0 md:px-12 text-sm font-medium flex w-full h-screen justify-between overflow-hidden">
        <FixedLeft />
        <Routes>
          <Route
            path="/"
            element={
              <div
                className="overflow-y-scroll w-full gap-8"
                style={{
                  paddingLeft: state.padding * 3,
                  paddingRight: state.padding * 3,
                }}
              >
                <Home />
              </div>
            }
          />
          <Route
            path="/project"
            element={
              <div
                className="overflow-y-scroll w-full flex flex-col"
                style={{
                  paddingLeft: state.padding * 3,
                  paddingRight: state.padding * 3,
                  gap: state.padding * 2,
                }}
              >
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
              <div
                className="overflow-y-scroll w-full flex flex-col"
                style={{
                  paddingLeft: state.padding * 3,
                  paddingRight: state.padding * 3,
                  gap: state.padding * 2,
                  paddingTop: state.padding * 2,
                  paddingBottom: state.padding * 2,
                }}
              >
                <About />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div
                className="overflow-y-scroll w-full flex flex-col"
                style={{
                  paddingLeft: state.padding * 3,
                  paddingRight: state.padding * 3,
                  gap: state.padding * 2,
                  paddingTop: state.padding * 2,
                  paddingBottom: state.padding * 2,
                }}
              >
                <About />
              </div>
            }
          />
          <Route
            path="/with-desktop"
            element={
              <div
                className="overflow-y-scroll w-full flex flex-col"
                style={{
                  paddingLeft: state.padding * 3,
                  paddingRight: state.padding * 3,
                  gap: state.padding,
                }}
              >
                <RadicleDesktopApp />
                <Separator direction="horizontal" />
                <RadicleDesignSystem />
                <Separator direction="horizontal" />
                <PolkadotDelegationDashboard />
              </div>
            }
          />
          <Route
            path="/notes"
            element={
              <div
                className="overflow-y-scroll w-full flex flex-col"
                style={{
                  paddingLeft: state.padding * 3,
                  paddingRight: state.padding * 3,
                  gap: state.padding,
                }}
              >
                Notes come here
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
