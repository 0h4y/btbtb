import React from "react";

const BookingsList = ({ bookings }) => (
  <>
    <h3>Bokningar:</h3>
    {bookings.map((booking) => (
      <div className="" key={booking.id}>
        <p>{booking.email}</p>
      </div>
    ))}
  </>
);

export default BookingsList;
