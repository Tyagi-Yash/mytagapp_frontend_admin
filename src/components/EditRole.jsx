import React from "react";
import Modal from "react-bootstrap/Modal";

const EditRole = ({ title, onConfirm, onClose }) => {
  return (
    <Modal show={true} className="ModalBox">
      <Modal.Body>
        <div className="Category">
          <button className="CloseModal" onClick={onClose}>
            ×
          </button>
          <h3>{title}</h3>
          <div className="form-group">
            <label>Role Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter role name"
            />
          </div>
          <button className="Button" onClick={onConfirm}>
            {" "}
            Update
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditRole;
