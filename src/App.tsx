import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RadicleDesignSystem from "./components/RadicleDesignSystem";
import Separator from "./components/Separator";
import RadicleDesktopApp from "./components/RadicleDesktopApp";
import PolkadotDelegationDashboard from "./components/PolkadotDelegationDashboard";
import AutoProject from "./components/AutoProject";
import RouteLayout from "./components/RouteLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import MainLayout from "./components/MainLayout";
import Bankmonitor from "./components/Bankmonitor";

const Navigation = () => {
  return (
    <div className="primary leading-tight font-Franklin text-sm font-medium flex w-full h-screen justify-between overflow-hidden">
      <ErrorBoundary>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/project"
              element={
                <RouteLayout>
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
            <Route path="/about" element={<Home />} />
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
            <Route
              path="/notes"
              element={<RouteLayout gap={1}>Notes come here</RouteLayout>}
            />
            <Route
              path="/bankmonitor"
              element={
                <RouteLayout>
                  <Bankmonitor />
                </RouteLayout>
              }
            />
          </Route>
        </Routes>
      </ErrorBoundary>
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
