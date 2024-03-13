import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPg from "../pages/Landing/LandingPg";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Singup";
import NotFound from "../component/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import ResultPage from "../pages/dashboard/ResultPage";

function MainRoutes() {
  return <Routes>
    <Route path="/" element={<LandingPg/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/singup" element={<Signup/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/resultpage" element={<ResultPage/>}/>
   
  </Routes>;
}

export default MainRoutes;
