/** @format */

import "./NavLink.css";
import Avatar from "@mui/material/Avatar";
interface Props {
  title: string;
  Icon?: any;
  avatar?: string;
}
function navLink({ avatar, Icon, title }: Props) {
  return (
    <div className="navLink">
      {Icon && <Icon className="navLink__icon" />}
      {avatar && <Avatar className="navLink__icon" src={avatar} />}
      <h3 className="navLink__title">{title}</h3>
    </div>
  );
}

export default navLink;
