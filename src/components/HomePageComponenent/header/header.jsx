import React from "react";
import Image1 from "../../../assets/image-31.png";
import Image2 from "../../../assets/image-32.png";
import Image3 from "../../../assets/image-30.png";
import BasicButtonExample from "./boot";

function Header() {
  return (
    <div className="bg-[#3377FF] flex px-16 py-12 text-white">
      <div className="flex gap-4 flex-col">
        <h6 className="opacity-[80%]">WELCOME TO LOKATALENT</h6>
        <h1 className="font-nunito text-[73.02px] font-bold leading-[87.63px] text-left">
          Quality Home Service On Demand
        </h1>
        <p className="font-nunito text-base font-normal leading-7 text-left opacity-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          <br />
          consectetur adipiscing commodo euismod condimentum <br /> nunc.
        </p>

        <BasicButtonExample />

        <div className="flex gap-[2px]">
          <p className="font-nunito text-base font-normal leading-7 text-left opaciy-70">
            Want to sign up as a service provider?
          </p>
          <span className="opacity-100 text-white underline underline-offset-8">
            Apply Here
          </span>
        </div>


      </div>
      <div className="h-[500px] w-[482px] relative">
        <div>
          <img
            src={Image1}
            className="h-[75%] w-full object-cover"
            alt="New Image" //336.85×263.717
          />
        </div>
        <div className="flex w-[50%]">
          <img className="" src={Image2} alt="New Image" />
          <img className="" src={Image3} alt="New Image" />
        </div>
        <div className="bg-[#fff] w-[112px] h-[56px] absolute text-black flex items-center justify-center rounded top-[45%] opacity-[88%] right-[30%]">
          <div className="flex items-center justify-center text-center flex-col pr-[10px]">
            <p className="text-[16px] leading-[25px] font-bold">
              15<span className="text-green-500">+</span>
            </p>
            <p className="text-[10px] leading-[10px] text-[#525252]">
              Services
            </p>
          </div>
          <div className="h-[40px] bg-[#000] w-[1px]"></div>
          <div className="flex items-center justify-center text-center flex-col pl-[10px]">
            <p className="text-[16px] leading-[25px] font-bold">
              100<span className="text-green-500">+</span>
            </p>
            <p className="text-[10px] leading-[10px] text-[#525252]">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
