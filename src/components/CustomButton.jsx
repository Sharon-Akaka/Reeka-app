import React from "react";
import "../css/CustomButton.css";
import { ReactComponent as ArrowRight } from "../assets/arrow_right.svg";

const CustomButton = ({ buttonColour, textColour, icon, onClick }) => {
  const buttonText = "Book Demo";

  return (
    <button
      className={icon ? "custom-button-with-icon" : "custom-button"}
      style={{ backgroundColor: buttonColour, color: textColour }}
      onClick={onClick}
    >
      {buttonText}
      {icon && <ArrowRight style={{ paddingLeft: "10px" }} />}
    </button>
  );
};

export default CustomButton;
