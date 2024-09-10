import "./emailComp.css";
import { Link } from "react-router-dom";

function EmailComp() {
  return (
    <div className="px-[7rem] py-12 flex justify-cnter flex-col items-cener gap-12 bg-[#FAF8F4]">
      <div className="flex justify-center relative">
        <div className="self-start cursor-pointer absolute top-[1%] left-[1%] h-12 w-12">
          <Link to="/signup/signup-details/">
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

        <div>
          <h4 className="font-nunito text-4xl font-bold leading-[50.4px] tracking-tighter text-center">
            Email verification
          </h4>
          <p className="font-nunito text-xl text-center">
            Enter the six digit code we sent to your email address <br /> to
            verify your account
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <div>
          <form className="flex gap-4">
            <div className="">
              <input
                type="text"
                className="w-12 h-12 flex items-center justify-center"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="w-12 h-12 flex items-center justify-center"
              />
            </div>
            <div className="">
              <input
                type="email"
                className="w-12 h-12 flex items-center justify-center"
              />
            </div>
            <div className="h-1 w-2 bg-black self-center"></div>
            <div className="">
              <input
                type="text"
                className="w-12 h-12 flex items-center justify-center"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="w-12 h-12 flex items-center justify-center"
              />
            </div>
            <div className="">
              <input
                type="password"
                className="w-12 h-12 flex items-center justify-center"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <Link
          to="/signup/signup-details/number"
          className="font-nunito text-[14px] !text-[#605dec] bg-[#f6f5ff] border-[#605dec] border-2 font-normal leading-6 w-[15rem] rounded h-12 flex items-center justify-center"
        >
          Verify Phone Number Instead
        </Link>
        <Link to="./verified" className="font-nunito text-[14px] !text-[#fff] bg-[#3377FF] font-normal leading-6 w-[15rem] rounded h-12 flex items-center justify-center">
          Verify Email
        </Link>
      </div>
      <div className="flex justify-center text ">
        Didn’t get a code?
        <span className="span"> Resend Code</span>
      </div>
    </div>
  );
}

export default EmailComp;
