import React from 'react';
// import './service.css';

function Service() {
  return (
    <div
      className="bg-hero-pattern  bg-[#3377ff] text-white flex items-center justify-evenly py-24 bg-cover bg-center bg-no-repeat md:gap-4 md:pl-[3rem] md:items-start md:flex-col lg:flex-row"
      //   style="background-image: url('../../assets/bg-service2.png');"
    >
      <div className="md:w-max lg:w-[600px]">
        <h3 className="sm:text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-left">
          Want to work as a service provider?
        </h3>
        <p className="text-base font-normal leading-7 text-left md:w-[40rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consectetur adipiscing commodo euismod condimentum nunc.
        </p>
      </div>
      <div className="service-button">
        <a
          href="#"
          className="font-nunito text-xl !text-[#3377FF] font-normal leading-6 bg-white  md:py-6 md:px-20 lg:py-6 lg:px-28 w-max text-white  inline-block rounded-[5px]"
        >
          Apply Here
        </a>
      </div>
    </div>
  );
}

export default Service