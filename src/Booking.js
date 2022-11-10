import React from "react";
import BookingForm from "./BookingForm";

export function Booking() {
  return (
    <div>
      <BookingForm />
      <img
        className="BookingImg"
        src="./lockerRoom.jpg"
        alt="Empty locker room with two benches in the middle."
      />
    </div>
  );
}

export default Booking;
