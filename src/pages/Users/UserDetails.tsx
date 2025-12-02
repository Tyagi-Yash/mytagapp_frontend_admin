import { useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useGetReportedUserDetailQuery } from "../../features/users/usersApi";

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    isError,
  } = useGetReportedUserDetailQuery(id ?? "", {
    skip: !id,
  });

  if (!id) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Invalid user id</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Loading...</div>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Failed to load user details</div>
      </div>
    );
  }

  const {
    fullName,
    location,
    phone,
    email,
    about,
    skills,
    userSubType,
    stats,
    analytics,
    experiences,
    documents,
  } = user;

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">User Details</h4>
          <button className="Back" onClick={() => navigate("/users")} type="button">
            Back
          </button>
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
                        Connections : <span>{stats.connections ?? 0}</span>
                      </h4>
                      <h4 className="ms-5">
                        Followers : <span>{stats.followers ?? 0}</span>
                      </h4>
                    </div>
                    <article>
                      <aside className="w-100">
                        <p>
                          <strong>Student Name </strong>
                          <span>{fullName || "—"}</span>
                        </p>
                        <p>
                          <strong>Location</strong>
                          <span>{location || "—"}</span>
                        </p>
                        <p>
                          <strong>Phone (Public)</strong>
                          <span>{phone ? `+91 ${phone}` : "—"}</span>
                        </p>
                        <p>
                          <strong>Email Address (Public)</strong>
                          <div>
                            <span>{email || "—"}</span>
                          </div>
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
                    <p style={{ whiteSpace: "pre-wrap" }}>{about || "No summary provided."}</p>

                    <h4>Current Role</h4>
                    <p>{userSubType || "—"}</p>

                    <h4>Skills</h4>
                    {skills && skills.length ? (
                      <ul className="skillsListing">
                        {skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No skills added.</p>
                    )}
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
                          <span>{analytics.totalPosts ?? 0}</span>
                        </p>
                        <p>
                          <strong>Text Posts </strong>
                          <span>{analytics.totalTextPosts ?? 0}</span>
                        </p>
                        <p>
                          <strong>Videos</strong>
                          <span>{analytics.totalVideos ?? 0}</span>
                        </p>
                        <p>
                          <strong>Reels</strong>
                          <span>{analytics.totalReels ?? 0}</span>
                        </p>
                        <p>
                          <strong>Photos</strong>
                          <span>{analytics.totalPhotos ?? 0}</span>
                        </p>
                        <p>
                          <strong>Reports </strong>
                          <span>{analytics.totalReports ?? 0}</span>
                        </p>
                        <p>
                          <strong>Pinned Posts </strong>
                          <span>{analytics.pinnedPosts ?? 0}</span>
                        </p>
                      </aside>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="UserMultipleArea">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Resume</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="InformationBox mb-0">
                            <h3>Resume</h3>
                            <div className="Informations DocumnetInfo">
                              <div className="ProfileInfo">
                                <article>
                                  <aside style={{ width: "100%" }}>
                                    {documents.resume && documents.resume.length ? (
                                      <div className="DocumnetBox">
                                        <figcaption>
                                          <span>
                                            <img src={documents.resume[0]} alt="Resume" />
                                          </span>
                                        </figcaption>
                                      </div>
                                    ) : (
                                      <p>No resume uploaded.</p>
                                    )}
                                  </aside>
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Certifications &amp; Other Uploads</Accordion.Header>
                    <Accordion.Body>
                      <div className="accordionBox DocumnetInfo">
                        <div className="accordionInfo">
                          <article>
                            <aside style={{ width: "50%" }}>
                              {documents.otherDocuments && documents.otherDocuments.length ? (
                                <div className="DocumnetBox">
                                  <figcaption>
                                    <span>
                                      <img src={documents.otherDocuments[0]} alt="Document" />
                                    </span>
                                  </figcaption>
                                </div>
                              ) : (
                                <p>No other documents uploaded.</p>
                              )}
                            </aside>
                          </article>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Education</Accordion.Header>
                    <Accordion.Body>
                      <div className="accordionBox">
                        <div className="accordionInfo">
                          {user.education && user.education.length ? (
                            user.education.map((edu: any, idx: number) => (
                              <article key={idx}>
                                <aside className="w-100">
                                  <p>
                                    <strong>Education</strong>
                                    <span>{edu.education ?? "—"}</span>
                                  </p>
                                  <p>
                                    <strong>Education Type</strong>
                                    <span>{edu.educationType ?? "—"}</span>
                                  </p>
                                  <p>
                                    <strong>School/University Name</strong>
                                    <span>{edu.schoolName ?? "—"}</span>
                                  </p>
                                  <p>
                                    <strong>School/University Location</strong>
                                    <span>{edu.schoolLocation ?? "—"}</span>
                                  </p>
                                  <p>
                                    <strong>Duration</strong>
                                    <span>
                                      {edu.startDate || edu.endDate
                                        ? `${edu.startDate ?? ""} - ${edu.endDate ?? ""}`
                                        : "—"}
                                    </span>
                                  </p>
                                  <p>
                                    <strong>Passing Grade</strong>
                                    <span>{edu.passingGrade ?? "—"}</span>
                                  </p>
                                </aside>
                              </article>
                            ))
                          ) : (
                            <p>No education details.</p>
                          )}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Work Experience</Accordion.Header>
                    <Accordion.Body>
                      <div className="accordionBox">
                        <div className="accordionInfo">
                          {experiences && experiences.length ? (
                            experiences.map((exp, idx) => (
                              <article key={idx}>
                                <aside style={{ width: "100%" }}>
                                  <p>
                                    <strong>Employment Type</strong>
                                    <span>{exp.employeeType ?? "—"}</span>
                                  </p>
                                  <p>
                                    <strong>Current Employment</strong>
                                    <span>{exp.isCurrentlyWorking ? "Yes" : "No"}</span>
                                  </p>
                                  <p>
                                    <strong>Employment Location</strong>
                                    <span>{exp.location ?? "—"}</span>
                                  </p>
                                  <p>
                                    <strong>Job Title</strong>
                                    <span>{exp.title ?? "—"}</span>
                                  </p>
                                  <p>
                                    <strong>Duration</strong>
                                    <span>
                                      {exp.startDate || exp.endDate
                                        ? `${exp.startDate ?? ""} - ${exp.endDate ?? ""}`
                                        : "—"}
                                    </span>
                                  </p>
                                </aside>
                              </article>
                            ))
                          ) : (
                            <p>No work experience added.</p>
                          )}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Verifications</Accordion.Header>
                    <Accordion.Body>
                      <p>No verification documents attached yet.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
