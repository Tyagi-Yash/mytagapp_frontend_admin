import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetUserReportDetailQuery, useUpdateUserMutation } from "../../features/users/usersApi";
import type { UserReportDetail } from "../../features/users/types";
import ReportedSummary from "../../features/users/components/user report details/ReportedSummary";
import PreviousNotifications from "../../features/users/components/user report details/PreviousNotifications";
import ReportingUsersList from "../../features/users/components/user report details/ReportingUsersList";
import ReportActions from "../../features/users/components/user report details/ReportActions";

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

  const { totalReports, reports } = data as UserReportDetail;

  const handleSendWarning = () => {
    // toast.success("Notification has been sent successfully");
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
          <ReportedSummary totalReports={totalReports} />
          <PreviousNotifications />
          <ReportingUsersList reports={reports} />
          <ReportActions
            onSendWarning={handleSendWarning}
            onBlockUser={handleBlockUser}
            isBlocking={isBlocking}
          />
        </div>
      </div>
    </div>
  );
}
