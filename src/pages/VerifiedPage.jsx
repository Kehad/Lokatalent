/* eslint-disable react/prop-types */
// import "./VerifiedPage.css";
import mark from "../assets/mark.png";
import { Link } from "react-router-dom";

function VerifiedPage({ content }) {
  console.log("VerifiedPage");
  console.log(content);
  return (
    <>
      <div className="px-[7rem] py-12 flex justify-center flex-col items-cener gap-12 bg-[#FAF8F4]">
        <div className="flex flex-col justify-center relative">
          <div className="self-start cursor-pointer absolute top-[1%] left-[1%] h-12 w-12">
            <Link
              to={`/signup/signup-details/${content.halfName.toLowerCase()}`}
            >
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

          <div className="flex justify-center">
            <img src={mark} alt="Complelted logo" />
          </div>
          <div>
            <h4 className="font-nunito text-4xl font-bold leading-[50.4px] tracking-tighter text-center">
              Email Verified
            </h4>
            <p className="font-nunito text-xl text-center">
              Lorem ipsum lore et itat ipsum et itat ipsumet itat ipsumet itat
              ipsum
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <Link
            to="/"
            className="font-nunito text-[14px] !text-[#fff] bg-[#3377FF] font-normal leading-6 w-[20rem] rounded h-12 flex items-center justify-center"
          >
            Proceed to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}

export default VerifiedPage;
