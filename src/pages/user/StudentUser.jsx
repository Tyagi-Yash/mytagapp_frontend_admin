import React from "react";

const StudentUser = () => {
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
          <div className="SettingsTabs">
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
                        <aside className="w-100">
                          <p>
                            <strong>Student Name </strong>
                            <span>Rahul</span>
                          </p>
                          <p>
                            <strong>Location</strong>
                            <span>Noida</span>
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
                  <h3>Student Summary</h3>
                  <div className="Informations">
                    <div className="jobDescriptions">
                      <h4>About</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas ex nesciunt dolorum fuga, mollitia expedita
                        consequatur corporis exercitationem voluptate quos
                        reprehenderit quae debitis fugit neque. Minima placeat
                        eos hic. Animi ratione porro eum, ipsam repudiandae
                        necessitatibus neque voluptate vero repellat sapiente
                        dolor deleniti odit perspiciatis obcaecati a aliquam,
                        beatae facere delectus modi molestiae nemo veniam vel
                        repellendus aliquid! Officia nulla ab pariatur quo
                        necessitatibus numquam eum fuga architecto.
                      </p>
                      <h4>Current Role</h4>
                      <p>Student</p>
                      <h4>Skills</h4>
                      <ul className="skillsListing">
                        <li>Jira</li>
                        <li>Requirement Gathering</li>
                        <li>Agile Methology</li>
                        <li>Wireframing</li>
                        <li>Documentation</li>
                        <li>Use Cases</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="InformationBox">
                  <h3>Analytics</h3>
                  <div className="Informations">
                    <div className="ProfileInfo">
                      <article>
                        <aside className="w-100">
                          <p>
                            <strong>Item Posted </strong>
                            <span>50</span>
                          </p>
                          <p>
                            <strong>Videos</strong>
                            <span>12</span>
                          </p>
                          <p>
                            <strong>Shared</strong>
                            <span>10</span>
                          </p>
                          <p>
                            <strong>Reports </strong>
                            <span>12</span>
                          </p>
                          <p>
                            <strong>Pinned Posts </strong>
                            <span>8</span>
                          </p>
                          <p>
                            <span>
                              <a href="#" className="text-undeline">
                                See Profile
                              </a>
                            </span>
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
                        href="#collapse1"
                        aria-expanded="false"
                      >
                        <h4>Creator Summary</h4>
                        {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                      </div>
                      <div
                        id="collapse1"
                        className="panel-collapse collapse in"
                      >
                        <div className="card-body">
                          <div className="accordionBox">
                            <div className="accordionInfo">
                              <div className="Top">
                                <h4>
                                  Content Type : <span>lorem ipsum</span>
                                </h4>
                                <h4>
                                  Connections : <span>100</span>
                                </h4>
                                <h4>
                                  Followers : <span>100</span>
                                </h4>
                              </div>
                              <h4>Items Posted</h4>
                              <article>
                                <aside className="w-100">
                                  <p>
                                    <strong>Video</strong>
                                    <span style={{ width: 50 }}>
                                      <img src="assets/images/Cab.png" alt="" />
                                    </span>
                                  </p>
                                  <p className="d-flex">
                                    <strong>Pictures</strong>
                                    <span style={{ width: 50 }}>
                                      <img src="assets/images/Cab.png" alt="" />
                                    </span>
                                  </p>
                                  <p>
                                    <strong>Shared</strong>
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
                        href="#collapse2"
                        aria-expanded="false"
                      >
                        <h4>Resume</h4>
                        {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                      </div>
                      <div
                        id="collapse2"
                        className="panel-collapse collapse in"
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="InformationBox mb-0">
                                <h3>Resume</h3>
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
                        <h4>Certifications &amp; Other Uploads</h4>
                        {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                      </div>
                      <div
                        id="collapse3"
                        className="panel-collapse collapse in"
                      >
                        <div className="card-body">
                          <div className="accordionBox DocumnetInfo">
                            <div className="accordionInfo">
                              <article>
                                <aside style={{ width: "50%" }}>
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
                    <div className="card">
                      <div
                        className="card-header"
                        data-bs-toggle="collapse"
                        data-bs-parent="#accordion"
                        href="#collapse4"
                        aria-expanded="false"
                      >
                        <h4>Education</h4>
                        {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                      </div>
                      <div
                        id="collapse4"
                        className="panel-collapse collapse in"
                      >
                        <div className="card-body">
                          <div className="accordionBox">
                            <div className="accordionInfo">
                              <article>
                                <aside className="w-100">
                                  <p>
                                    <strong>Education</strong>
                                    <span>lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>Education Type</strong>
                                    <span>Lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>School/University Name</strong>
                                    <span>lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>School/University Location</strong>
                                    <span>lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>Duration</strong>
                                    <span>12/05/2025 - 20/05/2025</span>
                                  </p>
                                  <p>
                                    <strong>Passing Grade</strong>
                                    <span>lorem ipsum</span>
                                  </p>
                                </aside>
                              </article>
                              {/* <a href="javascript:void(0);" class="seeMoreBtn">See More</a> */}
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
                        <h4>Work Experience</h4>
                        {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                      </div>
                      <div
                        id="collapse5"
                        className="panel-collapse collapse in"
                      >
                        <div className="card-body">
                          <div className="accordionBox">
                            <div className="accordionInfo">
                              <article>
                                <aside style={{ width: "100%" }}>
                                  <p>
                                    <strong>Employment Type</strong>
                                    <span>lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>Current Employment</strong>
                                    <span>Lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>Employment Location</strong>
                                    <span>Lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>Job Title</strong>
                                    <span>Lorem ipsum</span>
                                  </p>
                                  <p>
                                    <strong>Duration</strong>
                                    <span>lorem ipsum</span>
                                  </p>
                                </aside>
                              </article>
                              {/* <a href="javascript:void(0);" class="seeMoreBtn">See More</a> */}
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
                        href="#collapse6"
                        aria-expanded="false"
                      >
                        <h4>Verifiactions</h4>
                        {/* <a href="content-edit.html">
                                  <i class="fa fa-pencil"></i>
                              </a> */}
                      </div>
                      <div
                        id="collapse6"
                        className="panel-collapse collapse in"
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="InformationBox">
                                <h3>Parental Verification</h3>
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
                                <h3>Aadhar Card</h3>
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
                              <div className="InformationBox mb-0">
                                <h3>School Documents</h3>
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

export default StudentUser;
