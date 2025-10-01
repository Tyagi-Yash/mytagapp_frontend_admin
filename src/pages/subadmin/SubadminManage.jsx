import React, { useEffect, useRef, useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Driver.png";
import AddRole from "../../components/AddRole";
import EditRole from "../../components/EditRole";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  addRole,
  getRoles,
  deleteRole,
} from "../../reduxToolkit/slices/subadminSlice";

const SubadminManage = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddRoleOpen, setIsAddRoleOpen] = useState(false);
  const [isEditRoleOpen, setIsEditRoleOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [roles, setRoles] = useState([]);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    roleName: "",
  });

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  //for click outside functionality
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddRole = async () => {
    const { roleName } = form;

    if (!roleName) {
      return toast.error("Role name is required");
    }
    try {
      const res = await dispatch(addRole({ roleName }));
      if (res?.payload?.status === 201) {
        toast.success("Role added successfully");
        setForm({ roleName: "" });
        fetchRoles();
      } else if (res?.payload?.status === 409) {
        toast.error("Role already exists");
      } else {
        toast.error("Unable to add role");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Try again");
    }
  };

  const fetchRoles = async () => {
    try {
      const res = await dispatch(getRoles());
      if (res?.payload?.status === 200 && res?.payload?.data?.data) {
        setRoles(res.payload.data.data);
      } else {
        setRoles([]);
        toast.error(res?.payload?.message || "No roles found");
      }
    } catch (error) {
      toast.error("Failed to fetch roles");
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);
  console.log(roles);

  // const handleDeleteRole = async (_id) => {
  //   const role = roles.find((r) => r._id === _id);
  //   if (!role) return;
  //   console.log(_id);
  //   try {
  //     const res = await dispatch(deleteRole({ id: _id }));
  //     if (res?.payload?.status === 200) {
  //       const updatedRoles = roles.filter((r) => r._id !== _id);
  //       setRoles(updatedRoles);
  //       return toast.success("Role deleted successfully");
  //     } else {
  //       toast.error("Unable to delete role");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };

  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Sub Admin Management</h4>
            <button
              className="TitleLink"
              onClick={() => setIsAddRoleOpen(true)}
            >
              Add Role
            </button>
          </div>
          <div className="Small-Wrapper">
            <div className="DriverCountList">
              <div className="row gy-4">
                {roles.length > 0 ? (
                  roles.map((role) => (
                    <div className="col-lg-4" key={role._id}>
                      <div className="DriverCountBox">
                        <Link to={`/subadmin-roles/${role.roleName}`}>
                          <span className="Icon">
                           4 <img src={logo} alt="role" />
                          </span>
                          <span className="Text">
                            {role.roleName.toUpperCase()}
                          </span>
                        </Link>
                        {/* <div className="dropdown">
                          <span
                            type="button"
                            onClick={() => toggleDropdown(role._id)}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </span>

                          {openDropdown === role._id && (
                            <ul
                              className="dropdown-menu show"
                              style={{ display: "block", position: "absolute" }}
                            >
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsEditRoleOpen(true);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  Edit Role
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsDeleteModalOpen(true);
                                    setOpenDropdown(null);
                                    //setSelectedRole(role._id);
                                  }}
                                >
                                  Delete
                                </button>
                              </li>
                            </ul>
                          )}
                        </div> */}
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No roles found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ModalBox">
        {isAddRoleOpen && (
          <AddRole
            id="addRole"
            title="Add Role"
            form={form}
            onInputChange={handleInput}
            onConfirm={() => {
              handleAddRole();
              setIsAddRoleOpen(false);
              setForm({ roleName: "" });
            }}
            onClose={() => {
              setIsAddRoleOpen(false);
              setForm({ roleName: "" });
            }}
          />
        )}
        {isEditRoleOpen && (
          <EditRole
            id="editRole"
            title="Edit Role"
            onConfirm={() => {
              console.log("Role edited");
              setIsEditRoleOpen(false);
            }}
            onClose={() => setIsEditRoleOpen(false)}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteModal
            id="deleteRole"
            title="Delete"
            message="Are you sure you want to delete this role?"
            onConfirm={() => {
              handleDeleteRole(selectedRole);
              setIsDeleteModalOpen(false);
            }}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default SubadminManage;
