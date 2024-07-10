import React from "react";
import PictureComponent from "../PictureComponent";
import RequestAppointmentButton from "../RequestAppointmentButton";

function Dashboard() {
  return (
    <>
      <div className="w-full  h-1/2-screen flex">
        <div className="bg-blue-500 w-1/3 text-white flex flex-col justify-center items-center">
          <div className="px-25 text-5xl font-bold">AC Installation in</div>
          <div className="px-25 text-5xl mt-2 font-bold flex justify-center">
            Prince George's
          </div>
          <div className="px-25 text-5xl mt-2 font-bold flex justify-center">
            County &
          </div>
          <div className="px-20 text-5xl mt-2 font-bold flex justify-center">
            Surrounding Areas
          </div>
          <div className="text-3xl mt-5">For Installation and Repair</div>
          <div className="text-2xl mt-2">Call Us Today!</div>
          <div className="text-2xl">(301) 820 - 5182</div>
          <RequestAppointmentButton classes='mt-5 text-black' />
        </div>
        <div className="bg-yellow-200 w-2/3">
          {/* a wide ac picture */}
          <img
            src="/images/hvac.webp"
            alt="hvac"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="h-50 my-10 w-full flex flex-row justify-around">
        <div></div>
        <img src="/images/hvac1.png" alt="hvac1" className="h-40 w-40" />
        <img src="/images/hvac2.png" alt="hvac2" className="h-40 w-40" />
        <img src="/images/hvac1.png" alt="hvac3" className="h-40 w-40" />
        <div></div>
      </div>
      <PictureComponent />
    </>
  );
}

export default Dashboard;
