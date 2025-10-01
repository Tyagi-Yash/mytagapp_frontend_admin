import React from "react";
import logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginReset = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
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
              <span>Create New Password</span>
            </h3>
            <h4>No Problem! Enter your new password</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter new password"
                  name="password"
                  value={form.password}
                  onChange={handleInput}
                />
                <span className="Icon">
                  <i className="fa-solid fa-lock" />
                </span>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleInput}
                />
                <span className="Icon">
                  <i className="fa-solid fa-lock" />
                </span>
              </div>
              {/* <button class="Login">Submit</button>  */}
              <Link className="Login" to="/login-success">
                Create Password
              </Link>
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

export default LoginReset;
