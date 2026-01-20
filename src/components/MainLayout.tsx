import { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
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
  const isHomePage = location.pathname === "/";
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aboutTextSpring = useSpring({
    rotation: isAboutPage ? 0 : 90,
    config: { tension: 200, friction: 26 },
    immediate: isMobile,
  });

  const aboutContentSpring = useSpring({
    opacity: isAboutPage ? 1 : 0,
    config: { tension: 200, friction: 26 },
    immediate: isMobile,
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
    const theme = localStorage.getItem("theme") || "dark";
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
    <>
      <div
        className="h-full w-full flex flex-col md:flex-row"
        style={{
          fontSize: state.fontSize,
          paddingTop: isMobile && !isHomePage ? 0 : state.padding * 2,
          paddingBottom: isMobile && !isHomePage ? 0 : state.padding * 2,
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
          className={`flex-1 flex flex-col md:ml-8 overflow-y-auto overflow-x-visible md:overflow-visible transition-all duration-300 md:mr-8 no-scrollbar`}
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
            top: isAboutPage ? 0 : state.padding * 2,
            paddingLeft: isAboutPage ? `${state.padding * 2}px` : "0",
            paddingRight: isAboutPage ? `${state.padding * 2}px` : "0",
            paddingTop: isAboutPage ? `${state.padding * 2}px` : "0",
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
                onClick={() => navigate(-1)}
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
              className="w-full overflow-y-auto no-scrollbar"
              style={{
                opacity: aboutContentSpring.opacity,
                height: "calc(100vh - 100px)", // Full height minus header space
                marginTop: "20px",
              }}
            >
              <AboutBio />
            </animated.div>
          )}
        </div>

        {/* Mobile Navigation Buttons */}
        {!isHomePage && (
          <div
            className="md:hidden fixed bottom-0 left-0 right-0 flex justify-between z-50"
            style={{ padding: state.padding * 2 }}
          >
            <Link
              to="/"
              className="font-Franklin font-semibold uppercase bg-neutral-800 text-neutral-50 dark:bg-neutral-200 dark:text-neutral-900"
              style={{
                fontSize: state.fontSize,
                padding: `${state.padding}px ${state.padding * 2}px`,
              }}
            >
              HOME
            </Link>
            {!isAboutPage ? (
              <Link
                to="/about"
                className="font-Franklin font-semibold uppercase bg-neutral-800 text-neutral-50 dark:bg-neutral-200 dark:text-neutral-900"
                style={{
                  fontSize: state.fontSize,
                  padding: `${state.padding}px ${state.padding * 2}px`,
                }}
              >
                ABOUT
              </Link>
            ) : (
              <button
                onClick={() => navigate(-1)}
                className="font-Franklin font-semibold uppercase bg-neutral-800 text-neutral-50 dark:bg-neutral-200 dark:text-neutral-900"
                style={{
                  fontSize: state.fontSize,
                  padding: `${state.padding}px ${state.padding * 2}px`,
                }}
              >
                CLOSE
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
