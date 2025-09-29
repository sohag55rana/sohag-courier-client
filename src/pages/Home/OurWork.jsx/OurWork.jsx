import React from "react";
import img1 from "../../../assets/all/safe-delivery.png";
import img2 from "../../../assets/all/big-deliveryman.png";
import img3 from "../../../assets/all/live-tracking.png";
const OurWork = () => {
  const works = [
    {
      img: img1,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      img: img2,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: img3,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div>
      <div className="border-b-2 border-dashed border-gray-400 my-20"></div>
      <section>
        <div className="mx-auto">
          {/* 3 Cards */}
          <div className="w-full mx-auto space-y-8">
            {works.map((work, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 flex items-center"
              >
                {/* Left - Img */}
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-[200px] h-[200px] object-cover rounded-lg"
                />

                {/* Middle - Dashed Border */}
                <div className="border-l-3 border-dashed border-gray-400 h-32 mx-12"></div>

                {/* Right - Text */}
                <div>
                  <h3 className="text-2xl font-semibold">{work.title}</h3>
                  <p className="text-gray-600 text-xl">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="border-b-2 border-dashed border-gray-400 my-20"></div>
    </div>
  );
};

export default OurWork;
