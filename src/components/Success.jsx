import React from "react";
import "../css/Success.css";
import { ReactComponent as SuccessModal } from "../assets/successModal.svg";

const Success = () => {
  return (
    <div>
      <SuccessModal />
      <button className="done-button" type="done">
        Done
      </button>
    </div>
  );
};

export default Success;
