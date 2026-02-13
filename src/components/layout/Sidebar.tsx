import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

export default function Sidebar() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <>
      <aside className="SidenavBar">
        <ul>
          <li>
            <NavLink to="/dashboard">
              <span>
                <i className="fa-solid fa-gauge" />
              </span>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/users">
              <span>
                <i className="fa-solid fa-users" />
              </span>
              User Management
            </NavLink>
          </li>

          <li>
            <NavLink to="/content">
              <span>
                <i className="fa-solid fa-users" />
              </span>
              Content Management
            </NavLink>
          </li>

          <li>
            <button>
              {/* <NavLink to="/market"> */}
              <span>
                <i className="fa-solid fa-store" />
              </span>
              Marketplace Management
              {/* </NavLink> */}
            </button>
          </li>

          <li>
            <button>
              {/* <NavLink to="/job"> */}
              <span>
                <i className="fa-solid fa-user-doctor" />
              </span>
              Job Management
              {/* </NavLink> */}
            </button>
          </li>

          <li>
            <button>
              {/* <NavLink to="/event"> */}
              <span>
                <i className="fa fa-industry" />
              </span>
              Event Management
              {/* </NavLink> */}
            </button>
          </li>

          <li>
            <button>
              {/* <NavLink to="/sub-admin"> */}
              <span>
                <i className="fa-solid fa-users" />
              </span>
              Sub-Admin Management
              {/* </NavLink> */}
            </button>
          </li>

          <li>
            <button>
              {/* <NavLink to="/notifications"> */}
              <span>
                <i className="fa-solid fa-bell" />
              </span>
              Notification
              {/* </NavLink> */}
            </button>
          </li>

          <li>
            <button onClick={() => setIsLogoutModalOpen(true)}>
              <span>
                <i className="fa fa-sign-out" />
              </span>
              logout
            </button>
          </li>
        </ul>
      </aside>
      {isLogoutModalOpen && <Logout onClose={() => setIsLogoutModalOpen(false)} />}
    </>
  );
}
