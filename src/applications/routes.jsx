import Home from "../pages/home/home.jsx";
import { createBrowserRouter } from "react-router-dom";
import Game from "../pages/game/game.jsx";
import SavedReadings from "../pages/saved/savedreadings.jsx";


const routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/game",
    element: <Game />,
  },




  {
    path: "/saved",
    element: <SavedReadings />,
  },
]

const router = createBrowserRouter(routes);

export default router;
