import React, { useState } from "react";
import { useContext } from "react";

// returns Provider, Consumer
const UserContext = React.createContext();

// will receive children
export const UserProvider = ({ children }) => {
  // !states
  const [user, setUser] = useState(null);
  const [interests, setInterests] = useState([
    "Coding",
    "Biking",
    "Words ending in 'ing'",
  ]);
  const [theme, setTheme] = useState("dark");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        interests,
        setInterests,
        theme,
        setTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// will be used globally
export const useGlobalContext = () => {
  return useContext(UserContext);
};
