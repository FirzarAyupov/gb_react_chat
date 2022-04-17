import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ProfilePage,
  ChatPage,
  GistsPage,
  LoginPage,
  SignUpPage,
} from "./pages";
import { Header, PrivateRoute, PublicRoute } from "./components";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header session={isAuth} />
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute isAuth={isAuth} to="/login">
                  <h1>Home page</h1>
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/chat/*"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/gists"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <GistsPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute isAuth={isAuth}>
                  <LoginPage />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/sign-up"
              element={
                <PublicRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublicRoute>
              }
            ></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
