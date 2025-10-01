import React from "react";
import { Modal } from "react-bootstrap";

const NotificationAdd = () => {
  return (
    <Modal show={true} className="ModalBox">
      <Modal.Body>
        <div className="Category">
          <button className="CloseModal" onClick={onClose}>
            ×
          </button>
          <h3>{title}</h3>
          <div className="form-group">
            <label>Notification Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter role name"
            />
          </div>
          <button className="Button" onClick={onConfirm}>
            {" "}
            Add Role
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationAdd;
