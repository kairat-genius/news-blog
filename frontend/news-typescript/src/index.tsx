import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./helpers/MainRoutes";
import NewsContext from "./context/NewsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <NewsContext>
    <BrowserRouter>
      <App />
      <MainRoutes />
    </BrowserRouter>
  </NewsContext>
);
