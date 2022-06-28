/** @format */

import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading: string, subtitle: string): JSX.Element => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "Wiktor is going to be developer",
        "Top news - 1234 readers"
      )}
      {newsArticle(
        '"Google" programers. How one idiot hired a couple more idiots',
        "Daily Dev - 1341 readers"
      )}
      {newsArticle("You my not need an effect", "Daily Dev - 198 readers")}
      {newsArticle(
        "Stack Overflow developer survey 2022",
        "Daily Dev - 2531 readers"
      )}
      {newsArticle("Typescript: Type vs Interface", "Daily Dev - 758 readers")}
      {newsArticle(
        "GraphQL vs REST: putting it to rest",
        "Daily Dev - 687 readers"
      )}
    </div>
  );
}

export default Widgets;
