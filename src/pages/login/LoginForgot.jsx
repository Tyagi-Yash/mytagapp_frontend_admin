import React from "react";
import mailLogo from "../../assets/images/mail.svg";
import logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForgot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="LoginArea">
        <div className="LoginBox">
          <div className="LoginLeft">
            <h2>Logo</h2>
            <h3>
              <span>Forgot Password</span>
            </h3>
            <h4>
              No Problem! Just provide your e-mail address and we’ll <br /> send
              you a reset OTP.
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email ID</label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                />
                <span className="Icon">
                  <img src={mailLogo} alt="img" />
                </span>
              </div>
              <Link className="Login" to="/login-otp">
                Submit
              </Link>
              {/* <button>Log In <i class="fa fa-sign-in"></i></button> */}
            </form>
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

export default LoginForgot;
