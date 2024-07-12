import React from "react";
// import { useSelector } from "react-redux";
import RequestAppointmentButton from "../RequestAppointmentButton";

function Navbar({ isLoaded }) {
  // const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="w-full h-40 grid grid-cols-2 items-center md:px-5 lg:px-15">
      <div className="">
        <img src="/images/Major-logo.png" className="w-50 h-35" alt="logo" />
      </div>

      <div className="flex flex-row justify-end items-center space-x-4 p-4 ">
        <div className="flex flex-col text-center lg:block">
          <div className="font-thin text-xl sm:font-normal md:font-thin md:text-2xl lg:text-xl lg:font-thin">Call Today!</div>
          <div className="text-blue-700 font-bold md:text-2xl lg:text-xl">(301) 820 - 5182</div>
        </div>
        <div >
          <RequestAppointmentButton classes="sm:hidden md:hidden lg:block" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
