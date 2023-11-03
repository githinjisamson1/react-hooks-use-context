import React from "react";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import defaultUser from "../data";
import { useGlobalContext } from "../context/userContext";

function Header() {
  const { user, setUser } = useGlobalContext();
  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin}>
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle />
      </nav>
    </header>
  );
}

export default Header;
