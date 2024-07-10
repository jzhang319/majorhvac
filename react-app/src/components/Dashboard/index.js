import React from "react";
import PictureComponent from "../PictureComponent";

function Dashboard() {
  return (
    <>
      <div className="w-full  h-1/2-screen flex">
        <div className="bg-blue-500 w-1/3 text-white flex flex-col justify-center items-center">
          <div className="px-25 text-5xl font-bold">AC Installation in</div>
          <div className="px-25 text-5xl font-bold">
            Prince George's County & Surrounding Areas
          </div>
          <div className="text-2xl mt-5">For Installation and Repair</div>
          <div className="text-2xl mt-5">Call Us Today!</div>
          <div className="text-2xl">(301) 362-2288</div>
        </div>
        <div className="bg-yellow-200 w-2/3">a wide ac picture</div>
      </div>
      <div className="h-50 w-full bg-red-300">3 big icons</div>
      <PictureComponent />
    </>
  );
}

export default Dashboard;
