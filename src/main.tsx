import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./locales/i18n.ts";

import App from "./App.tsx";
import "./styles/index.css";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
