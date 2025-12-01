import { Link } from "react-router-dom";
import TableList from "../../components/common/TableList";

export default function Market() {
  const data = [
    {
      id: "1",
      productId: "12345",
      name: "ABC Product",
      category: "Category",
      seller: "Seller Name",
      sellerStatus: "Approved",
      totalProducts: 10,
    },
  ];

  const cols = [
    { key: "id", title: "S.No." },
    { key: "productId", title: "Product ID" },
    { key: "name", title: "Product name" },
    { key: "category", title: "Category" },
    { key: "seller", title: "Seller Name" },
    { key: "sellerStatus", title: "Seller Status" },
    { key: "totalProducts", title: "Total Products" },
    {
      key: "action",
      title: "Action",
      render: (r: any) => (
        <Link to={`/market/${r.id}`} className="Blue">
          View
        </Link>
      ),
    },
  ];

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Marketplace Management</h4>
        </div>
        <TableList columns={cols} data={data} />
      </div>
    </div>
  );
}
