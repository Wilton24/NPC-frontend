import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './pages/Root';
import PlayerRankings from './pages/PlayerRankings/PlayerRankings';
import PlayersHome from './pages/PlayerRankings/PlayersHome';
import { playerLoader } from './loaders/playerLoader';
import Player from './pages/Player/Player';
import PlayerError from './pages/Player/PlayerError';
import ProtectedRoute from './auth/ProtectedRoute';
import Login from './pages/Login/Login';
import UpcomingTournaments from './pages/Tournaments/UpcomingTournaments';
import TournamentsLayout from './pages/Tournaments/TournamentsLayout';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true }],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/tournaments",
    Component: TournamentsLayout,
    children: [
      { path: "upcoming", Component: UpcomingTournaments },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "players/",
        Component: PlayersHome,
        children: [
          { index: true },
          { path: "rankings", Component: PlayerRankings },
          {
            path: "rankings/:id",
            loader: playerLoader,
            Component: Player,
            errorElement: <PlayerError />
          }
        ]
      }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App
