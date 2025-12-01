import InfoBox from "../../components/common/InfoBox";

export default function CategoryDetails() {
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Category Detail</h4>
        </div>
        <InfoBox title="Category Info">
          <article>
            <aside>
              <p>
                <strong>Name</strong> <span>ABC Category</span>
              </p>
            </aside>
          </article>
        </InfoBox>
      </div>
    </div>
  );
}
