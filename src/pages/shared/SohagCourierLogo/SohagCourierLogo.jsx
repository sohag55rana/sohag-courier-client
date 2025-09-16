import sohagCourierLogo from "../../../assets/logo.png"
const SohagCourierLogo = () => {
    return (
        <div className="flex items-end">
            <img className="mb-2" src={sohagCourierLogo} alt="" />
            <p className="text-3xl -ml-4 font-bold">SohagCourier</p>
        </div>
    );
};

export default SohagCourierLogo;