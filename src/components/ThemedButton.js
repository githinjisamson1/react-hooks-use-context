import React from "react";
import { useGlobalContext } from "../context/userContext";

function ThemedButton() {
  const { theme } = useGlobalContext();
  return <button className={theme} />;
}

export default ThemedButton;
