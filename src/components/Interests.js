import React from "react";
import { useGlobalContext } from "../context/userContext";

function Interests() {
  const { interests, theme } = useGlobalContext();
  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;
