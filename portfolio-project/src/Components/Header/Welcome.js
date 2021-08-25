import React, { useContext } from "react";
import ProfileContext from "../ContextData/ProfileContext";

const Welcome = () => {
  const value1 = useContext(ProfileContext);
  return (
    <div>
      <hr />

      <h1>Welcome to my Portfolio</h1>
      <h1>{value1}</h1>
      <hr />
    </div>
  );
};

export default Welcome;
