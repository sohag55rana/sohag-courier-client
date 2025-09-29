import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import OurWork from "../OurWork.jsx/OurWork";
import Merchant from "../Merchant/Merchant";

const Home = () => {
  return (
    <div className="bg-[#eaeced]">
      <Banner></Banner>
      <Services></Services>
      <ClientLogosMarquee></ClientLogosMarquee>
      <OurWork></OurWork>
      <Merchant></Merchant>
    </div>
  );
};

export default Home;
