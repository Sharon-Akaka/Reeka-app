import React from "react";
import "../css/CustomCard.css";

const CustomCard = ({ tag, heading, body }) => {
  return (
    <div className="custom-card">
      <div className="custom-tag">{tag}</div>
      <h2 className="custom-heading">{heading}</h2>
      <p className="custom-body">{body}</p>
    </div>
  );
};

export default CustomCard;
