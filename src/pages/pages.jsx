import React from "react";
import Homepage from "./home";
import Cousine from "./cousine";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Searched from "../components/Searched";
import Recipe from "./Recipe";
const Pages = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname} >
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/cousine/:type"} element={<Cousine />} />
      <Route path={"/Searched/:search"} element={<Searched />} />
      <Route path={"/recipe/:name"} element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
