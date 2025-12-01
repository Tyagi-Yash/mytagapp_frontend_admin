import AppRoutes from "./app/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="app-root">
      <div className="main-content">
        <AppRoutes />
        <ToastContainer position="top-right" autoClose={2500} />
      </div>
    </div>
  );
}
