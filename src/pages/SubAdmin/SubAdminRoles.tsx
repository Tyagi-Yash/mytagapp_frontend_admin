import { Link } from "react-router-dom";
import DriverImg from "../../assets/images/Driver.png";

export default function SubAdminRoles() {
  return (
    <div>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Sub Admin Management</h4>
            <button className="TitleLink" data-bs-toggle="modal" data-bs-target="#addRole">
              Add Role
            </button>
          </div>
          <div className="Small-Wrapper">
            <div className="DriverCountList">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <div className="DriverCountBox">
                    <Link to="manager">
                      <span className="Icon">
                        <img src={DriverImg} />
                      </span>
                      <span className="Text">Manager</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="DriverCountBox">
                    <Link to="admin">
                      <span className="Icon">
                        <img src={DriverImg} />
                      </span>
                      <span className="Text">Admin</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="ModalBox">
        <div id="addRole" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="Category">
                  <Link to="javascript:void(0);" className="CloseModal" data-bs-dismiss="modal">
                    ×
                  </Link>
                  <h3>Add Role</h3>
                  <div className="form-group">
                    <label>Role Name</label>
                    <input type="text" className="form-control" placeholder="Enter role name" />
                  </div>
                  <button className="Button" data-bs-dismiss="modal">
                    {" "}
                    Add Role
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="editRole" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="Category">
                  <Link to="javascript:void(0);" className="CloseModal" data-bs-dismiss="modal">
                    ×
                  </Link>
                  <h3>Edit Role</h3>
                  <div className="form-group">
                    <label>Role Name</label>
                    <input type="text" className="form-control" placeholder="Enter role name" />
                  </div>
                  <button className="Button" data-bs-dismiss="modal">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="deleteRole" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="Decline">
                  <Link to="javascript:void(0);" className="CloseModal" data-bs-dismiss="modal">
                    ×
                  </Link>
                  <h3>Delete</h3>
                  <p>Are you sure you want to delete this Role?</p>
                  <h4>
                    <Link to="javascript:void(0);" data-bs-dismiss="modal">
                      no
                    </Link>
                    <Link to="javascript:void(0);" data-bs-dismiss="modal">
                      Yes
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
