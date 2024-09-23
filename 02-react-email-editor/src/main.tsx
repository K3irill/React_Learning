import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/email-editor/EmailEditor.tsx";
import "./index.css";
import { Home } from "./Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
