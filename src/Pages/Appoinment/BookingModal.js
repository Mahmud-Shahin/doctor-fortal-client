import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    //to close the modal
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid grid-cols-1 gap-5 justify-items-center mt-2"
          >
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="phone number"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
