import Image1 from "../../../assets/image-31.png";
import Image2 from "../../../assets/image-32.png";
import Image3 from "../../../assets/image-30.png";
import DropDownElement from "./DropDownElement";

function Header() { 
  return (
    <div className="bg-[#3377FF] flex text-white flex-col sm:flex-col py-12 px-[2rem] sm:px-[2rem] lg:px-[5rem] md:flex-ol gap-2 sm:gap-8 md:gap-4 lg:flex-row">
      <div className="flex gap-4 flex-col">
        <h6 className="opacity-[80%]">WELCOME TO LOKATALENT</h6>
        <h1 className="font-nunito font-bold text-left text-[20px] sm:text-[40px] md:text-[60px] lg:text-[73.02px] lg:leading-[80.63px]">
          Quality Home Service On Demand
        </h1>
        <p className="font-nunito text-base font-normal leading-7 text-left opacity-[80%] lg:w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consectetur adipiscing commodo euismod condimentum nunc.
        </p>

        <DropDownElement />

        <div className="flex gap-[2px]">
          <p className="font-nunito text-base font-normal leading-7 text-left opacity-80">
            Want to sign up as a service provider?
          </p>
          <span className="opacity-100 text-white underline underline-offset-8">
            Apply Here
          </span>
        </div>
      </div>
      <div className="h[500px] w-[250px] lg:w-[482px] md:w-[310px] relative">
        <div className="w-[100%]">
          <img
            src={Image1}
            className="h-[75%] w-[100%] w-full object-cover"
            alt="New Image" //336.85×263.717
          />
        </div>
        <div className="flex w-[100%]">
          <img className="w-[50%]" src={Image2} alt="New Image" />
          <img className="w-[50%]" src={Image3} alt="New Image" />
        </div>
        <div className="bg-[#fff] w-[102px] h-[46px] sm:w-[112px] sm:h-[56px] md:w-[112px] md:h-[56px] lg:w-[112px] lg:h-[56px] absolute text-black flex items-center justify-center rounded top-[55%] opacity-[88%] right-[30%]">
          <div className="flex items-center justify-center text-center flex-col pr-[10px]">
            <p className="text-[12px] leading-[20px] sm:text-[16px] sm:leading-[25px] md:text-[16px] md:leading-[25px] lg:text-[16px] lg:leading-[25px] font-bold">
              15<span className="text-green-500">+</span>
            </p>
            <p className="text-[10px] leading-[10px] text-[#525252]">
              Services
            </p>
          </div>
          <div className="h-[40px] bg-[#000] w-[1px]"></div>
          <div className="flex items-center justify-center text-center flex-col pl-[10px]">
            <p className="text-[12px] leading-[20px] sm:text-[16px] sm:leading-[25px] md:text-[16px] md:leading-[25px] lg:text-[16px] lg:leading-[25px] font-bold">
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
