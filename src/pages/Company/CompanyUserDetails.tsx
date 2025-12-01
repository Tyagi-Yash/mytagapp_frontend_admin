import InfoBox from "../../components/common/InfoBox";

export default function CompanyUserDetails() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Company</h4>
        </div>
        <InfoBox title="Company Info">
          <p>Company information</p>
        </InfoBox>
      </div>
    </div>
  );
}
