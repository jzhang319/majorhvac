import React from "react";
import PictureComponent from "../PictureComponent";
import RequestAppointmentButton from "../RequestAppointmentButton";
import Footer from "../Footer";

function Dashboard() {
  return (
    <>
      <div className="sm:h-45 md:h-100 lg:hidden" />
      <div className="w-full h-1/2-screen flex flex-row sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
        <div className="bg-blue-500 w-1/3 sm:w-full py-10 sm:py-5 md:w-full lg:w-1/3 lg:gap-0 text-white flex flex-col justify-center items-center">
          <div className="px-25 sm:mt-2 sm:px-16 md:px-5 lg:px-10 sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center">
            AC Installation in Anne Arundel
          </div>
          <div className="px-5 sm:px-10 text-5xl sm:text-3xl md:text-4xl lg:text-4xl font-bold flex text-center">
            County & Surrounding Areas
          </div>
          <div className="text-2xl sm:text-lg md:text-3xl lg:text-3xl font-light mt-5">
            For Installation and Repair
          </div>
          <div className="text-base sm:text-xl md:text-2xl md:font-light lg:text-2xl mt-2">
            Call Us Today!
          </div>
          <div className="mt-1 text-lg sm:text-3xl md:text-3xl  font-extrabold">
            (301) 820-5182
          </div>
          <RequestAppointmentButton classes="mt-5 text-black sm:mb-5 sm:px-4 lg:px-2 lg:mx-4" />
        </div>
        <div className="w-2/3 sm:w-full md:w-full lg:mt-0 lg:bg-blue-500">
          {/* a wide ac picture */}
          <img
            src="/images/hvac-wallpaper.webp"
            alt="hvac"
            className="w-full h-full object-cover sm:mb-10 md:h-100 lg:h-full md:mt-100 lg:mt-0"
          />
        </div>
      </div>
      <div className="my-20 w-full grid grid-cols-3 gap-20 px-20 sm:px-10 sm:gap-5 sm:mt-5 sm:flex sm:flex-col md:mt-10 md:gap-10 lg:gap-20 lg:mt-15 text-gray-600">
        <div className="flex flex-col items-center">
          <div className="">
            <img
              src="/images/courteous-scheduling.png"
              alt="hvac3"
              className="w-40 h-40 object-contain sm:ml-10 md:ml-0 lg:ml-10"
            />
            <p className="font-bold text-2xl mt-2 text-center">
              Courteous Scheduling
            </p>
          </div>
          <div>
            <p className="text-center mt-2">
              We value your time. That is why we offer flexible scheduling
              options and call or text 30 minutes before our arrival.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img
              src="/images/upfront-pricing.webp"
              alt="hvac5"
              className="w-40 h-40 object-contain"
            />
            <p className="font-bold text-2xl mt-2 text-center">
              Upfront Pricing
            </p>
          </div>
          <div>
            <p className="text-center mt-2">
              We know that you want to know what expenses you are getting
              yourself into. Our HVAC services are priced by the job, not by the
              hour.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img
              src="/images/happy-customers.png"
              alt="hvac4"
              className="w-40 h-40 object-contain"
            />
            <p className="mt-2 font-bold text-2xl text-center">
              Happy Customers
            </p>
          </div>
          <div>
            <p className="text-center mt-2">
              With more than 1.3 million 5-star reviews and an average 4.9
              rating, our customers are happy with our services.
            </p>
          </div>
        </div>
        <PictureComponent />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
