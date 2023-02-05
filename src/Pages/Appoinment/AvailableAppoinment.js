import { format } from "date-fns";
import React from "react";

const AvailableAppoinment = ({ date }) => {
  return (
    <div>
      <h3 className="text-xl text-secondary text-center">
        Available Appoinment on {format(date, "PP")}
      </h3>
    </div>
  );
};

export default AvailableAppoinment;
