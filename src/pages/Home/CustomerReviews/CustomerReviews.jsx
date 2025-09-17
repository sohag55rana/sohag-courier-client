import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import logoImg from "../../../assets/agent-pending.png";

const CustomerReviews = () => {
    const reviews = [
        {
            img: logoImg,
            name: "John Doe",
            job: "Software Engineer",
            desc: "Sohag Courier has transformed our logistics process. Super fast and reliable delivery service!",
        },
        {
            img: logoImg,
            name: "Emily Smith",
            job: "E-commerce Manager",
            desc: "Their support team is always responsive. I can track every parcel without hassle.",
        },
        {
            img: logoImg,
            name: "Michael Lee",
            job: "Startup Founder",
            desc: "Affordable rates with excellent service quality. My go-to courier partner!",
        },
        {
            img: logoImg,
            name: "Sophia Johnson",
            job: "Marketing Executive",
            desc: "The customer experience is amazing. My clients are happy with on-time delivery.",
        },
        {
            img: logoImg,
            name: "David Kim",
            job: "Business Owner",
            desc: "Safe packaging and fast delivery. Sohag Courier is a game-changer for my business.",
        },
        {
            img: logoImg,
            name: "Olivia Brown",
            job: "Freelancer",
            desc: "I always use Sohag Courier for my projects. Reliable and trustworthy service.",
        },
        {
            img: logoImg,
            name: "Chris Wilson",
            job: "Logistics Manager",
            desc: "Great communication and seamless delivery. Highly recommend to others!",
        },
    ];

    return (
        <div className="bg-base-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination-custom",
                        clickable: true,
                    }}
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="card bg-white shadow-md p-6 rounded-xl flex flex-col h-full">
                                {/* Quote Icon */}
                                <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />

                                {/* Description */}
                                <p className="text-gray-700 mb-4 flex-grow">{review.desc}</p>

                                {/* Border */}
                                <div className="border-t-2 border-dashed border-gray-500 my-4" />

                                {/* User Info */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.img}
                                        alt={review.name}
                                        className="h-14 w-14 rounded-full object-cover border"
                                    />
                                    <div>
                                        <h4 className="font-bold text-[#03373d]">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.job}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex items-center justify-center text-center px-100">
                    <button className="swiper-button-prev-custom btn btn-outline btn-sm hover:bg-amber-500">
                        ←
                    </button>

                    <div className="swiper-pagination-custom flex justify-center" />

                    <button className="swiper-button-next-custom btn btn-outline btn-sm hover:bg-amber-500">
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
