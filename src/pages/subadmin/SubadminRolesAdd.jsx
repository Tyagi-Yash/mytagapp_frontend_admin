import React from "react";

const SubadminRolesAdd = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Add Sub Admin</h4>
            <a href="sub-admin-roles.html" className="TitleLink Back">
              Back
            </a>
          </div>
          <div className="Small-Wrapper">
            <div className="TitleBox">
              <h4 className="Title">Full Name</h4>
            </div>
            <div className="CommonForm">
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Select Role</label>
                    <select className="form-control">
                      <option>select</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Create Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
              </div>
              <h4>Sub Admin Rights Access</h4>
            </div>
            <div className="StaticArea">
              <div id="accordion">
                <div className="card">
                  <div
                    className="card-header"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse1"
                    aria-expanded="false"
                  >
                    <h4>User Management</h4>
                    {/* <a href="content-edit.html">
                              <i class="fa fa-pencil"></i>
                          </a> */}
                  </div>
                  <div id="collapse1" className="panel-collapse collapse in">
                    <div className="card-body">
                      <div className="AdminAccess">
                        <table className="table">
                          <thead>
                            <tr>
                              <th />
                              <th width="150px">Read</th>
                              <th width="150px">Full Access</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Dashboard</strong>
                              </td>
                              <td>
                                <div className="Read">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-regular fa-eye" />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="Access">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-solid fa-lock" />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse2"
                    aria-expanded="false"
                  >
                    <h4>Market Place Management</h4>
                    {/* <a href="content-edit.html">
                              <i class="fa fa-pencil"></i>
                          </a> */}
                  </div>
                  <div id="collapse2" className="panel-collapse collapse in">
                    <div className="card-body">
                      <div className="AdminAccess">
                        <table className="table">
                          <thead>
                            <tr>
                              <th />
                              <th width="150px">Read</th>
                              <th width="150px">Full Access</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Dashboard</strong>
                              </td>
                              <td>
                                <div className="Read">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-regular fa-eye" />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="Access">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-solid fa-lock" />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse3"
                    aria-expanded="false"
                  >
                    <h4>Market Place Management</h4>
                    {/* <a href="content-edit.html">
                              <i class="fa fa-pencil"></i>
                          </a> */}
                  </div>
                  <div id="collapse3" className="panel-collapse collapse in">
                    <div className="card-body">
                      <div className="AdminAccess">
                        <table className="table">
                          <thead>
                            <tr>
                              <th />
                              <th width="150px">Read</th>
                              <th width="150px">Full Access</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Dashboard</strong>
                              </td>
                              <td>
                                <div className="Read">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-regular fa-eye" />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="Access">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-solid fa-lock" />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse4"
                    aria-expanded="false"
                  >
                    <h4>Job Management</h4>
                    {/* <a href="content-edit.html">
                              <i class="fa fa-pencil"></i>
                          </a> */}
                  </div>
                  <div id="collapse4" className="panel-collapse collapse in">
                    <div className="card-body">
                      <div className="AdminAccess">
                        <table className="table">
                          <thead>
                            <tr>
                              <th />
                              <th width="150px">Read</th>
                              <th width="150px">Full Access</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Dashboard</strong>
                              </td>
                              <td>
                                <div className="Read">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-regular fa-eye" />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="Access">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-solid fa-lock" />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse5"
                    aria-expanded="false"
                  >
                    <h4>Event Management</h4>
                    {/* <a href="content-edit.html">
                              <i class="fa fa-pencil"></i>
                          </a> */}
                  </div>
                  <div id="collapse5" className="panel-collapse collapse in">
                    <div className="card-body">
                      <div className="AdminAccess">
                        <table className="table">
                          <thead>
                            <tr>
                              <th />
                              <th width="150px">Read</th>
                              <th width="150px">Full Access</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Dashboard</strong>
                              </td>
                              <td>
                                <div className="Read">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-regular fa-eye" />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="Access">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-solid fa-lock" />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse5"
                    aria-expanded="false"
                  >
                    <h4>Sub-Admin Management</h4>
                    {/* <a href="content-edit.html">
                              <i class="fa fa-pencil"></i>
                          </a> */}
                  </div>
                  <div id="collapse5" className="panel-collapse collapse in">
                    <div className="card-body">
                      <div className="AdminAccess">
                        <table className="table">
                          <thead>
                            <tr>
                              <th />
                              <th width="150px">Read</th>
                              <th width="150px">Full Access</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Dashboard</strong>
                              </td>
                              <td>
                                <div className="Read">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-regular fa-eye" />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="Access">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-solid fa-lock" />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse6"
                    aria-expanded="false"
                  >
                    <h4>Notification Management</h4>
                    {/* <a href="content-edit.html">
                              <i class="fa fa-pencil"></i>
                          </a> */}
                  </div>
                  <div id="collapse6" className="panel-collapse collapse in">
                    <div className="card-body">
                      <div className="AdminAccess">
                        <table className="table">
                          <thead>
                            <tr>
                              <th />
                              <th width="150px">Read</th>
                              <th width="150px">Full Access</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Dashboard</strong>
                              </td>
                              <td>
                                <div className="Read">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-regular fa-eye" />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="Access">
                                  <input type="checkbox" />
                                  <span>
                                    <i className="fa-solid fa-lock" />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="Button mt-3" id="saveChanges">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubadminRolesAdd;
