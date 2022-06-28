/** @format */

import "./NavLink.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
interface Props {
  title: string;
  Icon?: any;
  avatar?: boolean;
  src?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function NavLink({ avatar, Icon, title, onClick }: Props) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="navLink">
      {Icon && <Icon className="navLink__icon" />}
      {avatar && (
        <Avatar
          src={user.photoUrl ? user.photoUrl : ""}
          className="navLink__icon"
        >
          {user.displayName ? user.displayName[0] : null}
        </Avatar>
      )}
      <h3 className="navLink__title">{title}</h3>
    </div>
  );
}

export default NavLink;
