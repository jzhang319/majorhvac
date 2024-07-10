import React from "react";
import { useSelector } from "react-redux";

function Navbar({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="w-full h-40 flex items-center justify-between">
      <div className="text-gray-700 p-4 text-2xl">Major HVAC</div>
      {/* <div>
        <button className="rounded-full px-3 bg-yellow-500 hover:bg-yellow-700 text-white">New Picture</button>
      </div> */}
      {isLoaded && sessionUser && (
        <div className="text-gray-700 p-2">Welcome, {sessionUser.username}</div>
      )}
    </div>
  );
}

export default Navbar;
