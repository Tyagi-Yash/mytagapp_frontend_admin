import { useNavigate, useParams } from "react-router-dom";
import { useViewSubAdminQuery } from "../../features/subadmin/subAdminApi";
import Avatar from "../../assets/images/Avatar-1.png";

export default function SubAdminDetails() {
  const navigate = useNavigate();
  const { id: subadminId } = useParams<{ id: string }>();

  const { data: sub, isLoading } = useViewSubAdminQuery(
    { subadminId: subadminId ?? "" },
    { skip: !subadminId }
  );

  if (!subadminId)
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Missing sub-admin id</div>
      </div>
    );
  if (isLoading)
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Loading...</div>
      </div>
    );
  if (!sub)
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Not found</div>
      </div>
    );

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Sub Admin Details</h4>
          <button
            className="Back"
            onClick={() => navigate(`/sub-admin/${sub.role}`)}
            aria-label="Back"
            title="Back"
          >
            Back
          </button>
        </div>

        <div className="Small-Wrapper">
          <div className="SubAdminBox">
            <figure>
              <img src={Avatar} alt="avatar" />
            </figure>
            <figcaption>
              <p>
                <strong>Sub Admin Name</strong>
                <span>{sub.fullName}</span>
              </p>
              <p>
                <strong>Sub Admin ID</strong>
                <span>{sub.id}</span>
              </p>
              <p>
                <strong>Created On</strong>
                <span>{sub.createdAt}</span>
              </p>
              <p>
                <strong>Role</strong>
                <span>{sub.role}</span>
              </p>
              <p>
                <strong>Email ID</strong>
                <span>{sub.email}</span>
              </p>
              <p>
                <strong>Contact No.</strong>
                <span>{sub.phoneNumber}</span>
              </p>
              <p>
                <strong>Password</strong>
                <span>{sub.password}</span>
              </p>
            </figcaption>
          </div>

          <fieldset disabled>
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
                    {Object.keys(sub.permissions || {}).map((k) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td>
                          <label className="Switch" title="Active">
                            <input type="checkbox" checked={sub.permissions[k]} readOnly />
                            <span className="slider" style={{ cursor: "not-allowed" }} />
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
