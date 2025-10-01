import React from "react";
import merchantImg from "../../../assets/all/location-merchant.png";

const Merchant = () => {
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-12 text-white rounded-2xl bg-[#03373d] mb-14 ">
            {/* Left Section */}
            <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Merchant and Customer Satisfaction is Our First Priority
                </h2>
                <p className="text-white text-lg leading-relaxed">
                    We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                </p>
                <div className="flex gap-4">
                    <button className="btn hover:bg-[#caeb66] cursor-pointer rounded-full bg-[#03373d] text-[#caeb66] hover:text-black border-[#caeb66]">Become a Merchant</button>
                    <button className="btn hover:bg-[#caeb66] cursor-pointer rounded-full bg-[#03373d] text-[#caeb66] hover:text-black border-[#caeb66]">Earn with Profast Courier</button>

                </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex justify-center">
                <img
                    src={merchantImg}
                    alt="Merchant Partner"
                    className="max-w-sm w-full rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
};

export default Merchant;
