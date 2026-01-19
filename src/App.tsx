import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './pages/Root';
import PlayerRankings from './pages/PlayerRankings/PlayerRankings';
import PlayersHome from './pages/PlayerRankings/PlayersHome';
import { playerLoader } from './loaders/playerLoader';
import Player from './pages/Player/Player';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true }],
  },
  {
    path: "players/",
    Component: PlayersHome,
    children: [
      { index: true },
      { path: "rankings", Component: PlayerRankings },
      {
        path: "rankings/:id",
        loader: playerLoader,
        // Component: Player
      }
    ]
  }
]);





function App() {

  return <RouterProvider router={router} />;


}

export default App
