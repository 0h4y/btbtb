import React from "react";
import BookingForm from "./BookingForm";
import BookingsList from "./components/BookingsList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Booking() {
  const [bookingInfo, setBookingInfo] = useState([
    {
      id: "",
      email: "",
      date: "",
      fromTime: "",
      toTime: "",
      comments: [],
    },
  ]);
  const { bookingsId } = useParams();

  useEffect(() => {
    const loadBookingInfo = async () => {
      const response = await axios.get(`/api/booking/`);

      const newBookingInfo = response.data;

      console.log(newBookingInfo);
      setBookingInfo(newBookingInfo);
    };

    loadBookingInfo();
  }, []);

  return (
    <div
      className="p-5"
      style={{
        backgroundImage: `url("./lockerRoom.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="mt-5">
        <div className="card">
          <BookingsList bookings={bookingInfo} />
        </div>
      </div>
      <BookingForm />
    </div>
  );
}

export default Booking;
