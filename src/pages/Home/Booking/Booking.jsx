import logoImg1 from "../../../assets/bookingIcon.png"
import logoImg2 from "../../../assets/bookingIcon.png"
import logoImg3 from "../../../assets/bookingIcon.png"
import logoImg4 from "../../../assets/bookingIcon.png"
const Booking = () => {
    const cards = [
        {
            logo: logoImg1,
            title: "Booking Pick & Drop",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            logo: logoImg2,
            title: "Cash On Delivery",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            logo: logoImg3,
            title: "Delivery Hub",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            logo: logoImg4,
            title: "Booking SME & Corporate",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
        },
    ];

    return (
        <div className="px-28 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-first mb-10 text-[#03373d]">
                    How it Works
                </h2>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((item, idx) => (
                        <div
                            key={idx}
                            className="card bg-white shadow-md p-6 flex flex-col items-first text-first rounded-xl hover:shadow-xl transition"
                        >
                            {/* Logo */}
                            <img
                                src={item.logo}
                                alt={item.title}
                                className="h-16 w-16 object-contain mb-4"
                            />
                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2 text-[#03373d]">{item.title}</h3>
                            {/* Description */}
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Booking;
