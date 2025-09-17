
import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png"
import logo2 from "../../../assets/brands/amazon_vector.png"
import logo3 from "../../../assets/brands/casio.png"
import logo4 from "../../../assets/brands/moonstar.png"
import logo5 from "../../../assets/brands/randstad.png"
import logo6 from "../../../assets/brands/start-people 1.png"
import logo7 from "../../../assets/brands/start.png"

const Brands = () => {
    const images = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7
    ];

    return (
        <div className="py-10 px-28">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                We&apos;ve helped thousands of <span className="text-[#03373d]">sales teams</span>
            </h2>

            {/* Marquee Section */}
            <Marquee direction="left" speed={60} gradient={false}>
                {images.map((src, index) => (
                    <div key={index} className="mx-10">
                        <img
                            src={src}
                            alt={`Brand ${index + 1}`}
                            className="h-6 w-30 object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Brands;
