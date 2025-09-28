import React from "react";
import logoImg from "../../../assets/all/logo.png";
const CourierLogo = () => {
  return (
    <div className="flex items-end -mr-10">
      <img src={logoImg} alt="" />
      <p className="text-3xl -ml-3 font-extrabold">SohagCourier</p>
    </div>
  );
};

export default CourierLogo;
