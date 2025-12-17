import type { UserEducation } from "../../types";

type EducationSectionProps = {
  education: UserEducation[];
};

export default function EducationSection({ education }: EducationSectionProps) {
  if (!education || education.length === 0) {
    return <p>No education details.</p>;
  }

  return (
    <div className="accordionBox">
      <div className="accordionInfo">
        {education.map((edu, idx) => (
          <article key={idx}>
            <aside className="w-100">
              <p>
                <strong>Education</strong>
                <span>{edu.education ?? "—"}</span>
              </p>
              <p>
                <strong>Education Type</strong>
                <span>{edu.educationType ?? "—"}</span>
              </p>
              <p>
                <strong>School/University Name</strong>
                <span>{edu.schoolName ?? "—"}</span>
              </p>
              <p>
                <strong>School/University Location</strong>
                <span>{edu.schoolLocation ?? "—"}</span>
              </p>
              <p>
                <strong>Duration</strong>
                <span>
                  {edu.startDate || edu.endDate
                    ? `${edu.startDate ?? ""} - ${edu.endDate ?? ""}`
                    : "—"}
                </span>
              </p>
              <p>
                <strong>Passing Grade</strong>
                <span>{edu.passingGrade ?? "—"}</span>
              </p>
            </aside>
          </article>
        ))}
      </div>
    </div>
  );
}
