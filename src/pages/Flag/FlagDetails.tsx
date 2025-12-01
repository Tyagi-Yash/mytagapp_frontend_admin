import InfoBox from "../../components/common/InfoBox";

export default function FlagDetails() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Flag Detail</h4>
        </div>
        <InfoBox title="Flag">
          <p>Flag info</p>
        </InfoBox>
      </div>
    </div>
  );
}
