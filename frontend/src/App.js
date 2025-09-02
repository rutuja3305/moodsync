
import React, { useState } from "react";
import Login from "./pages/login";                //  login page (lowercase file)
import Dashboard from "./components/dashboard";   // <- this path

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}


