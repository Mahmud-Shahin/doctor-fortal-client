import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Booking from "./Booking";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppoinment = ({ date }) => {
  // const [bookings, setBookings] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "pp");
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setBookings(data));
  // }, [formattedDate]);

  return (
    <div>
      <h3 className="text-xl text-secondary text-center">
        Available Appoinment on {format(date, "PP")}
      </h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {bookings?.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            setTreatment={setTreatment}
          ></Booking>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinment;
