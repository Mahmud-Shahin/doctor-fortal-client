import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  gap-4  ">
      <InfoCard
        cardTitle="opening hours"
        bgClass="bg-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our location"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us"
        bgClass="bg-secondary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
