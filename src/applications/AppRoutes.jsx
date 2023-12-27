import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Game from "../pages/game/Game.jsx";
import SavedReadings from "../pages/saved/SavedReadings.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    <Route path="/saved" element={<SavedReadings />} />
  </Routes>
);

export default AppRoutes;
