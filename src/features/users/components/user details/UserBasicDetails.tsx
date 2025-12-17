import type { UserProfileDetail } from "../../types";

type Props = {
  user: UserProfileDetail;
};

export default function UserBasicDetails({ user }: Props) {
  const { fullName, location, phone, email, stats } = user;

  return (
    <div className="InformationBox">
      <h3>Basic Details</h3>
      <div className="Informations">
        <div className="ProfileInfo">
          <div className="Top">
            <h4>
              Connections : <span>{stats?.connections ?? 0}</span>
            </h4>
            <h4 className="ms-5">
              Followers : <span>{stats?.followers ?? 0}</span>
            </h4>
          </div>
          <article>
            <aside className="w-100">
              <p>
                <strong>Student Name </strong>
                <span>{fullName || "—"}</span>
              </p>
              <p>
                <strong>Location</strong>
                <span>{location || "—"}</span>
              </p>
              <p>
                <strong>Phone (Public)</strong>
                <span>{phone ? `+91 ${phone}` : "—"}</span>
              </p>
              <p>
                <strong>Email Address (Public)</strong>
                <div>
                  <span>{email || "—"}</span>
                </div>
              </p>
            </aside>
          </article>
        </div>
      </div>
    </div>
  );
}
