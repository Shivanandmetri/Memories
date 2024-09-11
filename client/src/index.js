import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
import QueryApp from "./reactQuery/queryApp";

// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mocks/browser");
//   worker.start({
//     onUnhandledRequest: (req, print) =>
//       ["/api"].some((value) => req.url.pathname.startsWith(value))
//         ? print.warning()
//         : undefined,
//   });
// }

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <App /> */}
    <QueryApp />
  </Provider>
);
