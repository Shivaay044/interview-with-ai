import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPg from "../Views/LandingPg";

function MainRoutes() {
  return <Routes>
    <Route path="/" element={<LandingPg/>}/>
  </Routes>;
}

export default MainRoutes;
