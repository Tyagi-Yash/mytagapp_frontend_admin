import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function SubAdminRolesAdd() {
  const navigate = useNavigate();
  const { role: roleName } = useParams<{ role: string }>();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: roleName ?? "",
    permissions: {
      userManagement: false,
      marketPlaceManagement: false,
      jobManagement: false,
      eventManagement: false,
      subAdminManagement: false,
      notificationManagement: false,
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      navigate(`/sub-admin/${roleName}`);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to create");
    }
  };

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Add Sub Admin</h4>
          <button
            className="Back"
            onClick={() => navigate(`/sub-admin/${roleName}`)}
            aria-label="Back"
            title="Back"
          >
            Back
          </button>
        </div>
        <div className="Small-Wrapper CommonForm">
          <div className="TitleBox">
            <h4 className="Title">Details</h4>
          </div>
          <form className="CommonForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    type="text"
                    className="form-control"
                    placeholder="Enter full name"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Select Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="form-control"
                  >
                    <option value={form.role ?? "admin"}>{form.role ?? "admin"}</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    value={form.phoneNumber}
                    onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Create Password</label>
                  <input
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
              </div>
            </div>

            <div className="TitleBox">
              <h4 className="Title">Permissions</h4>
            </div>
            <fieldset>
              <div className="StaticArea">
                <div className="AdminAccess">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Module</th>
                        <th>Access</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(form.permissions || {}).map((k) => (
                        <tr key={k}>
                          <td>{k}</td>
                          <td>
                            <label className="Switch" title="Active">
                              <input
                                type="checkbox"
                                checked={(form.permissions as any)[k]}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    permissions: { ...form.permissions, [k]: e.target.checked },
                                  })
                                }
                              />
                              <span className="slider" />
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </fieldset>

            <button className="Button mt-3" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
