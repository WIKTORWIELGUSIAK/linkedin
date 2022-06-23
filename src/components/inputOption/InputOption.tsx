/** @format */

import React from "react";
import "./InputOption.css";
interface Props {
  Icon: any;
  title: string;
  color: string;
}

function InputOption({ Icon, title, color }: Props) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
