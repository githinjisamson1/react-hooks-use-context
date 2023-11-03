import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider, useGlobalContext } from "../context/userContext";

function App() {
  // !access values using context
  const { theme } = useGlobalContext();
  // console.log(theme);
  return (
    <main className={theme}>
      <Header />
      <Profile />
    </main>
  );
}

export default App;
