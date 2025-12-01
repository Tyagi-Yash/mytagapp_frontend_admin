import { useState, type FormEvent } from "react";
import { useLoginMutation } from "./authApi";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setAuth } from "./authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import mailLogo from "../../assets/images/mail.svg";
import lockLogo from "../../assets/images/lock.svg";
import eyeSlashLogo from "../../assets/images/eye-slash.svg";
import eyeLogo from "../../assets/images/eye-icon.svg";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setAuth({ token: res.token, user: res.user }));
      localStorage.setItem("token", res.token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Login failed:", err);
      const message = err?.data?.message || "Invalid email or password";
      toast.error(message);
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label>Email ID</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter Email ID"
          required
        />
        <span className="Icon">
          <img src={mailLogo} alt="email" />
        </span>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPwd ? "text" : "password"}
          className="form-control"
          placeholder="Enter Password"
          required
        />
        <span className="Icon">
          <img src={lockLogo} alt="password" />
        </span>

        <span className="icon" onClick={() => setShowPwd(!showPwd)} style={{ cursor: "pointer" }}>
          <img src={showPwd ? eyeLogo : eyeSlashLogo} width="20px" alt="toggle password" />
        </span>
      </div>

      <div className="Checkboxs">
        <label>&nbsp;</label>
        <Link to="/login-forgot">Forgot password?</Link>
      </div>

      <button className="Login" type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
}
