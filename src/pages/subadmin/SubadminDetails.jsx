import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { subadminDetails } from "../../reduxToolkit/slices/subadminSlice";
import toast from "react-hot-toast";
import avatar from "../../assets/images/Avatar-1.png";

const SubadminDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await dispatch(subadminDetails({ id }));
        console.log(res);
        if (res?.payload?.status === 200) {
          setDetails(res.payload.data.data);
        }
      } catch (error) {
        toast.error("Failed to fetch subadmin details");
      }
    })();
  }, [id]);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1") // add spaces before capitals
      .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
  };

  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Sub Admin Details</h4>
            <Link to={`/subadmin-roles`} className="TitleLink Back">
              Back
            </Link>
          </div>
          <div className="Small-Wrapper">
            <div className="SubAdminBox">
              <figure>
                <img src={avatar} />
              </figure>
              <figcaption>
                <p>
                  <strong>Sub Admin Name</strong>
                  <span>{details.fullName}</span>
                </p>
                <p>
                  <strong>Sub Admin ID</strong>
                  <span>--</span>
                </p>
                <p>
                  <strong>Created On</strong>
                  <span>
                    {new Date(details.createdAt).toLocaleDateString()}
                  </span>
                </p>
                <p>
                  <strong>Role</strong>
                  <span>{details.role}</span>
                </p>
                <p>
                  <strong> Email ID</strong>
                  <span>{details.email}</span>
                </p>
                <p>
                  <strong> Contact No.</strong>
                  <span>{details.phoneNumber}</span>
                </p>
                <p>
                  <strong> User Name</strong>
                  <span>--</span>
                </p>
                <p>
                  <strong>Password</strong>
                  <span>{details.password}</span>
                </p>
              </figcaption>
            </div>
            {/* Permissions Section */}
            {details.permissions && (
              <div className="StaticArea">
                {Object.entries(details.permissions).map(
                  ([key, value], idx) => (
                    <div className="card" key={idx}>
                      {/* Accordion Header */}
                      <div
                        className="card-header cursor-pointer"
                        onClick={() => toggleAccordion(idx)}
                      >
                        <h4>{formatKey(key)}</h4>
                      </div>

                      {/* Accordion Body */}
                      {openIndex === idx && (
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
                                    <strong>{formatKey(key)}</strong>
                                  </td>
                                  <td>
                                    <div className="Read">
                                      <input
                                        type="checkbox"
                                        checked={!!value}
                                        readOnly
                                      />
                                      <span>
                                        <i className="fa-regular fa-eye" />
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="Access">
                                      <input
                                        type="checkbox"
                                        checked={!!value}
                                        readOnly
                                      />
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
                      )}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubadminDetails;
