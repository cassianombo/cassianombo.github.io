import "./index.css";

import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
