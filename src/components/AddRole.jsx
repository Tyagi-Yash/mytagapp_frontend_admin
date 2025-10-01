import React from "react";
import Modal from "react-bootstrap/Modal";

// const AddRole = ({ title, form, onInputChange, onConfirm, onClose }) => {
//   return (
//     <Modal show={true} className="ModalBox">
//       <Modal.Body>
//         <div className="Category">
//           <button className="CloseModal" onClick={onClose}>
//             ×
//           </button>
//           <h3>{title}</h3>
//           <form onSubmit={onConfirm}>
//             <div className="form-group">
//               <label>Role Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="roleName"
//                 value={form.roleName}
//                 onChange={onInputChange}
//                 placeholder="Enter role name"
//               />
//             </div>
//             <button type="submit" className="Button">
//               {" "}
//               Add Role
//             </button>
//           </form>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

const AddRole = ({ title, form, onInputChange, onConfirm, onClose }) => {
  return (
    <Modal show={true} className="ModalBox">
      <Modal.Body>
        <div className="Category">
          <button className="CloseModal" onClick={onClose}>
            ×
          </button>
          <h3>{title}</h3>
          <form onSubmit={onConfirm}>
            <div className="form-group">
              <label>Select Role Type</label>
              <select
                className="form-control"
                name="roleName"
                value={form.roleName}
                onChange={onInputChange}
              >
                <option value="">-- Select Role --</option>
                <option value="admin">Admin</option>
                <option value="sub_admin">Sub_Admin</option>
                <option value="manager">Manager</option>
                <option value="super_visior">Super_Visor</option>
              </select>
            </div>
            <button type="submit" className="Button">
              Add Role
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddRole;
