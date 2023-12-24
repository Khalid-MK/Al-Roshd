import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./styles/index.css";
import "./locales/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div dir="ltr">
      <App />
    </div>
  </React.StrictMode>
);
