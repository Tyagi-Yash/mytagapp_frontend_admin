import React from "react";
import DeleteModal from "../../components/DeleteModal";
// import LogoutModal from "../../components/LogoutModal";

const Notification = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Notification Management</h4>
            <a
              className="TitleLink"
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#NotificationAdd"
            >
              Add New Notification
            </a>
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
                <div className="form-group">
                  <label>From Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>To Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>&nbsp;</label>
                  <button className="Button">Apply</button>
                  <button className="Button Cancel">
                    <i className="fa fa-refresh" />
                  </button>
                </div>
              </div>
              <div className="FilterRight">
                <div className="form-group">
                  <label>Timeframe</label>
                  <select className="form-control">
                    <option>Select </option>
                    <option value="Today">Today</option>
                    <option value="Week">This Week</option>
                    <option value="Month">This Month</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="TableList">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Notification Title</th>
                  <th>Notification Type</th>
                  <th>Sent To</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Notification title</td>
                  <td>Warning message</td>
                  <td>All</td>
                  <td>
                    <div className="Actions">
                      <a
                        href="javascript:void(0);"
                        className="Green"
                        data-bs-toggle="modal"
                        data-bs-target="#NotificationEdit"
                      >
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                      <a className="Blue" href="notification-details.html">
                        <i className="fa-regular fa-eye" />
                      </a>
                      <a
                        className="Red"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#NotificationDelete"
                      >
                        <i className="fa-solid fa-trash" />
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
        <div id="NotificationAdd" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="Category">
                  <a
                    href="javascript:void(0);"
                    className="CloseModal"
                    data-bs-dismiss="modal"
                  >
                    ×
                  </a>
                  <h3>Add New Notification</h3>
                  <div className="form-group">
                    <label>Notification Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter notification title"
                    />
                  </div>
                  <div className="form-group">
                    <label>Notification Content </label>
                    <textarea
                      className="form-control"
                      rows={6}
                      placeholder="Write here.."
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Notification Type</label>
                    <select className=" form-control ">
                      <option>warning message</option>
                      <option>general notification</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>User Type</label>
                    <select className=" form-control ">
                      <option>Select</option>
                      <option>all users</option>
                      <option>specific users</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter user name"
                    />
                  </div>
                  <ul className="multiUsers">
                    <li>
                      Username <i className="fa-solid fa-xmark" />
                    </li>
                    <li>
                      Username <i className="fa-solid fa-xmark" />
                    </li>
                  </ul>
                  <button className="Button" data-bs-dismiss="modal">
                    Add Notification
                  </button>
                  <button className="Button Cancel" data-bs-dismiss="modal">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="NotificationEdit" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="Category">
                  <a
                    href="javascript:void(0);"
                    className="CloseModal"
                    data-bs-dismiss="modal"
                  >
                    ×
                  </a>
                  <h3>Edit Notification</h3>
                  <div className="form-group">
                    <label>Notification Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter notification title"
                    />
                  </div>
                  <div className="form-group">
                    <label>Notification Content </label>
                    <textarea
                      className="form-control"
                      rows={6}
                      placeholder="Write here.."
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Notification Type</label>
                    <select className=" form-control ">
                      <option>warning message</option>
                      <option>general notification</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>User Type</label>
                    <select className=" form-control ">
                      <option>Select</option>
                      <option>all users</option>
                      <option>specific users</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter user name"
                    />
                  </div>
                  <ul className="multiUsers">
                    <li>
                      Username <i className="fa-solid fa-xmark" />
                    </li>
                    <li>
                      Username <i className="fa-solid fa-xmark" />
                    </li>
                  </ul>
                  <button className="Button" data-bs-dismiss="modal">
                    Update
                  </button>
                  <button className="Button Cancel" data-bs-dismiss="modal">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeleteModal
          id="NotificationDelete"
          title="Delete"
          message="Are you sure you want to delete this Notification?"
          onConfirm={() => console.log("Notif Deleted")}
        />
      </div>
    </>
  );
};

export default Notification;
