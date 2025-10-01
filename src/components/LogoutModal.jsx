import React from "react";
import { Link } from "react-router-dom";

const LogoutModal = ({ id, onConfirm }) => {
  return (
    <div id={id} className="modal fade smallModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="logOutArea">
              <a
                href="javascript:void(0);"
                className="CloseModal"
                data-bs-dismiss="modal"
              >
                ×
              </a>
              <span>
                <img src="assets/images/logout.svg" alt="img" />
              </span>
              <h3>LogOut</h3>
              <p>Are you sure you want to Log out ?</p>
              <h4>
                <Link to="/" className="Button" onClick={onConfirm}>
                  Yes, Logout
                </Link>
                <Link
                  href="javascript:void(0);"
                  data-bs-dismiss="modal"
                  className="Button Cancel"
                >
                  no
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
