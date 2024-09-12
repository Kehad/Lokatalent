import React from "react";
import { Link } from "react-router-dom";
import ig from "../../../assets/ig.png";
import x from "../../../assets/x.png";
import fb from "../../../assets/fb.png";
// import "./footer.css";

function Footer() {
  //px-[7rem]
  return (
    <div className="bg-[#3377ff] px-[5rem] text-white flex flex-col gap-8 py-20">
      <div>
        <div className="  ">
          <div className="flex flex-rol justify-between items-center">
            <p>Lokatalent</p>
            <div>
              <nav>
                <ul className="flex list-none md:gap-[40px] lg:gap-[110px]">
                  <li className="">
                    <Link to="/login">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/signup">Services</Link>
                  </li>
                  <li>
                    <Link to="/register">Creative</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[0.5px] bg-white"></div>
      <div>
        <div className="flex md:gap-4 lg:gap-8">
          <img src={ig} alt="Instagram" />
          <img src={x} alt="X" />
          <img src={fb} alt="Facebook" />
        </div>
        <p className="font-nunito md:text-normal lg:text-2xl font-extrabold tracking-tighter text-right uppercase">
          Have any questions? reach out to us
        </p>
        <div className="flex justify-between mt-12">
          <p>2024 Lokatalent. All Rights Reserved</p>
          <button
            className="font-nunito text-xl !text-[#3377FF] font-normal leading-6 bg-white buttonds w-[12rem] h-[2.5rem] lg:w-[14rem] lg:h-[3rem]"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
