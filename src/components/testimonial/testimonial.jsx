import React from "react";
import './testimonial.css'
import image1 from "../../assets/testimonial-img1.png";
import image2 from "../../assets/testimonial-img2.png";
import image3 from "../../assets/testimonial-img3.png";

function Testimonial() {
  return (
    <div className="py-24 px-16 flex flex-col gap-8">
      <h3 className="header">TESTIMONIAL</h3>

      <h1 className="title">What Customers Say <br />About Us</h1>

      <div className="Imageslide flex flex-col gap-8">
        <div className="img-container">
          <div className="imges-box">
            <img src={image1} alt="" className="images" />
          </div>
          <div className="imges-box">
            <img src={image2} alt="" className="images" />
          </div>
          <div className="imges-box">
            <img src={image3} alt="" className="images" />
          </div>
        </div>
        <div className="crumb">
          <div className="crumbs"></div>
          <div className="crumbs crumb2"></div>
        </div>
      </div>
      <div className="testimonial-card"></div>
    </div>
  );
}

export default Testimonial;
