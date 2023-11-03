import React from "react";
import { useGlobalContext } from "../context/userContext";

function DarkModeToggle() {
  const { theme, setTheme } = useGlobalContext();
  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
