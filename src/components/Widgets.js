import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Papa React is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: UK updates", "Top news - 86 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 reades")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
      {newsArticle("Is redux too good?", "Code - 123 readers")}
      {newsArticle("Papa React launches course?!", "Top news - 6503 readers")}
    </div>
  );
};

export default Widgets;
