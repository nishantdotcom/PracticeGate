import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Test = lazy(() => import("./components/Test"));
const Test2 = lazy(() => import("./components/Test2"));
import Home from "./components/pages/Home";
import Question from "./components/pages/Question";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ResetPassword from "./components/pages/ResetPassword";
import GetProfile from "./components/pages/account/Getprofile";

const Main = lazy(() => import("./components/pages/Main"));
const Explore = lazy(() => import("./components/pages/Explore"));
const Problem = lazy(() => import("./components/pages/Problem"));
const Discuss = lazy(() => import("./components/pages/Discuss"));
const Profile = lazy(() => import("./components/pages/Profile"));
const EditProfile = lazy(() => import("./components/pages/EditProfile"));

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
        <Route
          path="/edit-profile"
          element={
            <Suspense fallback="Loading..">
              <EditProfile />
            </Suspense>
          }
        />
        <Route path="/question" element={<Question />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register-profile" element={<Register />} />
        <Route path="/account/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
