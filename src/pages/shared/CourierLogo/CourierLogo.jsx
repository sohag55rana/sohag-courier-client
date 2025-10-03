import React from "react";
import logoImg from "../../../assets/all/logo.png";
import { Link } from "react-router";
const CourierLogo = () => {
  return (
    <Link>
      <div className="flex items-end -mr-10">
        <img src={logoImg} alt="" />
        <p className="text-3xl -ml-3 font-extrabold">SohagCourier</p>
      </div>
    </Link>
  );
};

export default CourierLogo;
