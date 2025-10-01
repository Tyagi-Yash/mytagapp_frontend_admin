import React from "react";
import image from "../assets/images/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <h6>Logo</h6>
      </div>
      <div className="Navigation">
        <div className="Avater">
          <a href="javascript:void(0);">
            <figure>
              <img src={image} />
            </figure>
            Admin
          </a>
          <ul>
            <li>
              <figure>
                <img src={image} />
              </figure>
              <h4>
                Admin <span>Administrator</span>
              </h4>
            </li>
            <li>
              <Link>
                <span>
                  <i className="fa fa-sign-out" />
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Header;
