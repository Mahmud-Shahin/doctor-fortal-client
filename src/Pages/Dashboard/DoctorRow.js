import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, speciality, img, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        {" "}
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>{" "}
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
