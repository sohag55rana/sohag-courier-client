import { Outlet } from "react-router";
import authImg from "../assets/authImage.png"
import SohagCourierLogo from "../pages/shared/SohagCourierLogo/SohagCourierLogo";

const AuthLayout = () => {
    return (
        <div className="mt-10 p-10 ">
            <SohagCourierLogo></SohagCourierLogo>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img
                        src={authImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;