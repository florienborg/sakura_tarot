import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Game from "../pages/game/Game.jsx";
import SavedReadings from "../pages/saved/SavedReadings.jsx";
import SavedDetails from "../pages/savedDetails/SavedDetails.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    <Route path="/saved" element={<SavedReadings />} />
    <Route path="/details/:id" element={<SavedDetails />} />
  </Routes>
);

export default AppRoutes;