import React, { useState } from "react";
import mailLogo from "../../assets/images/mail.svg";
import lockLogo from "../../assets/images/lock.svg";
import eyeLogo from "../../assets/images/eye-slash.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { authLogin } from "../../reduxToolkit/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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

    const { email, password } = form;

    if (!email.trim() || !password) {
      return toast.error("Email and password are required");
    }
    try {
      const res = await dispatch(authLogin({ email, password }));
      if (res?.payload?.status === 200) {
        toast.success("Logged in successfully");
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <>
      <div className="LoginArea">
        <div className="LoginBox">
          <div className="LoginLeft">
            <h2>Logo</h2>
            <h3>
              <span>Login your account</span>
            </h3>
            <h4>
              Enter your email address and password <br /> to access admin
              panel.
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email ID</label>
                <input
                  type="text"
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
              <div className="form-group">
                <label>Password </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  onChange={handleInput}
                />
                <span className="Icon">
                  <img src={lockLogo} alt="img" />
                </span>
                <span className="icon">
                  <img src={eyeLogo} alt="img" />
                </span>
              </div>
              <div className="Checkboxs">
                <label>&nbsp;</label>
                {/* <label class="CheckBox">Remember Me 
                      <input type="checkbox">
                      <span class="checkmark"></span>
                  </label> */}
                <Link to="/login-forgot">Forgot password?</Link>
              </div>
              <button type="submit" className="Login">
                Log In
              </button>
              {/* <button>Log In <i class="fa fa-sign-in"></i></button> */}
            </form>
          </div>
          <div className="LoginRight">
            <figure>
              <img src="images/Logo.png" />
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

export default Login;
