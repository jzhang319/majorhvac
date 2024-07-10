import React from "react";

function RequestAppointmentButton({ classes }) {
  return (
    <button className={`w-50 bg-yellow-400 rounded-lg text-2xl px-10 h-15 ${classes}`}>
      Request an Appointment
    </button>
  );
}

export default RequestAppointmentButton;
