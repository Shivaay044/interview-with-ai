import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPg from "../pages/Landing/LandingPg";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Singup";
import NotFound from "../component/NotFound";
import StepBuilder from "../pages/Instruction";
import Dashboard from "../pages/User/Dashboard";
import ResultPage from "../pages/User/ResultPage";
import StartInterview from "../pages/Start interview/StartInterview";



function MainRoutes() {
  return <Routes>
    <Route path="/" element={<LandingPg/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/singup" element={<Signup/>}/>
    <Route path="/instruction" element={<StepBuilder/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/resultpage" element={<ResultPage />}/>
    <Route path="/start_interview" element={<StartInterview/>}/>
   
  </Routes>;
}

export default MainRoutes;
