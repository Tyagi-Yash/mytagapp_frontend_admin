import Modal from "react-bootstrap/Modal";

export default function ConfirmModal({
  title = "Confirm Action",
  message = "Are you sure?",
  onClose,
  onConfirm,
}: {
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <Modal show={true} className="ModalBox">
      <Modal.Body>
        <div className="Decline">
          <button className="CloseModal" onClick={onClose} aria-label="Close">
            ×
          </button>
          <h3>{title}</h3>
          <p>{message}</p>
          <h4>
            <button
              className="Button"
              onClick={() => {
                onConfirm();
              }}
            >
              Yes
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
