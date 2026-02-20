import Accordion from "react-bootstrap/Accordion";
import {
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyMutation,
  useGetTermsConditionsQuery,
  useUpdateTermsConditionsMutation,
} from "../../features/static content/staticContentApi";
import { toast } from "react-toastify";
import StaticSection from "../../features/static content/components/StaticSection";

export default function StaticContent() {
  const { data: privacy, isLoading: privacyLoading } = useGetPrivacyPolicyQuery();

  const { data: terms, isLoading: termsLoading } = useGetTermsConditionsQuery();

  const [updatePrivacy] = useUpdatePrivacyPolicyMutation();
  const [updateTerms] = useUpdateTermsConditionsMutation();

  const handlePrivacySave = async (value: string) => {
    try {
      await updatePrivacy({ details: value }).unwrap();
      toast.success("Privacy Policy updated successfully");
    } catch {
      toast.error("Failed to update Privacy Policy");
    }
  };

  const handleTermsSave = async (value: string) => {
    try {
      await updateTerms({ details: value }).unwrap();
      toast.success("Terms & Conditions updated successfully");
    } catch {
      toast.error("Failed to update Terms");
    }
  };

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Static Content</h4>
        </div>

        <div className="UserMultipleArea">
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Privacy Policy</Accordion.Header>
              <Accordion.Body>
                <StaticSection
                  content={privacy?.details}
                  isLoading={privacyLoading}
                  onSave={handlePrivacySave}
                />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Terms & Conditions</Accordion.Header>
              <Accordion.Body>
                <StaticSection
                  content={terms?.details}
                  isLoading={termsLoading}
                  onSave={handleTermsSave}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
