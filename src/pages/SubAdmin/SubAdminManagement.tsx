import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

import {
  useDeleteRoleMutation,
  useGetRoleListingQuery,
  useUpdateSubAdminStatusMutation,
} from "../../features/subadmin/subAdminApi";
import DeleteModal from "../../components/common/DeleteModal";

export default function SubAdminManagement() {
  const navigate = useNavigate();
  const { role: roleName } = useParams<{ role: string }>();
  const { data: items = [], isLoading } = useGetRoleListingQuery(
    { role: roleName ?? "" },
    { skip: !roleName }
  );
  const [updateStatus] = useUpdateSubAdminStatusMutation();
  const [deleteRole] = useDeleteRoleMutation();

  const [selectedId, setSelectedId] = useState<string>("");
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleToggle = async (id: string, currentStatus?: string) => {
    try {
      const next = currentStatus === "active" ? "inactive" : "active";
      await updateStatus({ subadminId: id, status: next }).unwrap();
      toast.success("Status updated");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update");
    }
  };

  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">{roleName ? `${roleName} Role` : "Sub Admin Management"}</h4>
          </div>
          <div className="FilterArea mb-0">
            <div className="FilterLeft">
              <div className="form-group">
                <label>Search</label>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>

            <div className="FilterRight">
              {/* <Link className="TitleLink" to={`/sub-admin/add/${roleName}`}>
                Add Sub Admin
              </Link> */}
              <button
                className="Back"
                onClick={() => navigate("/sub-admin")}
                aria-label="Back"
                title="Back"
              >
                Back
              </button>
            </div>
          </div>
          <br />
          <div className="TableList">
            {isLoading ? (
              <div>Loading...</div>
            ) : items.length === 0 ? (
              <div>No sub-admins found for this role</div>
            ) : (
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
                  {items.map((s, idx) => (
                    <tr key={s.id}>
                      <td>{idx + 1}</td>
                      <td>{s.id}</td>
                      <td>{s.role}</td>
                      <td>{s.fullName}</td>
                      <td>{s.email}</td>
                      <td>
                        <span className={s.status === "active" ? "Green" : "Red"}>
                          {s.status === "active" ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td>
                        <div className="Actions">
                          <label className="Switch" title="Active">
                            <input
                              type="checkbox"
                              checked={s.status === "active"}
                              onChange={() => handleToggle(s.id, s.status)}
                            />
                            <span className="slider" />
                          </label>

                          {/* <Link className="Green" to={`/sub-admin/edit/${s.id}`}>
                            <i className="fa-regular fa-pen-to-square" />
                          </Link> */}
                          <Link className="Blue" to={`/sub-admin/details/${s.id}`}>
                            <i className="fa-regular fa-eye" />
                          </Link>
                          <a
                            className="Red"
                            role="button"
                            onClick={() => {
                              setSelectedId(s.id);
                              setIsDeleteOpen(true);
                            }}
                          >
                            <i className="fa-solid fa-trash" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {isDeleteOpen && (
        <DeleteModal
          title="Delete"
          message="Are you sure you want to delete this sub-admin?"
          onConfirm={() => {
            deleteRole({ roleId: selectedId });
            setIsDeleteOpen(false);
          }}
          onClose={() => setIsDeleteOpen(false)}
        />
      )}
    </>
  );
}
