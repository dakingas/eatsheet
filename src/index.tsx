import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import NotificationView from "./components/notification-view";
import * as serviceWorker from "./serviceWorker";

const element = document.getElementById("root");
ReactDOM.render(<App />, element);

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess(serviceWorkerRegistration) {
    // Warn about service worker installation and offline use
    const notificationsElement = document.getElementById("notifications");
    if (notificationsElement) {
      ReactDOM.render(
        <NotificationView
          type="informative"
          onClose={() => {
            ReactDOM.unmountComponentAtNode(notificationsElement);
          }}
        >
          Content is cached for offline use.
        </NotificationView>,
        document.getElementById("notifications")
      );
    }
  },
  onUpdate(serviceWorkerRegistration) {
    // Warn about new content received
    const notificationsElement = document.getElementById("notifications");
    if (notificationsElement) {
      ReactDOM.render(
        <NotificationView
          type="informative"
          onClose={() => {
            ReactDOM.unmountComponentAtNode(notificationsElement);
          }}
        >
          New content is available and will be used when all tabs for this page
          are closed.
        </NotificationView>,
        document.getElementById("notifications")
      );
    }
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
