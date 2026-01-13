import { useContext, useEffect } from "react";
import MyContext from "./Context";
import { Link, Outlet } from "react-router-dom";
import MoonIcon from "../assets/Icons/MoonIcon";
import SunIcon from "../assets/Icons/SunIcon";
import Boop from "./Boop";
import Separator from "./Separator";

export default function MainLayout() {
  const { state } = useContext(MyContext);

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

  return (
    <div
      className="h-full w-full flex flex-col md:flex-row"
      style={{
        fontSize: state.fontSize,
        paddingTop: state.padding * 2,
        paddingBottom: state.padding * 2,
      }}
    >
      {/* Left Sidebar */}
      <div
        className="hidden md:flex md:w-16 flex-shrink-0 flex-col justify-between items-center fixed left-0"
        style={{
          top: state.padding * 2,
          bottom: state.padding * 2,
          height: `calc(100vh - ${state.padding * 4}px)`,
        }}
      >
        <Link
          to="/"
          className="md:writing-mode-vertical-lr font-semibold md:h-[200px] whitespace-nowrap"
          style={{ fontSize: state.fontSize }}
        >
          DANIEL KALMAN
        </Link>
        <div
          className="p-1 hidden md:flex h-[200px] items-end"
          onClick={toggleTheme}
        >
          <div className="cursor-pointer">
            <Boop>
              {document.documentElement.getAttribute("data-theme") ===
              "dark" ? (
                <MoonIcon size={state.fontSize * 1.25} />
              ) : (
                <SunIcon size={state.fontSize * 1.25} />
              )}
            </Boop>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-16 flex-shrink-0" />

      <Separator
        className="hidden md:block fixed left-16"
        direction="vertical"
        style={{
          top: `${state.padding * 2}px`,
          bottom: `${state.padding * 2}px`,
          height: `calc(100vh - ${state.padding * 4}px)`,
        }}
      />

      {/* Main Content - This will be replaced by routes */}
      <div
        className="w-full flex-1 flex flex-col md:ml-16 md:mr-16 overflow-visible"
      >
        <Outlet />
      </div>

      <Separator
        className="hidden md:block fixed right-16"
        direction="vertical"
        style={{
          top: `${state.padding * 2}px`,
          bottom: `${state.padding * 2}px`,
          height: `calc(100vh - ${state.padding * 4}px)`,
        }}
      />

      <div className="hidden md:block md:w-16 flex-shrink-0" />

      {/* Right Sidebar */}
      <div
        className="hidden md:flex md:w-16 flex-shrink-0 flex-col justify-between items-center fixed right-0"
        style={{
          top: state.padding * 2,
          bottom: state.padding * 2,
          height: `calc(100vh - ${state.padding * 4}px)`,
        }}
      >
        <Link
          to="/about"
          className="md:writing-mode-vertical-lr font-semibold h-[200px] whitespace-nowrap"
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
