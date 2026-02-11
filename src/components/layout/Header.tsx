import administrator from "../../assets/images/administrator.png";
import logo from "../../assets/images/konnect logo.png";
import { useState } from "react";
import Logout from "./Logout";

export default function Header() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <div className="Header">
      <div className="Logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="Navigation">
        <div className="Avater">
          <button>
            <figure>
              <img src={administrator} alt="avatar" />
            </figure>
            Admin
          </button>
          <ul>
            <li>
              <figure>
                <img src={administrator} alt="avatar" />
              </figure>
              <h4>
                Admin <span>Administrator</span>
              </h4>
            </li>
            <li>
              <button onClick={() => setIsLogoutModalOpen(true)}>
                <span>
                  <i className="fa fa-sign-out" />
                </span>
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
      {isLogoutModalOpen && <Logout onClose={() => setIsLogoutModalOpen(false)} />}
    </div>
  );
}
