import customerImg from "../../../assets/customer-top.png"

const CustomerSaying = () => {
    return (
        <div className="w-full text-center flex flex-col items-center">
            <figure className="px-10 pt-10 mb-10">
                <img
                    src={customerImg}
                    alt="customerImg"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-4xl font-bold text-[#03373d] mb-6">What our customers are sayings</h2>
                <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>

            </div>
        </div>
    );
};

export default CustomerSaying;