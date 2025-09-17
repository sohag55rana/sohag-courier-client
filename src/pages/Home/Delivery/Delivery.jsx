// src/components/DeliveryWithImports.jsx
import React from "react";
import d1 from "../../../assets/live-tracking.png";
import d2 from "../../../assets/customer-top.png";
import d3 from "../../../assets/safe-delivery.png";

const Delivery = () => {
    const data = [
        { img: d1, title: "Live Parcel Tracking", desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind." },
        { img: d2, title: "100% Safe Delivery", desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time." },
        { img: d3, title: "24/7 Call Center Support", desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us." },
    ];

    return (
        <div className="py-12  px-28">
            <div className="space-y-6 ">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row items-center gap-4 mb-6 bg-[#ffffffb3] rounded-lg shadow-sm"
                    >
                        <div className="flex-shrink-0">
                            <img src={item.img} alt={item.title} className="h-50 w-50 object-contain" />
                        </div>

                        <div className="hidden md:block h-50 border-l-4 border-dashed border-gray-300 mx-4" aria-hidden />
                        <div className="md:hidden w-full border-t-2 border-dashed border-gray-300 my-2" aria-hidden />

                        <div className="md:text-left">
                            <h3 className="text-2xl text-[#03373d] font-bold">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Delivery;
