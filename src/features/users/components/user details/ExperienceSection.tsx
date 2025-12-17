import type { UserExperience } from "../../types";

type ExperienceSectionProps = {
  experiences: UserExperience[];
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  if (!experiences || experiences.length === 0) {
    return <p>No work experience added.</p>;
  }

  return (
    <div className="accordionBox">
      <div className="accordionInfo">
        {experiences.map((exp, idx) => (
          <article key={idx}>
            <aside style={{ width: "100%" }}>
              <p>
                <strong>Employment Type</strong>
                <span>{exp.employeeType ?? "—"}</span>
              </p>
              <p>
                <strong>Current Employment</strong>
                <span>{exp.isCurrentlyWorking ? "Yes" : "No"}</span>
              </p>
              <p>
                <strong>Employment Location</strong>
                <span>{exp.location ?? "—"}</span>
              </p>
              <p>
                <strong>Job Title</strong>
                <span>{exp.title ?? "—"}</span>
              </p>
              <p>
                <strong>Duration</strong>
                <span>
                  {exp.startDate || exp.endDate
                    ? `${exp.startDate ?? ""} - ${exp.endDate ?? ""}`
                    : "—"}
                </span>
              </p>
            </aside>
          </article>
        ))}
      </div>
    </div>
  );
}
