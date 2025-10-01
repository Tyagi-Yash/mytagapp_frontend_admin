import React from "react";
import Modal from "react-bootstrap/Modal";

const DeleteModal = ({ title, message, onConfirm, onClose }) => {
  return (
    <Modal show={true} className="ModalBox">
      <Modal.Body>
        <div className="Decline">
          <a href="#" className="CloseModal" onClick={onClose}>
            ×
          </a>
          <h3>{title}</h3>
          <p>{message}</p>
          <h4>
            <a
              href="javascript:void(0);"
              className="Button Cancel"
              onClick={onClose}
            >
              No
            </a>
            <a
              href="javascript:void(0);"
              className="Button Red"
              data-bs-dismiss="modal"
              onClick={onConfirm}
            >
              Yes
            </a>
          </h4>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
