type ResumeProps = {
  resume?: string[];
};

export default function ResumeSection({ resume }: ResumeProps) {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="InformationBox mb-0">
          <h3>Resume</h3>
          <div className="Informations DocumnetInfo">
            <div className="ProfileInfo">
              <article>
                <aside style={{ width: "100%" }}>
                  {resume && resume.length ? (
                    <div className="DocumnetBox">
                      <figcaption>
                        <span>
                          <img src={resume[0]} alt="Resume" />
                        </span>
                      </figcaption>
                    </div>
                  ) : (
                    <p>No resume uploaded.</p>
                  )}
                </aside>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
