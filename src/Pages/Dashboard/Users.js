import React from "react";
// import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRaw from "./UserRaw";
// import axios from "axios";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // const [users, setUsers] = useState("");
  // axios.get(`http://localhost:5000/user`).then((res) => setUsers(res.data));
  return (
    <div>
      <h2 className="text-2xl"> All user: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRaw key={user._id} user={user} refetch={refetch}></UserRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
