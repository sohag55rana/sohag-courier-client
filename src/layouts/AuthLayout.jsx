import CourierLogo from "../pages/shared/CourierLogo/CourierLogo";
import authImage from "../assets/all/authImage.png";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="p-12">
      <CourierLogo></CourierLogo>
      <div className="hero-content flex-col lg:flex-row-reverse mx-auto justify-between mt-16">
        <div className="flex-1">
          <img src={authImage} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
