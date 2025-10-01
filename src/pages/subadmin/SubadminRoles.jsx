import React, { useEffect, useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteSubadmin,
  getSubadmin,
  updateStatus,
} from "../../reduxToolkit/slices/subadminSlice";
import toast from "react-hot-toast";

const SubadminRoles = () => {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { roleName } = useParams();
  const [subadmins, setSubadmins] = useState();
  const [selectedSubadmin, setSelectedSubadmin] = useState(null);

  useEffect(() => {
    const fetchSubadmins = async () => {
      try {
        const res = await dispatch(getSubadmin({ roleName }));
        if (res?.payload?.data?.data) {
          setSubadmins(res.payload.data.data);
          console.log(res.payload.data);
        } else {
          toast.error("No subadmins found for this role");
        }
      } catch (error) {
        toast.error("Failed to fetch subadmins");
      }
    };
    fetchSubadmins();
  }, [dispatch, roleName]);

  const handleSubadminStatus = async (_id) => {
    const subadmin = subadmins.find((s) => s._id === _id);
    if (!subadmin) return;

    const newStatus = subadmin.status === "active" ? "inactive" : "active";

    try {
      const res = await dispatch(updateStatus({ id: _id, status: newStatus }));
      if (res?.payload?.status === 200) {
        const updatedSubadmins = subadmins.map((s) =>
          s._id === _id ? { ...s, status: newStatus } : s
        );
        setSubadmins(updatedSubadmins);
        return toast.success("Status updated successfully");
      } else {
        toast.error(" Status update failed");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
    }
  };

  const handleSubadminDelete = async (_id) => {
    const subadmin = subadmins.find((s) => s._id === _id);
    if (!subadmin) return;
    try {
      const res = await dispatch(deleteSubadmin({ id: _id }));
      if (res?.payload?.status === 200) {
        const updatedSubadmins = subadmins.filter((s) => s._id !== _id);
        setSubadmins(updatedSubadmins);
        return toast.success("Subadmin deleted successfully");
      } else {
        toast.error("Unable to delete user");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Sub Admin Management</h4>
          </div>
          <div className="FilterArea mb-0">
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
            <div className="FilterRight">
              <Link className="TitleLink" to="/subadmin-rolesadd">
                Add Sub Admin
              </Link>
              <Link to="/subadmin-manage" className="TitleLink Back">
                Back
              </Link>
            </div>
          </div>
          <br />
          <div className="TableList">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Role ID</th>
                  <th>Role Name</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {subadmins && subadmins.length > 0 ? (
                  subadmins.map((subadmin, i) => (
                    <tr key={subadmin._id}>
                      <td>{String(i + 1).padStart(1, "0")}</td>
                      <td>R-{String(i + 1).padStart(1, "1")}</td>
                      <td>{subadmin.role}</td>
                      <td>{subadmin.fullName}</td>
                      <td>{subadmin.email}</td>
                      <td>
                        <span
                          className={
                            subadmin.status === "active" ? "Green" : "Red"
                          }
                        >
                          {subadmin.status}
                        </span>
                      </td>
                      <td>
                        <div className="Actions">
                          <label className="Switch">
                            <input
                              type="checkbox"
                              checked={subadmin.status === "inactive"}
                              onChange={() =>
                                handleSubadminStatus(subadmin._id)
                              }
                            />
                            <span className="slider" />
                          </label>
                          <Link
                            to={`/subadmin-rolesedit/${subadmin._id}`}
                            className="Green"
                            // onClick={() => {
                            //   setSelectedBanner(banner.bannerId);
                            //   setIsEditBannerOpen(true);
                            // }}
                          >
                            <i className="fa fa-pencil" />
                          </Link>
                          <Link
                            className="Blue"
                            to={`/subadmin-details/${subadmin._id}`}
                          >
                            <i className="fa fa-eye" />
                          </Link>
                          <div>
                            <Link
                              role="button"
                              style={{ cursor: "pointer" }}
                              className="Red"
                              onClick={() => {
                                setSelectedSubadmin(subadmin._id);
                                setIsDeleteModalOpen(true);
                              }}
                            >
                              <i className="fa fa-trash" />
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center" }}>
                      No subadmins found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* <div className="pagination">
            <a href="#">Prev</a>
            <a href="#">1</a>
            <a href="#" className="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">Next</a>
          </div> */}
        </div>
      </div>
      <div className="ModalBox">
        {isDeleteModalOpen && (
          <DeleteModal
            id="DeleteModal"
            title="Delete"
            message="Are you sure you want to delete this subadmin?"
            onConfirm={() => {
              handleSubadminDelete(selectedSubadmin);
              setIsDeleteModalOpen(false);
            }}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default SubadminRoles;
