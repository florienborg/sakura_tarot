import { Routes, Route, } from 'react-router-dom';
import React from 'react';
import Index from '../pages/index/Index';
import Game from '../pages/game/Game';
import Card from '../pages/card/Card';
import Saved from '../pages/saved/Saved';

function Router() {
    return (
      <>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/game" element={<Game />} />
            <Route path="/card" element={<Card />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
      </>
    );
  }
  
  export default Router;
  