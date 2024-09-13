

function Service() {
  return (
    <div
      className="bg-hero-pattern  bg-[#3377ff] text-white flex md:items-center lg:items-center items-start sm:items-start justify-evenly flex-col sm:flex-col sm:items-left py-10 sm:py-24 md:py-24 lg:py-24 bg-cover bg-center bg-no-repeat  sm:gap-4 pl-[2rem] sm:pl-[2rem] gap-4 md:gap-4 md:pl-[3rem] md:items-start md:flex-col lg:flex-row"
      //   style="background-image: url('../../assets/bg-service2.png');"
    >
      <div className="md:w-max lg:w-[600px]">
        <h3 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-left">
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
          className="font-nunito text-xl !text-[#3377FF] font-normal leading-6 bg-white py-2 sm:py-2 px-8 sm:px-12 md:py-6 md:px-20 lg:py-6 lg:px-28 w-max text-white  inline-block rounded-[5px]"
        >
          Apply Here
        </a>
      </div>
    </div>
  );
}

export default Service;