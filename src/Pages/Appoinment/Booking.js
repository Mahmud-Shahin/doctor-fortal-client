import React from "react";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className=" text-secondary text-xl font-bold ">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
              No slot available. try another day
            </span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-secondary text-white uppercase "
            onClick={() => setTreatment(booking)}
            disabled={slots.length === 0}
          >
            book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;
