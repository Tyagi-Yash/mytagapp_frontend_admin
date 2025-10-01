import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <h2 className="heading">Dashboard</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="Dashboard">
                <figure>
                  <i className="fa-solid fa-users" />
                </figure>
                <figcaption>
                  <h4>Total Users</h4>
                  <h2>100</h2>
                </figcaption>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Dashboard">
                <figure>
                  <i className="fa-solid fa-users" />
                </figure>
                <figcaption>
                  <h4>Total Creators</h4>
                  <h2>100</h2>
                </figcaption>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Dashboard">
                <figure>
                  <i className="fa-solid fa-building" />
                </figure>
                <figcaption>
                  <h4>Total Institutions</h4>
                  <h2>100</h2>
                </figcaption>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Dashboard">
                <figure>
                  <i className="fa-solid fa-users" />
                </figure>
                <figcaption>
                  <h4>Total Professionals</h4>
                  <h2>100</h2>
                </figcaption>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Dashboard">
                <figure>
                  <i className="fa-solid fa-users" />
                </figure>
                <figcaption>
                  <h4>Total Jobs</h4>
                  <h2>100</h2>
                </figcaption>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Dashboard">
                <figure>
                  <i className="fa-solid fa-users" />
                </figure>
                <figcaption>
                  <h4>Total Events</h4>
                  <h2>100</h2>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
