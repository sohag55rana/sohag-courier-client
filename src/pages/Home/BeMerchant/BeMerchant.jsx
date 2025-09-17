import locationImg from "../../../assets/location-merchant.png"

const BeMerchant = () => {
    return (
        <div className="bg-[url(assets/be-a-merchant-bg.png)] py-12 bg-[#03373D] rounded-2xl my-10 p-20 mx-auto bg-no-repeat" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={locationImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="text-white">
                    <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="btn border-amber-400 text-amber-400 bg-[#03373D] rounded-full hover:text-black mr-4 hover:bg-[#CAEB66]">Become a Merchant</button>
                    <button className="btn border-amber-400 bg-[#03373D] text-amber-400 hover:text-black rounded-full hover:bg-[#CAEB66]">Earn with Profast Courier</button>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;