import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import logoutImg from "../../assets/images/logout.svg";
import { useDispatch } from "react-redux";
import { clearAuth } from "../../features/auth/authSlice";

export default function Logout({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearAuth());
    navigate("/login", { replace: true });
  };
  return (
    <Modal show={true} className="ModalBox">
      <Modal.Body>
        <div className="logOutArea">
          <button className="CloseModal" onClick={onClose} aria-label="Close">
            ×
          </button>
          <span>
            <img src={logoutImg} alt="logout" />
          </span>
          <h3>LogOut</h3>
          <p>Are you sure you want to Log out ?</p>
          <h4>
            <button className="Button" onClick={handleLogout}>
              Yes, Logout
            </button>
            <button className="Button Cancel" onClick={onClose}>
              No
            </button>
          </h4>
        </div>
      </Modal.Body>
    </Modal>
  );
}
