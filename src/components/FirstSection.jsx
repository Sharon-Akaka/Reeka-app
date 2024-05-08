import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import Dashboard from "../assets/dashboard.svg";
import "../css/FirstSection.css";

const FirstSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);
  return (
    <div className="first-section">
      <h1 className="heading-font-style" style={{ color: "#E36B37" }}>
        Rental Management <span style={{ color: "black" }}>That Elevates</span>{" "}
        Your Business
      </h1>
      <p className="sub-heading-font-style">
        Automate, Optimize, and Grow Your Kenyan <br />
        Short Term Rental Operations with Ease
      </p>
      <CustomButton
        buttonColour="black"
        textColour="white"
        onClick={toggleModal}
        icon
      />
      <Modal isOpen={isModalOpen} close={toggleModal} />
      <img src={Dashboard} alt="Dashboard" />
    </div>
  );
};

export default FirstSection;
