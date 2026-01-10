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
import LayoutContext from "./components/Context";
import RadicleDesktopApp from "./components/RadicleDesktopApp";
import MoonIcon from "./assets/Icons/MoonIcon";
import SunIcon from "./assets/Icons/SunIcon";
import About from "./components/About";
import PolkadotDelegationDashboard from "./components/PolkadotDelegationDashboard";
import AutoProject from "./components/AutoProject";
import Tray from "./components/Tray";
import MenuIcon from "./assets/MenuIcon";
import CloseIcon from "./assets/CloseIcon";
import Boop from "./components/Boop";
import MinusIcon from "./assets/Icons/MinusIcon";
import PlusIcon from "./assets/Icons/PlusIcon";
import RouteLayout from "./components/RouteLayout";
import ErrorBoundary from "./components/ErrorBoundary";

function FixedLeft() {
  const { state, setState } = useContext(LayoutContext);
  const [isTrayOpen, setIsTrayOpen] = useState(false);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFontSize = parseInt(event.target.value, 10);
    const offset = newFontSize - 16;
    setState((prevState) => ({
      ...prevState,
      fontSize: newFontSize,
      userPaddingOffset: offset,
    }));
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const loadThemePreference = () => {
    const theme = localStorage.getItem("theme") || "light";
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
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
      style={{ paddingTop: (state.basePadding + state.userPaddingOffset) * 2, paddingBottom: (state.basePadding + state.userPaddingOffset) * 2 }}
    >
      <div
        className="w-full h-12 md:h-full flex md:flex-col justify-between items-center mx-3 md:mx-0  "
        style={{ paddingLeft: state.basePadding + state.userPaddingOffset, paddingRight: state.basePadding + state.userPaddingOffset }}
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
                  userPaddingOffset: prevState.userPaddingOffset - 1,
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
                  userPaddingOffset: prevState.userPaddingOffset + 1,
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
              {document.documentElement.getAttribute("data-theme") === "dark" ? (
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
  const { state } = useContext(LayoutContext);
  return (
    <div
      id="fixed-right"
      className="hidden fixed top-0 right-0 w-fit h-full md:flex  "
      style={{ paddingTop: (state.basePadding + state.userPaddingOffset) * 2, paddingBottom: (state.basePadding + state.userPaddingOffset) * 2 }}
    >
      <Separator className="hidden md:block" direction="vertical" />
      <Separator className="block md:hidden" direction="horizontal" />
      <div
        className="w-fit h-12 md:h-full flex md:flex-col justify-between items-center md:mx-[6px]  "
        style={{ paddingLeft: state.basePadding + state.userPaddingOffset, paddingRight: state.basePadding + state.userPaddingOffset }}
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

  return (
    <div className="primary leading-tight font-Franklin text-sm font-medium flex w-full h-screen justify-between overflow-hidden">
      <div className="primary leading-tight font-Franklin pt-12 md:pt-0 md:px-12 text-sm font-medium flex w-full h-screen justify-between overflow-hidden">
        <FixedLeft />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<RouteLayout gap={4}><Home /></RouteLayout>} />
            <Route
              path="/project"
              element={
                <RouteLayout>
                  <AutoProject />
                  <Separator direction="horizontal" />
                  <RadicleDesignSystem />
                  <Separator direction="horizontal" />
                  <PolkadotDelegationDashboard />
                </RouteLayout>
              }
            />
            <Route
              path="/about"
              element={
                <RouteLayout includeVerticalPadding>
                  <About />
                </RouteLayout>
              }
            />
            <Route
              path="/with-desktop"
              element={
                <RouteLayout gap={1}>
                  <AutoProject />
                  <Separator direction="horizontal" />
                  <RadicleDesktopApp />
                  <Separator direction="horizontal" />
                  <RadicleDesignSystem />
                  <Separator direction="horizontal" />
                  <PolkadotDelegationDashboard />
                </RouteLayout>
              }
            />
            <Route path="/notes" element={<RouteLayout gap={1}>Notes come here</RouteLayout>} />
          </Routes>
        </ErrorBoundary>
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
