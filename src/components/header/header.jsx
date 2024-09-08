import React from "react";
import Image1 from '../../assets/image-31.png';
import Image2 from '../../assets/image-32.png';
import Image3 from '../../assets/image-30.png';

function Header() {
  return (
    <div className="bg-[#3377FF] flex px-16 py-12 text-white">
      <div className="flex gap-4 flex-col">
        <h6>WELCOME TO LOKATALENT</h6>
        <h1 className="font-nunito text-[73.02px] font-bold leading-[87.63px] text-left">
          Quality Home Service On Demand
        </h1>
        <p className="font-nunito text-base font-normal leading-7 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          <br />
          consectetur adipiscing commodo euismod condimentum <br /> nunc.
        </p>
        <div>
          <input type="text" placeholder="What service do you need?" />
          <button>&search;</button>
        </div>
        <p>Want to sign up as a service provider? Apply Here</p>
      </div>
      <div>
        <div>
          <img src={Image1} alt="New Image" />
        </div>
        <div className="flex">
          <img src={Image2} alt="New Image" />
          <img src={Image3} alt="New Image" />
        </div>
      </div>
    </div>
  );
}

export default Header;

