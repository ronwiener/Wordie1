import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFive from "./AppFive";
import AppSix from "./AppSix";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppFive />} />
      <Route path="appsix" element={<AppSix />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
