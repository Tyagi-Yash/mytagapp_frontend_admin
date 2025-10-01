import React from "react";
import { Modal } from "react-bootstrap";

const AddMarketCategory = ({ title, onConfirm, onClose }) => {
  return (
    <Modal show={true} className="ModalBox">
      <Modal.Body>
        <div className="Category">
          <button className="CloseModal" onClick={onClose}>
            ×
          </button>
          <h3>{title}</h3>
          <div className="form-group">
            <label>Product Category Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product category name"
            />
          </div>
          <button className="Button" onClick={onConfirm}>
            {" "}
            Add Category
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddMarketCategory;
