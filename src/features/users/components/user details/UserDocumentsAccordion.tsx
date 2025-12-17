import Accordion from "react-bootstrap/Accordion";
import type { UserProfileDetail } from "../../types";
import ResumeSection from "./ResumeSection";
import OtherDocumentsSection from "./OtherDocumentsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import VerificationsSection from "./VerificationsSection";

type Props = {
  user: UserProfileDetail;
};

export default function UserDocumentsAccordion({ user }: Props) {
  const { documents, education, experiences } = user;

  return (
    <div className="UserMultipleArea">
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Resume</Accordion.Header>
          <Accordion.Body>
            <ResumeSection resume={documents?.resume} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Certifications &amp; Other Uploads</Accordion.Header>
          <Accordion.Body>
            <OtherDocumentsSection otherDocuments={documents?.otherDocuments} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            <EducationSection education={education || []} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Work Experience</Accordion.Header>
          <Accordion.Body>
            <ExperienceSection experiences={experiences || []} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Verifications</Accordion.Header>
          <Accordion.Body>
            <VerificationsSection />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
