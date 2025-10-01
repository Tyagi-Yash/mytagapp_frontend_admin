import React from "react";

const FlagDetails = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">User Management</h4>
            <a href="users.html" className="TitleLink Back">
              Back
            </a>
          </div>
          <div className="Small-Wrapper pb-0">
            <div className="InformationBox">
              <h3>Reported</h3>
              <div className="Informations">
                <div className="ProfileInfo">
                  <article>
                    <aside>
                      <p>
                        <strong>Number of Reports </strong>
                        <span>22</span>
                      </p>
                    </aside>
                  </article>
                </div>
              </div>
            </div>
            <div className="InformationBox">
              <h3>Previous Notification</h3>
              <div className="Informations">
                <div className="ProfileInfo">
                  <article>
                    <aside style={{ width: "100%" }}>
                      <p>
                        {/* <strong>Number of Reports </strong> */}
                        <span style={{ width: "100%" }}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Placeat, labore. Quos cumque debitis commodi
                          labore quibusdam fugiat nobis quod et architecto
                          voluptatibus odio ducimus quae quidem sunt earum
                          nesciunt unde sint autem dolores nemo exercitationem
                          asperiores, error numquam accusamus. Provident, magnam
                          est neque voluptate eum amet facere quidem quasi
                          eligendi, cupiditate dignissimos quibusdam ipsa cum
                          exercitationem ad nesciunt id ab esse, odio accusamus
                          libero obcaecati error mollitia! Exercitationem et
                          iure aut explicabo quae qui quis praesentium dolorum
                          maxime nulla doloribus, libero quidem nobis reiciendis
                          odio labore quasi vero ratione reprehenderit harum
                          repellendus modi sed voluptas eaque. Enim aspernatur
                          esse laudantium.
                        </span>
                      </p>
                    </aside>
                  </article>
                </div>
              </div>
            </div>
            <div className="InformationBox">
              <h3>Reporting Users</h3>
              <div className="Informations">
                <div className="ProfileInfo">
                  <article>
                    <aside>
                      <p>
                        <strong>Username</strong>
                        <span>abc</span>
                      </p>
                      <p>
                        <strong>Username</strong>
                        <span>abc</span>
                      </p>
                      <p>
                        <strong>Username</strong>
                        <span>abc</span>
                      </p>
                      <p>
                        <strong>Username</strong>
                        <span>abc</span>
                      </p>
                    </aside>
                    <aside>
                      <p>
                        <strong>Reason for reporting</strong>
                        <span>Lorem ipsum dolor sit amet.</span>
                      </p>
                      <p>
                        <strong>Reason for reporting</strong>
                        <span>Lorem ipsum dolor sit amet.</span>
                      </p>
                      <p>
                        <strong>Reason for reporting</strong>
                        <span>Lorem ipsum dolor sit amet.</span>
                      </p>
                      <p>
                        <strong>Reason for reporting</strong>
                        <span>Lorem ipsum dolor sit amet.</span>
                      </p>
                    </aside>
                  </article>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <button
                className="Button"
                data-bs-toggle="modal"
                data-bs-target="#warningNotification"
              >
                Send a Warning Notification
              </button>
              <button className="Button Cancel">Block User</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ModalBox">
        <div id="warningNotification" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="Decline">
                  {/* <a href="javascript:void(0);" class="CloseModal" data-bs-dismiss="modal">×</a> */}
                  {/* <h3>Warning Notification</h3> */}
                  <span
                    style={{
                      display: "block",
                      width: 36,
                      textAlign: "center",
                      margin: "0px auto 15px",
                    }}
                  >
                    <img src="assets/images/congrts.png" alt="" />
                  </span>
                  <p className="text-center">
                    Notification has been sent successfully
                  </p>
                  {/* <h4 style="visibility: hidden;">
                          <a href="javascript:void(0);" data-bs-dismiss="modal">no</a>
                          <a href="javascript:void(0);" data-bs-dismiss="modal">Yes</a>
                      </h4> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlagDetails;
