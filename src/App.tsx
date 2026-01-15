import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './pages/Root';
import PlayerRankings from './pages/PlayerRankings/PlayerRankings';
import PlayersHome from './pages/PlayerRankings/PlayersHome';


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
      { path: "rankings", Component: PlayerRankings }
    ]
  }
]);





function App() {

  return <RouterProvider router={router} />;


}

export default App
