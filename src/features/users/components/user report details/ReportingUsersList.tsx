import type { ReportingUsersListProps } from "../../types";

export default function ReportingUsersList({ reports }: ReportingUsersListProps) {
  if (!reports.length) {
    return (
      <div className="InformationBox">
        <h3>Reporting Users</h3>
        <div className="Informations">
          <div className="ProfileInfo">
            <article>
              <aside>
                <p>No reporting users available.</p>
              </aside>
            </article>
          </div>
        </div>
      </div>
    );
  }

  return (
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
                    {r.reportedBy.name ?? r.reportedBy.userId ?? r.reportedBy.email ?? "Unknown"}
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
  );
}
