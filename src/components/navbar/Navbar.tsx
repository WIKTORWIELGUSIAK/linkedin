/** @format */

import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NavLink from "./NavLink";
import Home from "@mui/icons-material/Home";
import People from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src="/linkedin-logo.svg" alt="logo" />
        <div className="navbar__search">
          <SearchIcon></SearchIcon>
          <input type="Home" />
        </div>
      </div>
      <div className="navbar__right">
        <NavLink title="Home" Icon={Home}></NavLink>
        <NavLink title="My Network" Icon={People}></NavLink>
        <NavLink title="Jobs" Icon={BusinessCenterIcon}></NavLink>
        <NavLink title="Messaging" Icon={ChatIcon}></NavLink>
        <NavLink title="Notifications" Icon={NotificationsIcon}></NavLink>
        <NavLink avatar="/WiktorWielgusiak.jpg" title="avatar"></NavLink>
      </div>
    </div>
  );
}

export default Navbar;
