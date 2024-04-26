import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HighestRuns from "./containers/PlayerStats/highestRuns";
import { QueryClient, QueryClientProvider } from "react-query";
import PlayerDetails from "./containers/PlayerDetails";
const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HighestRuns />,
    },
    {
      path: "/player/:playerId",
      element: <PlayerDetails />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
