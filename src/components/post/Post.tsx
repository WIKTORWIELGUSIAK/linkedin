/** @format */

import { Avatar } from "@mui/material";
import React, { useState } from "react";
import InputOption from "../inputOption/InputOption";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
interface Props {
  name: string;
  description: string;
  message: string;
  photoUrl?: string;
}
function Post({ name, description, message, photoUrl }: Props) {
  return (
    <div className="post">
      <Avatar />
      <div className="post__info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          title="Like"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={ChatOutlinedIcon}
          title="Comment"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={ShareOutlinedIcon}
          title="Share"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={SendOutlinedIcon}
          title="Like"
          color="gray"
        ></InputOption>
      </div>
    </div>
  );
}

export default Post;
