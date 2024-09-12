import React from 'react'
// import './testimonial.css'

function Testimonialcard() {
  return (
    <div className="bg-[#3377ff] text-white flex sm:gap-4 flex-col sm:flex-col md:flex-col gap-2 md:gap-4 md:items-normal lg:flex-row lg:items-center pl-4 sm:pl-10 md:lg:pl-10 lg:pl-10 py-6 sm:py-6 md:py-10 lg:py-16 rounded-xl ">
      <div className="md:w-[100%] lg:w-[40%]">
        <div className="w-[90%">
          <h3 className="text-2xl  sm:text-3xl md:text-3xl lg:text-3xl font-bold leading-tight text-left">
            Ready to Lorem ipsum lorem ip
          </h3>
          <p className="text-base font-normal leading-5 sm:leading-7 md:leading-7 lg:leading-7 text-left opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur adipiscing commodo euismod condimentum nunc.
          </p>
        </div>
      </div>
      <div className="flex gap-8">
        {/* <a
          href="#"
          className="font-nunito text-xl !text-[#3377FF] font-normal leading-6 bg-white  py-6 px-20 w-max text-white  inline-block rounded-[5px]"
        >
          Apply Here
        </a>
        <a
          href="#"
          className="font-nunito text-xl text-white font-normal leading-6   py-6 px-20 w-max text-white  inline-block rounded-[5px] testi-button"
        >
          Apply as a Talent
        </a> */}
        <button className="font-nunito text-base sm:text-xl md:text-xl lg:text-xl !text-[#3377FF] font-normal leading-6 bg-white border-2 border-white w-[100px] h-[30px] sm:w-[160px] sm:h-[60px] md:w-[200px] md:h-[60px] lg:w-[250px] lg:h-[70px] rounded">
          Apply here
        </button>
        <button className="font-nunito text-base sm:text-xl md:text-xl lg:text-xl text-white font-normal leading-6 border-2 border-white w-[150px] h-[30px] sm:w-[200px] sm:h-[60px] md:w-[200px] md:h-[60px] lg:w-[250px] lg:h-[70px] rounded">
          Apply as a talent
        </button>
      </div>
    </div>
  );
}

export default Testimonialcard