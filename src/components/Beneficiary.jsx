import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer";
import Nominate from "./Nominate/Nominate";
import Testimonial from "./Testimonial/Testimonial";


function Beneficiary() {
  return (
    <div className="home">
        
   <Banner />
    <Testimonial />
    <Nominate />
    <br></br>
   <Footer />

    </div>
  );
}

export default Beneficiary;
