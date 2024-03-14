import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Test = lazy(() => import("./components/Test"));
const Test2 = lazy(() => import("./components/Test2"));
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route
          path="/test"
          element={
            <Suspense fallback="Loading..">
              <Test />
            </Suspense>
          }
        />
        <Route
          path="/test2"
          element={
            <Suspense fallback="Loading..">
              <Test2 />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
