import React from "react";
import { Link } from "react-router-dom";
import successImage from "../../assets/images/Success.png";

const LoginSuccess = () => {
  return (
    <>
      <div className="LoginArea">
        <div className="LoginBox">
          <div className="SuccessBox">
            <aside>
              <span>
                <img src={successImage} />
              </span>
              <h3>Congratulation! </h3>
              <h5>You are finally in!</h5>
              <Link to="/dashboard">Continue to Login</Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSuccess;
