import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "80px", marginBottom: "10px", color: "#444" }}>404</h1>

      <h2 style={{ marginBottom: "10px" }}>Page Not Found</h2>

      <p style={{ marginBottom: "20px", color: "#777" }}>
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/dashboard"
        style={{
          padding: "10px 20px",
          background: "#1976d2",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
