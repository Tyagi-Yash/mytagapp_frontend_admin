import InfoBox from "../../components/common/InfoBox";

export default function EventDetails() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Event Detail</h4>
        </div>
        <InfoBox title="Event Info">
          <article>
            <aside>
              <p>
                <strong>Event Name</strong> <span>Industrial Expo</span>
              </p>
            </aside>
          </article>
        </InfoBox>
      </div>
    </div>
  );
}
