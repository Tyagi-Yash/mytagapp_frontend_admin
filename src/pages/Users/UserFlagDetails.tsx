import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetUserReportDetailQuery, useUpdateUserMutation } from "../../features/users/usersApi";

export default function UserFlagDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetUserReportDetailQuery(id ?? "", {
    skip: !id,
  });

  const [updateUser, { isLoading: isBlocking }] = useUpdateUserMutation();

  if (!id) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Invalid user id</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Loading...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Failed to load report details</div>
      </div>
    );
  }

  const { totalReports, reports } = data;

  const handleSendWarning = () => {
    toast.success("Notification has been sent successfully");
  };

  const handleBlockUser = async () => {
    try {
      await updateUser({ id, status: "blocked" }).unwrap();
      toast.success("User has been blocked");
    } catch (err: any) {
      console.error("block user failed", err);
      toast.error(err?.data?.message || "Failed to block user");
    }
  };

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">User Management</h4>
          <button className="Back" onClick={() => navigate("/users")} type="button">
            Back
          </button>
        </div>

        <div className="Small-Wrapper pb-0">
          <div className="InformationBox">
            <h3>Reported</h3>
            <div className="Informations">
              <div className="ProfileInfo">
                <article>
                  <aside>
                    <p>
                      <strong>Number of Reports </strong>
                      <span>{totalReports}</span>
                    </p>
                  </aside>
                </article>
              </div>
            </div>
          </div>

          <div className="InformationBox">
            <h3>Previous Notification</h3>
            <div className="Informations">
              <div className="ProfileInfo">
                <article>
                  <aside style={{ width: "100%" }}>
                    <p>
                      <span style={{ width: "100%" }}>
                        No previous warning notification data available.
                      </span>
                    </p>
                  </aside>
                </article>
              </div>
            </div>
          </div>

          <div className="InformationBox">
            <h3>Reporting Users</h3>
            <div className="Informations">
              <div className="ProfileInfo">
                <article>
                  <aside>
                    {reports.map((r) => (
                      <p key={r.id}>
                        <strong>Username</strong>
                        <span>
                          {r.reportedBy.name ??
                            r.reportedBy.userId ??
                            r.reportedBy.email ??
                            "Unknown"}
                        </span>
                      </p>
                    ))}
                  </aside>
                  <aside>
                    {reports.map((r) => (
                      <p key={r.id}>
                        <strong>Reason for reporting</strong>
                        <span>{r.reason || "—"}</span>
                      </p>
                    ))}
                  </aside>
                </article>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <button className="Button" type="button" onClick={handleSendWarning}>
              Send a Warning Notification
            </button>
            <button
              className="Button Cancel"
              type="button"
              onClick={handleBlockUser}
              disabled={isBlocking}
            >
              {isBlocking ? "Blocking..." : "Block User"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
