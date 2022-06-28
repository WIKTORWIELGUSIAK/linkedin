/** @format */

import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic: string): JSX.Element => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    user && (
      <div className="sidebar">
        <div className="sidebar__top">
          <img
            src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
            alt=""
          />
          <Avatar
            alt="avatar"
            src={user.photoUrl ? user.photoUrl : ""}
            className="sidebar__avatar"
          >
            {user.displayName && user.displayName[0]}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">16561</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">1564</p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programing")}
          {recentItem("fronenddeveloper")}
          {recentItem("typescript")}
        </div>
      </div>
    )
  );
}

export default Sidebar;
