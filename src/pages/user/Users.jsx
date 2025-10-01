import React, { useState, useEffect } from "react";
import DeleteModal from "../../components/DeleteModal";
import { useDispatch } from "react-redux";
import {
  deleteUser,
  updateStatus,
  usersList,
} from "../../reduxToolkit/slices/userSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page")) || 1;
  const [pagination, setPagination] = useState({
    totalUsers: 0,
    currentPage: pageFromUrl,
    totalPages: 1,
    pageSize: 10,
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchUsers = async (page = 1, limit = 10) => {
    try {
      const res = await dispatch(usersList({ page, limit }));
      if (res?.payload) {
        setUsers(res.payload.data.data);
        setPagination(res.payload.data.pagination);
        setSearchParams({ page });
      }
    } catch (error) {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers(pageFromUrl, pagination.pageSize);
  }, [pageFromUrl]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await dispatch(usersList());
  //       if (res?.payload?.status === 200) {
  //         const allUsers = res.payload.data.data;
  //         setUsers(Array.isArray(allUsers) ? allUsers : []);
  //       }
  //     } catch (error) {
  //       console.log("Failed to fetch banners");
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, [dispatch]);

  const handleUserStatus = async (_id) => {
    const user = users.find((u) => u._id === _id);
    if (!user) return;

    const newStatus = user.status === "active" ? "inactive" : "active";

    try {
      const res = await dispatch(updateStatus({ id: _id, status: newStatus }));
      if (res?.payload?.status === 200) {
        const updatedUsers = users.map((u) =>
          u._id === _id ? { ...u, status: newStatus } : u
        );
        setUsers(updatedUsers);
        return toast.success("Status updated successfully");
      } else {
        toast.error(" Status update failed");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
    }
  };

  const handleDeleteUser = async (_id) => {
    const user = users.find((u) => u._id === _id);
    if (!user) return;
    try {
      const res = await dispatch(
        deleteUser({
          id: _id,
        })
      );
      if (res?.payload?.status === 200) {
        const updatedUsers = users.filter((u) => u._id !== _id);
        setUsers(updatedUsers);
        return toast.success("User deleted successfully");
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
            <h4 className="Title">User Management</h4>
          </div>
          <div className="Small-Wrapper">
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
                <div className="form-group">
                  <label>Filter By</label>
                  <select className="form-control">
                    <option>blocked users</option>
                    <option>reported users</option>
                    <option>inactive users</option>
                    <option>active users</option>
                    <option>verification request</option>
                  </select>
                </div>
                <div className="form-group" style={{ width: 150 }}>
                  <label>Sort By</label>
                  <select className="form-control">
                    <option>latest</option>
                    <option>oldest</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>&nbsp;</label>
                  <button className="Button">Apply</button>
                  <button className="Button Cancel">
                    <i className="fa fa-refresh" />
                  </button>
                </div>
              </div>
              <div className="FilterRight">
                <div className="form-group">
                  <label>Sort By Users</label>
                  <select className="form-control">
                    <option>Select </option>
                    <option>students</option>
                    <option>professional</option>
                    <option>teachers</option>
                    <option>college</option>
                    <option>company</option>
                    <option>schools</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="TableList">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>User Type</th>
                  <th>Name</th>
                  <th>E-mail address</th>
                  <th>Phone Numhber</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, ind) => (
                  <tr key={user._id}>
                    <td>
                      {String(
                        (pagination.currentPage - 1) * pagination.pageSize +
                          ind +
                          1
                      ).padStart(2, "0")}
                    </td>
                    <td>{user.userType}</td>
                    <td>
                      <Link to={`/${user.userSubType}-user-details`}>
                        {user.name}
                      </Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{}</td>
                    <td>
                      <div className="Actions">
                        <label className="Switch">
                          <input
                            type="checkbox"
                            checked={user.status === "active"}
                            onChange={() => handleUserStatus(user._id)}
                          />
                          <span className="slider" />
                        </label>
                        <div>
                          <a
                            role="button"
                            style={{ cursor: "pointer" }}
                            className="Red"
                            onClick={() => {
                              setSelectedUser(user._id);
                              setIsDeleteModalOpen(true);
                            }}
                          >
                            <i className="fa fa-trash" />
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="paginationMain">
            <select
              className="form-control"
              value={pagination.pageSize}
              onChange={(e) => {
                fetchUsers(1, Number(e.target.value)); // reset to page 1
              }}
            >
              <option value={10}>Show 10 items per page</option>
              <option value={20}>Show 20 items per page</option>
              <option value={30}>Show 30 items per page</option>
              <option value={50}>Show 50 items per page</option>
            </select>

            <div className="pagination">
              <button
                disabled={pagination.currentPage === 1}
                onClick={() =>
                  fetchUsers(pagination.currentPage - 1, pagination.pageSize)
                }
              >
                Prev
              </button>

              {[...Array(pagination.totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={pagination.currentPage === i + 1 ? "active" : ""}
                  onClick={() => fetchUsers(i + 1, pagination.pageSize)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={pagination.currentPage === pagination.totalPages}
                onClick={() =>
                  fetchUsers(pagination.currentPage + 1, pagination.pageSize)
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ModalBox">
        {isDeleteModalOpen && (
          <DeleteModal
            id="DeleteModal"
            title="Delete"
            message="Are you sure you want to delete this user?"
            onConfirm={() => {
              handleDeleteUser(selectedUser);
              setIsDeleteModalOpen(false);
            }}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        )}
        {/* <div id="flagModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
                  <div class="Category">
                      <h3>Details</h3>
                      <div class="flagDetailsBox">
                          <h4>Reported</h4>
                          <div class="flagDetails">
                              <div class="ProfileInfo">
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

                      <div class="flagDetailsBox">
                          <h4>Reporting Users</h4>
                          <div class="flagDetails">
                              <div class="ProfileInfo">
                                  <article>

                                      <aside>

                                          <p>
                                              <strong>Username</strong>
                                              <span>22</span>
                                          </p>
                                           <p>
                                              <strong>Reason for reporting</strong>
                                              <span>lorem Ipsum</span>
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
  </div> */}
      </div>
    </>
  );
};

export default Users;
