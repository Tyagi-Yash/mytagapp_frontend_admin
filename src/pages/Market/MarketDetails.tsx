import InfoBox from "../../components/common/InfoBox";

export default function MarketDetails() {
  // TODO: fetch real details by id
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Marketplace Details</h4>
        </div>
        <InfoBox title="Product Details">
          <div className="ProfileInfo">
            <article>
              <aside>
                <p>
                  <strong>Product ID</strong> <span>12345</span>
                </p>
                <p>
                  <strong>Name</strong> <span>ABC Product</span>
                </p>
              </aside>
              <aside>
                <p>
                  <strong>Category</strong> <span>Category</span>
                </p>
                <p>
                  <strong>Seller</strong> <span>Seller Name</span>
                </p>
              </aside>
            </article>
          </div>
        </InfoBox>
      </div>
    </div>
  );
}
