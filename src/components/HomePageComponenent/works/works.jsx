import React from "react";
import lady from "../../../assets/lady.png";
import layers from "../../../assets/ic_layers_48px.png";
// import "./works.css";

function Works() {
  return (
    <div className="text-black text-center text-[36px] px-[3rem] md:px-[4rem] pt-20 pb-[5rem]">
      <h1 className="text-[48px] text-center font-bold">How it works</h1>
      <div className="flex items-center justify-center gap-16 mt-16 flex-column-revese sm:flex-col-revese md:items-start md:flex-col-everse lg:flex-row">
        <div className="relative">
          <img
            className="md:w-[280px] lg:w-[300px] lg:h-[400px] object-cover rounded-[15px] md:shadow-[20px_20px_#9be3aeb7] lg:shadow-[30px_30px_#9be3aeb7]"
            src={lady}
            alt="A lady with a phone"
          />
          <div className="bg-black text-white flex items-center justify-around w-max md:p-2 lg:p-4 rounded-[10px] absolute bottom-[15%] left-[-15%]">
            <div className="bg-[#2a4af480] flex items-center justify-center md:p-1 lg:p-2 rounded-full mr-2">
              <img src={layers} alt="layers" />
            </div>
            <div className="pr-8 md:pr-8">
              <p className="md:text-[12px] lg:text-[16px] text-left leading-[20.63px]">
                Lorem
              </p>
              <p className="md:text-[12px] lg:text-[16px] text-left leading-[20.63px] opacity-80">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  md:w-[450px] lg:w-[500px] gap-6">
          <div className="flex gap-4 justify-between items-start">
            <div className="">
              <p className="bg-[#3377ff] text-white rounded-full flex items-center justify-center text-[17px] font-bold leading-[29px] tracking-[-0.2px] text-center md:h-[25px] md:w-[25px] lg:h-[35px] lg:w-[35px] mt-2 mr-2">
                1
              </p>
            </div>
            <div className="flex flex-col text-left leading-normal leading-[29px]">
              <p className="text-[20px] font-bold">Lorem ipsum</p>
              <p className="text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consectetur adipiscing{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-between items-start">
            <div className="">
              <p className="bg-[#3377ff] text-white rounded-full flex items-center justify-center text-[17px] font-bold leading-[29px] tracking-[-0.2px] text-center md:h-[25px] md:w-[25px] h-[35px] w-[35px] mt-2 mr-2">
                1
              </p>
            </div>
            <div className="flex flex-col text-left leading-normal leading-[29px]">
              <p className="text-[20px] font-bold">Lorem ipsum</p>
              <p className="text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consectetur adipiscing{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-between items-start">
            <div className="">
              <p className="bg-[#3377ff] text-white rounded-full flex items-center justify-center text-[17px] font-bold leading-[29px] tracking-[-0.2px] text-center md:h-[25px] md:w-[25px] h-[35px] w-[35px] mt-2 mr-2">
                1
              </p>
            </div>
            <div className="flex flex-col text-left leading-normal leading-[29px]">
              <p className="text-[20px] font-bold">Lorem ipsum</p>
              <p className="text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consectetur adipiscing{" "}
              </p>
            </div>
          </div>
          <div className="mt-8 text-left">
            <a
              href="#"
              className="font-nunito text-[20px] font-normal leading-6 bg-[#3377ff] py-4 px-10 w-max text-white text-center inline-block rounded-[5px]"
            >
              Make a booking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
