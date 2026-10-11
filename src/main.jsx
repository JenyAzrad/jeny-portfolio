import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { LanguageProvider } from "./i18n.jsx";
import { installDomGuard } from "./domGuard.js";
import "./styles.css";

installDomGuard();

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </LanguageProvider>
);
