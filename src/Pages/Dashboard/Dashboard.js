import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../hooks/useAdmin";
import auth from "./../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className="text-3xl text-purple-500">Welcome to my Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appoinment</Link>
          </li>
          <li>
            <Link to="/dashboard/myreview">My Review</Link>
          </li>
          <li>
            <Link to="/dashboard/myhistory">My History</Link>
            {
              <>
                <Link to="/dashboard/users">All users</Link>
                <Link to="/dashboard/addDoctor"> Add a Doctor</Link>
                <Link to="/dashboard/manageDoctor">Manage a doctor </Link>
              </>
            }
            {/* {admin && <Link to="/dashboard/users">All users</Link>} */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
