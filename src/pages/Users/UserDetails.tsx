import { useNavigate, useParams } from "react-router-dom";
import { useGetReportedUserDetailQuery } from "../../features/users/usersApi";

import UserBasicDetails from "../../features/users/components/user details/UserBasicDetails";
import UserSummary from "../../features/users/components/user details/UserSummary";
import UserAnalyticsSection from "../../features/users/components/user details/UserAnalyticsSection";
import UserDocumentsAccordion from "../../features/users/components/user details/UserDocumentsAccordion";

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    isError,
  } = useGetReportedUserDetailQuery(id ?? "", {
    skip: !id,
  });

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
  if (isError || !user) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Failed to load user details</div>
      </div>
    );
  }

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">User Details</h4>
          <button className="Back" onClick={() => navigate("/users")} type="button">
            Back
          </button>
        </div>

        <div className="SettingsTabs">
          <div className="row">
            <div className="col-lg-5">
              <UserBasicDetails user={user} />
              <UserSummary user={user} />
              <UserAnalyticsSection analytics={user.analytics} />
            </div>

            <div className="col-lg-7">
              <UserDocumentsAccordion user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
