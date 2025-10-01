import React from "react";
//import LogoutModal from "../../components/LogoutModal";

const EventDetails = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Event Details</h4>
            <a href="users.html" className="TitleLink Back">
              Back
            </a>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="InformationBox">
                <h3>Basic Details</h3>
                <div className="Informations">
                  <div className="ProfileInfo">
                    <article>
                      <aside style={{ width: "100%" }}>
                        <p>
                          <strong>User Name </strong>
                          <span>Rahul</span>
                        </p>
                        <p>
                          <strong>Email</strong>
                          <span>abc@gmail.com</span>
                        </p>
                        <p>
                          <strong>Phone Number</strong>
                          <span>+91 8860016301</span>
                        </p>
                        <p>
                          <strong>User Role </strong>
                          <span>lorem ipsum</span>
                        </p>
                      </aside>
                    </article>
                  </div>
                </div>
              </div>
              <div className="InformationBox">
                <h3>User Activity</h3>
                <div className="Informations">
                  <div className="ProfileInfo">
                    <article>
                      <aside style={{ width: "100%" }}>
                        <p>
                          <strong>Number of Events Created</strong>
                          <span>abc</span>
                        </p>
                        <p>
                          <strong>Number of Events Participated</strong>
                          <span>lorem ipsum</span>
                        </p>
                        <p>
                          <strong>Active Events</strong>
                          <span>+91 8860016301</span>
                        </p>
                        <p>
                          <strong>Completed Events </strong>
                          <span>lorem ipsum</span>
                        </p>
                      </aside>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="TitleBox">
                <h4 className="Title">Events</h4>
              </div>
              <div className="TableList whiteSpaceTable">
                <table>
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Event Name</th>
                      <th>Invites Sent</th>
                      <th>Interested</th>
                      <th>Total Participants</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>
                        <span className="Green">Active</span>
                      </td>
                      <td>
                        <div className="Actions">
                          <a className="Red" href="javascript:void(0);">
                            <i className="fa-solid fa-flag" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>
                        <span className="Green">Active</span>
                      </td>
                      <td>
                        <div className="Actions">
                          <a className="Red" href="javascript:void(0);">
                            <i className="fa-solid fa-flag" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>
                        <span className="Green">Active</span>
                      </td>
                      <td>
                        <div className="Actions">
                          <a className="Red" href="javascript:void(0);">
                            <i className="fa-solid fa-flag" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>lorem ipsum</td>
                      <td>
                        <span className="Green">Active</span>
                      </td>
                      <td>
                        <div className="Actions">
                          <a className="Red" href="javascript:void(0);">
                            <i className="fa-solid fa-flag" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="paginationMain">
                <select className="form-control">
                  <option selected="">Show 30 items per page</option>
                </select>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
