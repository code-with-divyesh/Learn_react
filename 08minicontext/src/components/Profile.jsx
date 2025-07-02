import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

export function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user}</div>;
}
