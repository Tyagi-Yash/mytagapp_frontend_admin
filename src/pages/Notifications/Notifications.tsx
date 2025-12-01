import { Link } from "react-router-dom";
import TableList from "../../components/common/TableList";

export default function Notifications() {
  const data = [{ id: "1", title: "New Message", type: "Info", date: "2025-04-20" }];
  const cols = [
    { key: "id", title: "S.No." },
    { key: "title", title: "Title" },
    { key: "type", title: "Type" },
    { key: "date", title: "Date" },
    {
      key: "action",
      title: "Action",
      render: (r: any) => (
        <Link to={`/notifications/${r.id}`} className="Blue">
          View
        </Link>
      ),
    },
  ];
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Notifications</h4>
        </div>
        <TableList columns={cols} data={data} />
      </div>
    </div>
  );
}
