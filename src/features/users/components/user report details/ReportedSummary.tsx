import type { ReportedSummaryProps } from "../../types";

export default function ReportedSummary({ totalReports }: ReportedSummaryProps) {
  return (
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
  );
}
