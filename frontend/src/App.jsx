import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Test = lazy(() => import("./components/Test"));
const Test2 = lazy(() => import("./components/Test2"));
import Home from "./components/pages/Home";
const Main = lazy(() => import("./components/pages/Main"));
const Explore = lazy(() => import("./components/pages/Explore"));
const Problem = lazy(() => import("./components/pages/Problem"));
const Discuss = lazy(() => import("./components/pages/Discuss"));
const Profile = lazy(() => import("./components/pages/Profile"));

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Loading..">
              <Main />
            </Suspense>
          }
        />
        <Route
          path="/explore"
          element={
            <Suspense fallback="Loading..">
              <Explore />
            </Suspense>
          }
        />
        <Route
          path="/problem"
          element={
            <Suspense fallback="Loading..">
              <Problem />
            </Suspense>
          }
        />
        <Route
          path="/discuss"
          element={
            <Suspense fallback="Loading..">
              <Discuss />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback="Loading..">
              <Profile />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
