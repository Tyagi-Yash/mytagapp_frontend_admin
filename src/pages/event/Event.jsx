import React from "react";
import DeleteModal from "../../components/DeleteModal";
//import LogoutModal from "../../components/LogoutModal";

const Event = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Event Management</h4>
          </div>
          <div className="Small-Wrapper">
            <div className="FilterArea">
              <div className="FilterLeft">
                <div className="form-group">
                  <label>Search</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
                <div className="form-group" style={{ width: 175 }}>
                  <label>User Role</label>
                  <select className="form-control">
                    <option>select</option>
                    <option>company</option>
                    <option>school</option>
                    <option>college</option>
                    <option>professional</option>
                    <option>student</option>
                  </select>
                </div>
                <div className="form-group" style={{ width: 175 }}>
                  <label>Sort By</label>
                  <select className="form-control">
                    <option>select</option>
                    <option>active</option>
                    <option>completed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>&nbsp;</label>
                  <button className="Button">Apply</button>
                  <button className="Button Cancel">
                    <i className="fa-solid fa-arrows-rotate" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="TableList">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>User Name</th>
                  <th>Total Events</th>
                  <th>Active Events</th>
                  <th>Completed Events</th>
                  <th>User Role </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rahul</td>
                  <td>15</td>
                  <td>11</td>
                  <td>15</td>
                  <td>Company</td>
                  <td>
                    <div className="Actions">
                      <label className="Switch">
                        <input type="checkbox" />
                        <span className="slider" />
                      </label>
                      <a className="Blue" href="event-details.html">
                        <i className="fa-regular fa-eye" />
                      </a>
                      <a
                        className="Red"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#DeleteModal"
                      >
                        <i className="fa-solid fa-trash" />
                      </a>
                      <a className="approveBtn" href="javascript:void(0);">
                        Approve
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <a href="#">Prev</a>
            <a href="#">1</a>
            <a href="#" className="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">Next</a>
          </div>
        </div>
      </div>
      <div className="ModalBox">
        <DeleteModal
          id="DeleteModal"
          title="Delete"
          message="Are you sure you want to delete this event?"
          onConfirm={() => console.log("User Deleted")}
        />
      </div>
    </>
  );
};

export default Event;
