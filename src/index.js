import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfilePage, ChatPage, GistsPage } from "./pages";
import { Header } from "./components";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/chat/*" element={<ChatPage />}></Route>
            <Route path="/gists" element={<GistsPage />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
