import InfoBox from "../../components/common/InfoBox";

export default function JobDetails() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Job Details</h4>
        </div>
        <InfoBox title="Job Details">
          <article>
            <aside>
              <p>
                <strong>Job Title</strong> <span>Front End Developer</span>
              </p>
              <p>
                <strong>Company</strong> <span>Mobulous Technologies</span>
              </p>
              <p>
                <strong>Posted By</strong> <span>abc</span>
              </p>
            </aside>
            <aside>
              <p>
                <strong>Total Applications</strong> <span>8</span>
              </p>
              <p>
                <strong>Last Updated</strong> <span>05-05-2025</span>
              </p>
            </aside>
          </article>
        </InfoBox>
        <InfoBox title="Job Description">
          <div className="jobDescriptions">
            <p>Sample job description — replace with API content.</p>
          </div>
        </InfoBox>
      </div>
    </div>
  );
}
