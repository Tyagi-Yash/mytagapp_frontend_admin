import React from "react";
import DeleteModal from "../../components/DeleteModal";
// import LogoutModal from "../../components/LogoutModal";

const Job = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Job Management</h4>
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
                  <label>Job Type</label>
                  <select className="form-control">
                    <option>select</option>
                    <option>part time</option>
                    <option>full time</option>
                    <option>internship</option>
                  </select>
                </div>
                <div className="form-group" style={{ width: 175 }}>
                  <label>Job Status</label>
                  <select className="form-control">
                    <option>select</option>
                    <option>active jobs</option>
                    <option>inactive jobs</option>
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
                  <th>Job Name</th>
                  <th>Company name</th>
                  <th>Posted On</th>
                  <th>Type</th>
                  <th>Budget </th>
                  <th>Openings</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>UX Designer</td>
                  <td>ABC Solutions</td>
                  <td>24-04-2025</td>
                  <td>Full Time</td>
                  <td>6 LPA</td>
                  <td>3</td>
                  <td>
                    <span className="Green">Active </span>
                  </td>
                  <td>
                    <div className="Actions">
                      <label className="Switch">
                        <input type="checkbox" />
                        <span className="slider" />
                      </label>
                      <a className="Blue" href="job-details.html">
                        <i className="fa-regular fa-eye" />
                      </a>
                      <a className="Green" href="business-partner-edit.html">
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                      <a
                        className="Red"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#DeleteModal"
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
        <DeleteModal
          id="DeleteModal"
          title="Delete"
          message="Are you sure you want to delete this Job?"
          onConfirm={() => console.log("User Deleted")}
        />
      </div>
    </>
  );
};

export default Job;
