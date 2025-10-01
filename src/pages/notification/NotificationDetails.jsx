import React from "react";
// import LogoutModal from "../../components/LogoutModal";

const NotificationDetails = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Notification Management</h4>
            <a href="notifications.html" className="TitleLink Back">
              Back
            </a>
          </div>
          <div className="Small-Wrapper pb-0">
            <div className="InformationBox">
              <div className="Informations">
                <div className="ProfileInfo">
                  <article>
                    <aside>
                      <p>
                        <strong>Notification Title</strong>
                        <span>lorem ipsum</span>
                      </p>
                      <p>
                        <strong>Notification Type </strong>
                        <span>lorem ipsum </span>
                      </p>
                      <p>
                        <strong>Sent To</strong>
                        <span>All</span>
                      </p>
                    </aside>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationDetails;
