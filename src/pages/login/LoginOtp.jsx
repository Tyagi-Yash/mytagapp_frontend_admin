import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { useDispatch } from "react-redux";

const LoginOtp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="LoginArea">
        <div className="LoginBox">
          <div className="LoginLeft">
            <h2>Logo</h2>
            <h3>
              <span>Check your email!</span>
            </h3>
            <h4>
              We have sent an account verification email to{" "}
              <strong>xyz@gmail.com</strong>
            </h4>
            <h4>
              Please click the link in the email in order to change password of
              your account and continue.
            </h4>
            <h4>You can close this page now.</h4>
            <div className="Checkboxs text-center">
              <label>&nbsp;</label>
              {/* <label class="CheckBox">Remember Me 
                                      <input type="checkbox">
                                      <span class="checkmark"></span>
                                  </label> */}
              <Link to="/login-resend" style={{ float: "none" }}>
                Resend Verification Email
              </Link>
            </div>
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

export default LoginOtp;
