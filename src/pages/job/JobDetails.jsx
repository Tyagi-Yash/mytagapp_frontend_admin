import React from "react";
// import LogoutModal from "../../components/LogoutModal";

const JobDetails = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">All Cabs</h4>
          </div>
          <div className="SettingsTabs">
            <div className="d-flex justify-content-between">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#companyDetails"
                  >
                    Company Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#jobDetails"
                  >
                    Job Details
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#applicants"
                  >
                    Applicants
                  </a>
                </li>
              </ul>
              <div className="TitleBox">
                <div className="Actions mx-3">
                  <label className="Switch">
                    <input type="checkbox" />
                    <span className="slider" />
                  </label>
                  <a
                    className="Red"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#DeleteModal"
                  >
                    <i className="fa-solid fa-trash" />
                  </a>
                </div>
                <a href="job.html" className="TitleLink Back">
                  Back
                </a>
              </div>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="companyDetails">
                <div className="Small-Wrapper pb-0">
                  <div className="InformationBox">
                    <h3>Basic Details</h3>
                    <div className="Informations">
                      <div className="ProfileInfo">
                        <div className="d-flex mb-3">
                          <h4>
                            Connections : <span>100</span>
                          </h4>
                          <h4 className="ms-5">
                            Followers : <span>100</span>
                          </h4>
                        </div>
                        <article>
                          <aside>
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
                          </aside>
                          <aside>
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
                </div>
              </div>
              <div className="tab-pane fade" id="jobDetails">
                <div className="Small-Wrapper">
                  <div className="InformationBox position-relative">
                    <a href="job.html" className="seeAllJobs">
                      See all jobs posted by company
                    </a>
                    <h3>Job Details</h3>
                    <div className="Informations">
                      <div className="ProfileInfo">
                        <article>
                          <aside>
                            <p>
                              <strong>Job Title </strong>
                              <span>Front End Developer</span>
                            </p>
                            <p>
                              <strong>Company Name </strong>
                              <span>Mobulous Technologies</span>
                            </p>
                            <p>
                              <strong>Posted By (Recruiter/HR) </strong>
                              <span>abc </span>
                            </p>
                          </aside>
                          <aside>
                            <p>
                              <strong>Total Applications </strong>
                              <span>8</span>
                            </p>
                            <p>
                              <strong>Last Updated </strong>
                              <span>05-05-2025</span>
                            </p>
                          </aside>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="InformationBox">
                    <h3>Other Job Details</h3>
                    <div className="Informations">
                      <div className="ProfileInfo">
                        <article>
                          <aside>
                            <p>
                              <strong>Experienced Required </strong>
                              <span>2 Yrs</span>
                            </p>
                            <p>
                              <strong>Total Openings </strong>
                              <span>10</span>
                            </p>
                            <p>
                              <strong>Budget </strong>
                              <span>12 LPA </span>
                            </p>
                          </aside>
                          <aside>
                            <p>
                              <strong>Location </strong>
                              <span>Noida</span>
                            </p>
                            <p>
                              <strong>Type </strong>
                              <span>abc</span>
                            </p>
                          </aside>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="InformationBox">
                    <h3>Job Description</h3>
                    <div className="Informations">
                      <div className="jobDescriptions">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptas ex nesciunt dolorum fuga, mollitia
                          expedita consequatur corporis exercitationem voluptate
                          quos reprehenderit quae debitis fugit neque. Minima
                          placeat eos hic. Animi ratione porro eum, ipsam
                          repudiandae necessitatibus neque voluptate vero
                          repellat sapiente dolor deleniti odit perspiciatis
                          obcaecati a aliquam, beatae facere delectus modi
                          molestiae nemo veniam vel repellendus aliquid! Officia
                          nulla ab pariatur quo necessitatibus numquam eum fuga
                          architecto, itaque veritatis? Nam odio reprehenderit
                          ad provident in, perferendis corrupti eos minima error
                          veniam autem expedita facilis ducimus hic deleniti
                          dolorum corporis porro eveniet saepe totam! Nihil ut
                          assumenda dolores facilis earum qui vel dolorem vero
                          ab delectus, excepturi numquam quaerat fugiat harum
                          ipsum cumque quo, exercitationem reprehenderit
                          veritatis in beatae magni! Nemo iste repellat placeat
                          sapiente. Vitae, molestiae. Necessitatibus est
                          veritatis saepe nihil, tenetur sapiente? Sit
                          architecto earum dicta aperiam non perspiciatis
                          repellendus saepe, odio itaque tenetur quasi molestiae
                          possimus? Totam, esse perspiciatis? Dolor
                          exercitationem culpa dolores! Ut facilis natus velit
                          quibusdam facere? Optio repudiandae quam expedita
                          molestias similique? Nam perferendis ducimus provident
                          vero, mollitia sapiente sed nesciunt quaerat atque
                          quidem ipsam officia laborum nostrum natus dignissimos
                          autem neque facere quia. Qui, eveniet. Ipsa corporis
                          aperiam ipsam deleniti adipisci? Saepe, quos!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="applicants">
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
                  </div>
                </div>
                <div className="TableList">
                  <table>
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Applicant Name</th>
                        <th>Position name</th>
                        <th>Company Name</th>
                        <th>Action Token</th>
                        <th>Resume</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Software Engineer</td>
                        <td>Creative Labs</td>
                        <td>Rejected</td>
                        <td>
                          <div className="Actions">
                            <a href="javascript:void(0);" className="Red">
                              <i className="fa-solid fa-download" />
                            </a>
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
    </>
  );
};

export default JobDetails;
