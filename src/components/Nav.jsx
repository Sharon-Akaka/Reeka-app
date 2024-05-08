import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import "../css/Nav.css";

const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div>
      <div className="nav-styling">
        <h1 className="logo-font">Reeka</h1>
        <CustomButton
          className="custom-button"
          buttonColour="black"
          textColour="white"
          onClick={toggleModal}
        />
      </div>
      <Modal isOpen={isModalOpen} close={toggleModal} />
    </div>
  );
};

export default Nav;
