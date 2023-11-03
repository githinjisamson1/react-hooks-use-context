import React from "react";
import Interests from "./Interests";
import { useGlobalContext } from "../context/userContext";

function Profile() {
  const { user } = useGlobalContext();
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user}'s Profile</h2>
      <Interests />
    </div>
  );
}

export default Profile;
