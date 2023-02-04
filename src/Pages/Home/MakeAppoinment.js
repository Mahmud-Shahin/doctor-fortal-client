import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appoinment})` }}
      className="flex justify-center items-center mt-12"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary">Appoinment</h3>
        <h2 className="text-3xl text-white py-5"> make an appoinment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          iste fugit obcaecati quo earum sint quasi error quae doloremque alias
          eum repellendus excepturi dicta, quibusdam fuga rem omnis odit.
          Exercitationem? Tenetur obcaecati eveniet ipsa ex nam nihil iure
          excepturi soluta. Soluta nesciunt excepturi odit, totam hic itaque cum
          ipsam culpa quam asperiores, aliquam provident. Minima at cumque
          ducimus maxime doloribus. Doloribus iure ipsa voluptatibus est maiores
          eos totam, quibusdam reiciendis magnam deserunt aliquam dolores. Esse
          ab, omnis impedit veritatis cupiditate quis voluptates dolor, et
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
