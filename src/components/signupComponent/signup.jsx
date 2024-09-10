import React from "react";
import user from "../../assets/user.png";
import left from "../../assets/left.png";
import "./signup.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="px-[7rem] py-12 flex justify-cnter flex-col items-cener gap-12 bg-[#FAF8F4] ">
      <div className="flex justify-center relative">
        <div className="self-start cursor-pointer absolute top-[1%] left-[1%] h-12 w-12">
          {/* <button className="absolue signup-button w-%]">&</button> */}
          {/* <img
            src={left}
            alt="Back button"
            className="absolue signup-button w-%]"
          /> */}
          <Link to="/">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6924 9.16754L13.458 17.7485L22.0389 23.9829"
                stroke="#212121"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="font-nunito text-4xl font-bold leading-[50.4px] tracking-tighter text-center">
          <h4 className="footer-headr">
            What do you want to <br />
            sign up as?
          </h4>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <div className="w-[20rem] bg-white flex flex-col items-center gap-6 p-8 rounded-[10px] shadow-[1px_0_1px_rgba(0,0,0,0.45),_-1px_0_1px_rgba(0,0,0,0.45),_0_3px_2px_rgba(0,0,0,0.35)]">
          <div>
            <img src={user} alt="User Profile" />
          </div>
          <h6 className="font-nunito text-[30px] font-semibold leading-[42px] tracking-tighter text-center">
            User
          </h6>
          <p className="font-nunito text-base font-normal leading-[22.4px] tracking-tighter text-center w-[80%]">
            As a user, you will be able to lorem ipsussss asasmlo lorem ipsum
          </p>
          <Link
            to="./signup-details"
            className="font-nunito text-xl !text-[#ffF] font-normal leading-6 bg-[#3377FF] w-[13rem] rounded h-12 flex items-center justify-center"
          >
            Sign up
          </Link>
        </div>
        <div className="w-[20rem] bg-white flex flex-col items-center gap-6 p-8 rounded-[10px] shadow-[1px_0_1px_rgba(0,0,0,0.45),_-1px_0_1px_rgba(0,0,0,0.45),_0_3px_2px_rgba(0,0,0,0.35)]">
          <div>
            <img src={user} alt="User Profile" />
          </div>
          <h6 className="font-nunito text-[30px] font-semibold leading-[42px] tracking-tighter text-center">
            Service Provider
          </h6>
          <p className="font-nunito text-base font-normal leading-[22.4px] tracking-tighter text-center w-[80%] ">
            As a service provider, you will be able to lorem ipsumlo lorem ipsum
          </p>
          <Link
            to="./signup-details"
            className="font-nunito text-xl !text-[#fff] bg-[#3377FF] font-normal leading-6 w-[13rem] rounded h-12 flex items-center justify-center"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
