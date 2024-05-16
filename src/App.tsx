import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HighestRuns from "./containers/PlayerStats/highestRuns";
import PlayerDetails from "./containers/PlayerDetails";
import Home from "./containers/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/highestRuns",
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
