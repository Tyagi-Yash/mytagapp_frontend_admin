import React from "react";
// import LogoutModal from "../../components/LogoutModal";

const MarketDetails = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Marketplace Management</h4>
            <a href="market.html" className="TitleLink Back">
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
                        Seller ID : <span>45548958</span>
                      </h4>
                      <a href="" className="ms-5 fw-500">
                        See Profile
                      </a>
                    </div>
                    <article>
                      <aside style={{ width: "100%" }}>
                        <p>
                          <strong>Seller Name </strong>
                          <span>Rahul</span>
                        </p>
                        <p>
                          <strong>Seller Email</strong>
                          <span>rahul@gmail.com</span>
                        </p>
                        <p>
                          <strong>Total Products by this Seller</strong>
                          <span>
                            9{" "}
                            <a href="" style={{ textDecoration: "underline" }}>
                              See All
                            </a>
                          </span>
                        </p>
                        <p>
                          <strong>Phone Number</strong>
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
            <div className="col-lg-7">
              <div className="InformationBox">
                <h3>Product Details</h3>
                <div className="Informations">
                  <div className="ProfileInfo">
                    <article>
                      <aside style={{ width: "100%" }}>
                        <p>
                          <strong>Product Name</strong>
                          <span>Abc</span>
                        </p>
                        <p>
                          <strong>Product ID</strong>
                          <span>P-5994594</span>
                        </p>
                        <p>
                          <strong>Category</strong>
                          <span>Electronics/Fashion/Home etc.</span>
                        </p>
                        <p>
                          <strong>Price</strong>
                          <span>₹ 2000</span>
                        </p>
                        <p>
                          <strong>Uploaded On</strong>
                          <span>18/06/2025</span>
                        </p>
                        <p className="d-flex">
                          <strong>Description</strong>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </p>
                        <p className="d-flex">
                          <strong>Product Image</strong>
                          <span>
                            <img
                              src="assets/images/Cab.png"
                              alt="img"
                              style={{ width: 50 }}
                            />
                          </span>
                        </p>
                      </aside>
                    </article>
                    {/* <a href="javascript:void(0);" class="seeMoreBtn">See More</a> */}
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

export default MarketDetails;
