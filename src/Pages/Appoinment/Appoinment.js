import React from "react";
import Footer from "../Shared/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinment from "./AvailableAppoinment";
import { useState } from "react";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;
