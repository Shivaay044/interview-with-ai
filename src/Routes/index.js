import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPg from "../pages/Landing/LandingPg";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Singup";
import NotFound from "../component/NotFound";
import StepBuilder from "../pages/Instruction";


function MainRoutes() {
  return <Routes>
    <Route path="/" element={<LandingPg/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/singup" element={<Signup/>}/>
    <Route path="/instruction" element={<StepBuilder/>}/>
    <Route path="*" element={<NotFound/>}/>
   
  </Routes>;
}

export default MainRoutes;
