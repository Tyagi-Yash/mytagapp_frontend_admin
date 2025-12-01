import InfoBox from "../../components/common/InfoBox";

export default function NotificationDetails() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Notification</h4>
        </div>
        <InfoBox title="Notification Detail">
          <p>Notification content here.</p>
        </InfoBox>
      </div>
    </div>
  );
}
