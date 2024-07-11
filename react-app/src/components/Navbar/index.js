import React from "react";
import { useSelector } from "react-redux";
import RequestAppointmentButton from "../RequestAppointmentButton";
import PictureComponent from "../PictureComponent";

function Navbar({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="w-full h-40 grid grid-cols-2 items-center">
      <div className="ml-20">
        <img src="/images/Major-logo.png" className="w-50 h-40" alt="logo" />
      </div>

      <div className="flex justify-end items-center space-x-4 p-4">
        <div className="flex flex-col text-center">
          <div>Call Today!</div>
          <div>(301) 820 - 5182</div>
        </div>
        <RequestAppointmentButton classes='mr-20' />
      </div>
    </div>
  );
}

export default Navbar;
