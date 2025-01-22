import React from "react";
import Avatar from "@mui/material/Avatar";

const UserAvatar = ({ username }) => {
  return (
    <Avatar sx={{ bgcolor: "grey", color: "black" }}>
      {username ? username.charAt(0).toUpperCase() : "U"}
    </Avatar>
  );
};

export default UserAvatar;
