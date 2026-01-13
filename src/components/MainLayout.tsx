import { useContext, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import MyContext from "./Context";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AnimatedLink = animated(Link);
import MoonIcon from "../assets/Icons/MoonIcon";
import SunIcon from "../assets/Icons/SunIcon";
import Boop from "./Boop";
import Separator from "./Separator";
import { AboutBio } from "./About";

export default function MainLayout() {
  const { state } = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === "/about";

  const aboutTextSpring = useSpring({
    rotation: isAboutPage ? 0 : -90,
    config: { tension: 200, friction: 26 },
  });

  const aboutContentSpring = useSpring({
    opacity: isAboutPage ? 1 : 0,
    config: { tension: 200, friction: 26 },
  });

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
        className={`hidden md:flex flex-shrink-0 flex-col justify-between items-center fixed left-0 transition-all duration-300 ${isAboutPage ? "md:w-16" : "md:w-16"}`}
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

      <div
        className={`hidden md:block flex-shrink-0 transition-all duration-300 ${isAboutPage ? "md:w-16" : "md:w-16"}`}
      />

      <Separator
        className={`hidden md:block fixed transition-all duration-300 ${isAboutPage ? "left-16" : "left-16"}`}
        direction="vertical"
        style={{
          top: `${state.padding * 2}px`,
          bottom: `${state.padding * 2}px`,
          height: `calc(100vh - ${state.padding * 4}px)`,
        }}
      />

      {/* Main Content - This will be replaced by routes */}
      <div
        className={`flex-1 flex flex-col md:ml-8 overflow-visible transition-all duration-300 md:mr-8`}
        style={{ minWidth: 0 }}
      >
        <Outlet />
      </div>

      <Separator
        className={`hidden md:block fixed transition-all duration-300 ${isAboutPage ? "right-[33.333333%]" : "right-16"}`}
        direction="vertical"
        style={{
          top: `${state.padding * 2}px`,
          bottom: `${state.padding * 2}px`,
          height: `calc(100vh - ${state.padding * 4}px)`,
        }}
      />

      <div
        className={`hidden md:block flex-shrink-0 transition-all duration-300 ${isAboutPage ? "md:w-[33.333333%]" : "md:w-16"}`}
      />

      {/* Right Sidebar */}
      <div
        className={`hidden md:flex flex-shrink-0 flex-col fixed right-0 transition-all duration-300 ${isAboutPage ? "md:w-[33.333333%]" : "md:w-16 items-center justify-between"}`}
        style={{
          top: state.padding * 2,
          bottom: state.padding * 2,
          height: `calc(100vh - ${state.padding * 4}px)`,
          paddingLeft: isAboutPage ? `${state.padding * 2}px` : "0",
          paddingRight: isAboutPage ? `${state.padding * 2}px` : "0",
          paddingBottom: isAboutPage ? `${state.padding * 2}px` : "0",
        }}
      >
        <div
          className="flex items-center justify-between w-full"
          style={{ marginBottom: isAboutPage ? state.padding : 0 }}
        >
          <div
            style={{
              width: isAboutPage ? "auto" : "64px",
              height: isAboutPage ? "auto" : "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: isAboutPage ? "flex-start" : "center",
              overflow: "hidden",
            }}
          >
            <AnimatedLink
              to="/about"
              className="font-semibold whitespace-nowrap block"
              style={{
                fontSize: state.fontSize,
                transform: aboutTextSpring.rotation.to(
                  (r) => `rotate(${r}deg)`,
                ),
                transformOrigin: "center center",
                display: "block",
              }}
            >
              ABOUT
            </AnimatedLink>
          </div>
          {isAboutPage && (
            <animated.button
              onClick={() => navigate("/")}
              className="cursor-pointer font-semibold hover:opacity-70 transition-opacity"
              style={{
                fontSize: state.fontSize * 1.5,
                lineHeight: 1,
                opacity: aboutContentSpring.opacity,
              }}
            >
              ×
            </animated.button>
          )}
        </div>
        {isAboutPage && (
          <animated.div
            className="w-full flex-1 overflow-y-auto"
            style={{ opacity: aboutContentSpring.opacity }}
          >
            <AboutBio />
          </animated.div>
        )}
        {!isAboutPage && (
          <p
            className="md:writing-mode-vertical-lr font-semibold whitespace-nowrap txt-secondary"
            style={{ fontSize: state.fontSize }}
          >
            BLOG
          </p>
        )}
      </div>
    </div>
  );
}
