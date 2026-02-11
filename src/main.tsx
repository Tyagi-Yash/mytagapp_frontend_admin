import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppProviders from "./app/AppProviders";
import "./assets/css/style.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/KonnectX_Admin/">
    <AppProviders>
      <App />
    </AppProviders>
  </BrowserRouter>,
);
