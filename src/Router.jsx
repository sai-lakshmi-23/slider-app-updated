// Router.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import GamePlayer from "./components/GamePlayer";

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/slider-app-updated" element={<App />} />
        <Route path="/game-player" element={<GamePlayer />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
