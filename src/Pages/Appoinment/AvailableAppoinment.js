import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Booking from "./Booking";
import BookingModal from "./BookingModal";

const AvailableAppoinment = ({ date }) => {
  const [bookings, setBookings] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h3 className="text-xl text-secondary text-center">
        Available Appoinment on {format(date, "PP")}
      </h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            setTreatment={setTreatment}
          ></Booking>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppoinment;
