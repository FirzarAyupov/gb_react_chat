import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import { App } from "./App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProfilePage, ChatPage } from "./pages";
import { Header } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/chat/*" element={<ChatPage />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
