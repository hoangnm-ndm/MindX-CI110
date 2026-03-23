import React from "react";

// ? http://localhost:5173/profile
const ProfileMe = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user);
  return <div>{user.fullname}</div>;
};

export default ProfileMe;
