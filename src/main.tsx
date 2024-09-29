import { createRoot } from "react-dom/client";
import ReactLenis from "lenis/react";
import { App } from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis root>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>
);
