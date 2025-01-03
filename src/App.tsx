import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Project from "./components/Project";
const Navigation = () => {
  const location = useLocation();
  console.log(location); // You can use the location object here

  return (
    <div className=" font-Franklin text-sm font-medium  flex w-full h-screen justify-between py-4">
      <div className="w-12 flex  flex-col items-center justify-between">
        <Link
          to="/"
          className="writing-mode-vertical-lr h-fit  whitespace-nowrap"
        >
          DANIEL KALMAN
        </Link>
        <Link
          to="project"
          className="writing-mode-vertical-lr h-fit  whitespace-nowrap"
        >
          SETTINGS
        </Link>
      </div>
      <div className="w-[2px] h-full bg-gray-800" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <div className="w-[2px] h-full bg-gray-800" />
      <div className="w-12 flex flex-col justify-between items-center">
        <Link
          to="/"
          className="writing-mode-vertical-lr h-fit  whitespace-nowrap"
        >
          ABOUT
        </Link>
        <Link
          to="/project"
          className="writing-mode-vertical-lr w-full h-fit  whitespace-nowrap"
        >
          <div className="flex flex-div w-full items-center gap-3">
            <div
              className={`${useLocation().pathname === "/project" ? "rotate-45 h-2" : "h-[2px]"} w-2 bg-gray-950 transition-all duration-150`}
            />
            <div className="h-[2px] w-2 bg-gray-300" />
            <div className="h-[2px] w-2 bg-gray-300" />
            <div className="h-[2px] w-2 bg-gray-300" />
          </div>
        </Link>
        <p className="writing-mode-vertical-lr h-fit  whitespace-nowrap">
          CONTACT
        </p>
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
