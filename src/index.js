import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/Productcontext";
import { Filtercontext_provider } from "./context/Filtercontext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <Filtercontext_provider>
      <App />
    </Filtercontext_provider>
  </AppProvider>
);

reportWebVitals();
