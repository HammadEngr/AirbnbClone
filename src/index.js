import React from "react";
import ReactDOM from "react-dom/client";
import { FooterContextProvider } from "./components/Store/footer-context";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FooterContextProvider>
      <App />
    </FooterContextProvider>
  </BrowserRouter>
);
