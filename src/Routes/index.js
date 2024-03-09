import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPg from "../Views/LandingPg";
import Login from "../pages/Login";
import Signup from "../pages/Singup";
import NotFound from "../component/NotFound";

function MainRoutes() {
  return <Routes>
    <Route path="/" element={<LandingPg/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/singup" element={<Signup/>}/>
    <Route path="*" element={<NotFound/>}/>
   
  </Routes>;
}

export default MainRoutes;
