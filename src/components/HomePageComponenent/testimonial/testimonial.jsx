import React from "react";
// import './testimonial.css'
import image1 from "../../../assets/testimonial-img1.png";
import image2 from "../../../assets/testimonial-img2.png";
import image3 from "../../../assets/testimonial-img3.png";
import Testimonialcard from "./testimonial-card";

function Testimonial() { //px-16
  return (
    <div className="py-10 sm:py-24 md:py-24 lg:py-24 px-[2rem] sm:px-[2rem] px-[5rem] flex flex-col gap-8">
      <h3 className="font-raleway text-lg font-semibold leading-[23.48px] text-left text-[#2A4AF4]">
        TESTIMONIAL
      </h3>

      <h1 className="font-raleway font-bold text-2xl  sm:text-3xl md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[70px] text-left">
        What Customers Say <br />
        About Us
      </h1>

      <div className="Imageslide flex flex-col gap-8">
        <div className="flex gap-2 sm:gap-4 md:gap-4 lg:gap-4 ">
          <div className="w-[250px] h-[200px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px]">
            <img src={image1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-[250px] h-[200px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px]">
            <img src={image2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-[250px] h-[200px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px]">
            <img src={image3} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex gap-2 self-center">
          <div className="w-5 h-1.5 bg-[#2A4AF4] rounded-[5px]"></div>
          <div className="w-5 h-1.5 bg-[#3377FF5E] rounded-[5px]"></div>
        </div>
      </div>
      <div className="testimonial-card">
        <Testimonialcard />
      </div>
    </div>
  );
}

export default Testimonial;
