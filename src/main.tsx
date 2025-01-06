import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MyProvider } from "./components/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <MyProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MyProvider>,
);
