import Banner from "../Banner/Banner";
import BeMerchant from "../BeMerchant/BeMerchant";
import Booking from "../Booking/Booking";
import Brands from "../Brands/Brands";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import CustomerSaying from "../CustomerSaying/CustomerSaying";
import Delivery from "../Delivery/Delivery";
import FaqComponents from "../FaqComponents/FaqComponents";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <Services></Services>
            <Brands></Brands>
            <Delivery></Delivery>
            <div className="px-24">
                <BeMerchant></BeMerchant>
            </div>
            <CustomerSaying></CustomerSaying>
            <CustomerReviews></CustomerReviews>
            <FaqComponents></FaqComponents>


        </div>
    );
};

export default Home;