/** @format */

import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic: string): JSX.Element => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Wiktor Wielgusiak</h2>
        <h4>witia16@gmail.com</h4>
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
  );
}

export default Sidebar;
