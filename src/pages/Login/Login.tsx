import LoginForm from "../../features/auth/LoginForm";
import logo from "../../assets/images/konnect logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="LoginArea">
      <div className="LoginBox">
        <div className="LoginLeft">
          <img src={logo} alt="logo" />
          <h3>
            <span>Login your account</span>
          </h3>
          <h4>
            Enter your email address and password
            <br />
            to access admin panel.
          </h4>
          <LoginForm />
          <div className="LoginLegalLinks">
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <span className="divider">•</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
