import React from "react";

const CompanyUser = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">User Details</h4>
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
                    <div className="Top">
                      <h4>
                        Connections : <span>100</span>
                      </h4>
                      <h4 className="ms-5">
                        Followers : <span>100</span>
                      </h4>
                    </div>
                    <article>
                      <aside style={{ width: "100%" }}>
                        <p>
                          <strong>Institute Name</strong>
                          <span>lorem Ipsum</span>
                        </p>
                        <p>
                          <strong>Location</strong>
                          <span>Noida</span>
                        </p>
                        <p>
                          <strong>Industry Name</strong>
                          <span>Production</span>
                        </p>
                        <p>
                          <strong>Phone (Public)</strong>
                          <span>+91 8860016301</span>
                        </p>
                        <p>
                          <strong>Email Address (Public) </strong>
                          <span>rahul@gmail.com</span>
                        </p>
                      </aside>
                    </article>
                  </div>
                </div>
              </div>
              <div className="InformationBox">
                <h3>Socials</h3>
                <div className="Informations">
                  <div className="ProfileInfo">
                    <article>
                      <aside style={{ width: "100%" }}>
                        <p>
                          <strong>
                            <i
                              className="fa-brands fa-linkedin"
                              style={{ fontSize: 16 }}
                            />{" "}
                            User Name
                          </strong>
                          <span>
                            <a href="https://www.facebook.com/">@rahul</a>
                          </span>
                        </p>
                        <p>
                          <strong>
                            <i
                              className="fa-brands fa-instagram"
                              style={{ fontSize: 16 }}
                            />{" "}
                            User Name
                          </strong>
                          <span>
                            <a href="https://www.facebook.com/">@rahul</a>
                          </span>
                        </p>
                        <p>
                          <strong>
                            <i
                              className="fa-solid fa-web-awesome"
                              style={{ fontSize: 16 }}
                            />{" "}
                            Website Link
                          </strong>
                          <span>
                            <a href="www.google.com">www.google.com</a>
                          </span>
                        </p>
                      </aside>
                    </article>
                  </div>
                </div>
              </div>
              <div className="InformationBox">
                <h3>Verification Details</h3>
                <div className="Informations">
                  <div className="ProfileInfo">
                    <article>
                      <aside style={{ width: "100%" }}>
                        <p className="d-flex">
                          <strong>Affiliation/Recognition Letter</strong>
                          <span>abc</span>
                        </p>
                        <p>
                          <strong>NOC Certificate</strong>
                          <span>abc</span>
                        </p>
                      </aside>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="UserMultipleArea">
                <div id="accordion">
                  <div className="card">
                    <div
                      className="card-header"
                      data-bs-toggle="collapse"
                      data-bs-parent="#accordion"
                      href="#collapse2"
                      aria-expanded="false"
                    >
                      <h4>Verifications</h4>
                      {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                    </div>
                    <div id="collapse2" className="panel-collapse collapse in">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="InformationBox">
                              <h3>GST Document</h3>
                              <div className="Informations DocumnetInfo">
                                <div className="ProfileInfo">
                                  <article>
                                    <aside style={{ width: "100%" }}>
                                      <div className="DocumnetBox">
                                        <figcaption>
                                          <span>
                                            <img src="https://mobulous.co.in/just-clubbing/assets/images/driving.png" />
                                          </span>
                                        </figcaption>
                                      </div>
                                    </aside>
                                  </article>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="InformationBox">
                              <h3>TAN Document</h3>
                              <div className="Informations DocumnetInfo">
                                <div className="ProfileInfo">
                                  <article>
                                    <aside style={{ width: "100%" }}>
                                      <div className="DocumnetBox">
                                        <figcaption>
                                          <span>
                                            <img src="https://mobulous.co.in/just-clubbing/assets/images/driving.png" />
                                          </span>
                                        </figcaption>
                                      </div>
                                    </aside>
                                  </article>
                                </div>
                              </div>
                            </div>
                          </div>
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
                      <h4>Analytics</h4>
                      {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                    </div>
                    <div id="collapse3" className="panel-collapse collapse in">
                      <div className="card-body">
                        <div className="accordionBox">
                          <div className="accordionInfo">
                            <article>
                              <aside style={{ width: "100%" }}>
                                <p>
                                  <strong>Items Posted</strong>
                                  <span>xyz</span>
                                </p>
                                <p>
                                  <strong>Videos</strong>
                                  <span>Lorem ipsum</span>
                                </p>
                                <p>
                                  <strong>Pictures</strong>
                                  <span>lorem ipsum</span>
                                </p>
                                <p>
                                  <strong>Shared</strong>
                                  <span>lorem ipsum</span>
                                </p>
                                <p>
                                  <strong>Reposts</strong>
                                  <span>lorem ipsum</span>
                                </p>
                                <p>
                                  <strong>Pinned Posts</strong>
                                  <span>lorem ipsum</span>
                                </p>
                              </aside>
                            </article>
                          </div>
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
                      <h4>Event</h4>
                      {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                    </div>
                    <div id="collapse4" className="panel-collapse collapse in">
                      <div className="card-body">
                        <div className="accordionBox">
                          <div className="accordionInfo">
                            <article>
                              <aside style={{ width: "100%" }}>
                                <p>
                                  <strong>Total Events</strong>
                                  <span>100</span>
                                </p>
                                <p>
                                  <strong>Public Events</strong>
                                  <span>80</span>
                                </p>
                                <p>
                                  <strong>Online Events</strong>
                                  <span>Lorem ipsum</span>
                                </p>
                                <p>
                                  <strong>Active Events</strong>
                                  <span>50</span>
                                </p>
                                <p>
                                  <strong>Completed Events</strong>
                                  <span>90</span>
                                </p>
                                <p>
                                  <strong>Cancelled Events</strong>
                                  <span>10</span>
                                </p>
                              </aside>
                            </article>
                          </div>
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
                      <h4>Jobs</h4>
                      {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                    </div>
                    <div id="collapse5" className="panel-collapse collapse in">
                      <div className="card-body">
                        <div className="accordionBox">
                          <div className="accordionBox">
                            <div className="accordionInfo">
                              <article>
                                <aside style={{ width: "100%" }}>
                                  <p>
                                    <strong>Total Jobs Posted</strong>
                                    <span>20</span>
                                  </p>
                                  <p>
                                    <strong>Total Applicants</strong>
                                    <span>80</span>
                                  </p>
                                  <p>
                                    <strong>Active Posted Job</strong>
                                    <span>Lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>Inactive Job Posts</strong>
                                    <span>50</span>
                                  </p>
                                  <p>
                                    <strong>Reposted Jobs</strong>
                                    <span>90</span>
                                  </p>
                                </aside>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyUser;
