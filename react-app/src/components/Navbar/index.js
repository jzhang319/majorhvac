import React from "react";
import { useSelector } from "react-redux";

function Navbar({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="w-full bg-blue-500 h-15 flex items-center">
      <div className="text-white p-2">Major HVAC</div>
      <div>
        <button className="rounded-full px-3 hover:bg-blue-700 text-white">New Picture</button>
      </div>
      {isLoaded && sessionUser && (
        <div className="text-white p-2">Welcome, {sessionUser.username}</div>
      )}
    </div>
  );
}

export default Navbar;
