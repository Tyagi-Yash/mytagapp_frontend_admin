import InfoBox from "../../components/common/InfoBox";
export default function StudentUserDetails() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Student</h4>
        </div>
        <InfoBox title="Student Info">
          <p>Student details</p>
        </InfoBox>
      </div>
    </div>
  );
}
