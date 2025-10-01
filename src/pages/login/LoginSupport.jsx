import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const LoginSupport = () => {
  return (
    <>
      <div className="LoginArea">
        <div className="LoginBox">
          <div className="LoginLeft">
            <h2>Logo</h2>
            <h3>
              <span>Resend Verification Email</span>
            </h3>
            <h4>
              Check your email at <strong>xyz@gmail.com</strong>
            </h4>
            <h4>Make sure you check your SPAM Folder as well</h4>
            <h4>
              If you still don't receive the email, Please email us at{" "}
              <a href="">support@gmail.com</a>
            </h4>
            <Link className="Login" to="/login-reset">
              Close
            </Link>
          </div>
          <div className="LoginRight">
            <figure>
              <img src={logo} />
            </figure>
            <h5>
              Let's Started <span>Huk N Buk</span>
            </h5>
            <h6>To keep connected wit us please login .</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSupport;
