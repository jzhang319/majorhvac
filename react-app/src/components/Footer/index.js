import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full px-10 flex justify-between items-center bg-slate-200">
        <div className="py-6">
          <img src="/images/Major-logo.png" className="w-60 h-35" alt="logo" />
          <p className=" text-gray-600 ml-7">Laurel, Maryland</p>
        </div>

        <div className="flex flex-row justify-end items-center">
          <div className="text-blue-700 font-bold">301-820-5182</div>
        </div>
      </div>
      <div className="w-full py-2 bg-gray-800">
        <p className="text-white text-center py-2">
          © 2021 Major HVAC. All rights reserved. / Digital Solution built by Modern Technology LLC
        </p>
      </div>
    </>
  );
}

export default Footer;
