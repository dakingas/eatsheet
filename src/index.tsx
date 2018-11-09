import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import * as serviceWorker from "./serviceWorker";

const element = document.getElementById("root");
ReactDOM.render(<App />, element);

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess(serviceWorkerRegistration) {
    // TODO: Warn about service worker installation and offline use
  },
  onUpdate(serviceWorkerRegistration) {
    // TODO: Warn about new content received
  }
});

// Hot reload enabled
declare var module: {
  hot: {
    accept(path?: string, callback?: () => void): void;
  };
};
if (module.hot) {
  module.hot.accept("./components/app", () => {
    const NextApp = require("./components/app").default;
    ReactDOM.render(<NextApp />, element);
  });
}
