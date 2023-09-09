import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./sass/base/fonts.scss";
import "./sass/base/container.scss";
import "./sass/abstracts/variables.scss";
import "./sass//abstracts/mixins.scss";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
