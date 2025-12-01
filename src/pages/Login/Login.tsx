import LoginForm from "../../features/auth/LoginForm";

export default function Login() {
  return (
    <div className="LoginArea">
      <div className="LoginBox">
        <div className="LoginLeft">
          <h2>Logo</h2>
          <h3>
            <span>Login your account</span>
          </h3>
          <h4>
            Enter your email address and password
            <br />
            to access admin panel.
          </h4>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
