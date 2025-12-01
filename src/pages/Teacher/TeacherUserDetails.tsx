import InfoBox from "../../components/common/InfoBox";
export default function TeacherUserDetails() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Teacher</h4>
        </div>
        <InfoBox title="Teacher Info">
          <p>Teacher details</p>
        </InfoBox>
      </div>
    </div>
  );
}
