import React from "react";
import PictureComponent from "../PictureComponent";
import RequestAppointmentButton from "../RequestAppointmentButton";

function Dashboard() {
  return (
    <>
      <div className="w-full h-1/2-screen flex flex-row sm:flex-col">
        <div className="bg-blue-500 w-1/3 sm:w-full text-white flex flex-col justify-center items-center">
          <div className="px-25 sm:mt-5 sm:px-5 md:px-5 lg:px-10 sm:text-2xl md:text-2xl lg:text-4xl font-bold">
            AC Installation in
          </div>
          <div className="px-5 sm:px-25 text-5xl sm:text-2xl md:text-2xl lg:text-4xl mt-2 font-bold flex justify-center">
            Anne Arundel
          </div>
          <div className="px-5 sm:px-25 text-5xl sm:text-2xl md:text-2xl lg:text-4xl mt-2 font-bold flex justify-center">
            County &
          </div>
          <div className="px-5 sm:px-20 text-5xl sm:text-2xl md:text-2xl lg:text-4xl mt-2 font-bold flex justify-center">
            Surrounding Areas
          </div>
          <div className="text-2xl sm:text-lg md:text-lg lg:text-xl font-light mt-5">
            For Installation and Repair
          </div>
          <div className="text-base sm:text-xl mt-2">Call Us Today!</div>
          <div className="text-lg sm:text-2xl font-extrabold">
            (301) 820 - 5182
          </div>
          <RequestAppointmentButton classes="mt-5 text-black sm:mb-5 md:w-full md:px-3 sm:px-4 lg:px-5" />
        </div>
        <div className="bg-yellow-200 w-2/3 sm:w-full">
          {/* a wide ac picture */}
          <img
            src="/images/hvac.webp"
            alt="hvac"
            className="w-full h-full object-cover sm:mb-10"
          />
        </div>
      </div>
      <div className="my-20 w-full grid grid-cols-3 gap-20 px-30 sm:px-10 sm:gap-5 sm:mt-100 sm:flex sm:flex-col">
        {/* <div></div> */}
        <div className="flex flex-col items-center">
          <div>
            <img
              src="/images/courteous-scheduling.png"
              alt="hvac3"
              className="w-40 h-40 object-contain"
            />
            <p className="font-bold text-2xl mt-2">Courteous Scheduling</p>
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
            <p className="font-bold text-2xl mt-2">Upfront Pricing</p>
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
            <p className="mt-2 font-bold text-2xl">Happy Customers</p>
          </div>
          <div>
            <p className="text-center mt-2">
              With more than 1.3 million 5-star reviews and an average 4.9
              rating, our customers are happy with our services.
            </p>
          </div>
        </div>
        {/* <div></div> */}
        <PictureComponent />
      </div>
    </>
  );
}

export default Dashboard;
