import type { UserProfileDetail } from "../../types";

type Props = {
  user: UserProfileDetail;
};

export default function UserSummary({ user }: Props) {
  const { about, userSubType, skills } = user;

  return (
    <div className="InformationBox">
      <h3>Student Summary</h3>
      <div className="Informations">
        <div className="jobDescriptions">
          <h4>About</h4>
          <p style={{ whiteSpace: "pre-wrap" }}>{about || "No summary provided."}</p>

          <h4>Current Role</h4>
          <p>{userSubType || "—"}</p>

          <h4>Skills</h4>
          {skills && skills.length ? (
            <ul className="skillsListing">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No skills added.</p>
          )}
        </div>
      </div>
    </div>
  );
}
