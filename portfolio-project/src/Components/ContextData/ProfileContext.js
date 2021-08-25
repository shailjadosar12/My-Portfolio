import React, { useContext, createContext } from "react";
export const PROFILE_DETAILES = {
  postId: 1,
  id: 1,
  name: "Shailja Dosar",
  email: "Eliseo@gardner.biz",
  title: "Developer",
  contactNo: "08791313085",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lectus feugiat, accumsan ligula nec, elementum lacus. Nunc blandit risus posuere orci tincidunt, non sagittis magna lobortis. Sed accumsan libero ac quam convallis, nec laoreet est convallis. Duis pretium neque sed tempor finibus. Duis vehicula elementum sagittis. Maecenas venenatis accumsan risus, sit amet ultrices diam tincidunt ac. Phasellus quis orci finibus metus iaculis maximus a sit amet magna. Nam ullamcorper orci eu nulla posuere ullamcorper. Etiam ac lobortis ante, nec eleifend nulla.",
};

const ProfileContext = createContext(PROFILE_DETAILES);
export const ProfileContextProvider = (props) => {
  return (
    <ProfileContext.Provider value={PROFILE_DETAILES}>
      {props.children}
    </ProfileContext.Provider>
  );
};
export default ProfileContext;
