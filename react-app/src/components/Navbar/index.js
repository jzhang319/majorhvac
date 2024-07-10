import React from "react";
import { useSelector } from "react-redux";
import RequestAppointmentButton from "../RequestAppointmentButton";

function Navbar({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="w-full h-40 grid grid-cols-2 items-center">
      <div className="text-gray-700 p-4 text-2xl">Major HVAC</div>

      <div className="flex justify-end items-center space-x-4 p-4">
        <div className="flex flex-col text-center">
          <div>Call Today!</div>
          <div>(301) 820 - 5182</div>
        </div>
        <RequestAppointmentButton />
      </div>
    </div>
  );
}

export default Navbar;
