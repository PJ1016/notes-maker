import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import { useState } from "react";
import DashBoard from "./containers/DashBoard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // Redirect to home page or wherever you want after login
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? (
        <DashBoard />
      ) : (
        <LoginPage handleLoginSuccess={handleLoginSuccess} />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
