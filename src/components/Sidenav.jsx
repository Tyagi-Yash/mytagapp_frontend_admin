import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="SidenavBar">
      <ul>
        <li style={{ textDecoration: "none" }}>
          <NavLink to="/dashboard">
            <span>
              <i className="fa-solid fa-gauge" />
            </span>{" "}
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <span>
              <i className="fa-solid fa-users" />
            </span>{" "}
            User Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/market">
            <span>
              <i className="fa-solid fa-store" />
            </span>{" "}
            Marketplace Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/job">
            <span>
              <i className="fa-solid fa-user-doctor" />
            </span>{" "}
            Job Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/event">
            <span>
              <i className="fa fa-industry" />
            </span>{" "}
            Event Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/subadmin-manage">
            <span>
              <i className="fa-solid fa-users" />
            </span>{" "}
            Sub-Admin Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <span>
              <i className="fa-solid fa-bell" />
            </span>{" "}
            Notification
          </NavLink>
        </li>
        <li>
          <Link
          // href="javascript:void(0);"
          // data-bs-toggle="modal"
          // data-bs-target="#logOutModal"
          >
            <span>
              <i className="fa fa-sign-out" />
            </span>{" "}
            logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
