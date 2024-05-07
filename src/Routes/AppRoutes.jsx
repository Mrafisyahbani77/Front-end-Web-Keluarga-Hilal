import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Loader from "./Loader";
import Forbidden from "./Forbidden";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        }
      />

      <Route path="/Forbidden" element={<Forbidden/>}/>
    </Routes>
  );
}
