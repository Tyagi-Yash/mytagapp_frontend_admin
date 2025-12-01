import { Link } from "react-router-dom";
import TableList from "../../components/common/TableList";

export default function Event() {
  const data = [
    { id: "1", name: "Industrial Expo", organizer: "ABC", date: "2025-06-12", location: "Noida" },
  ];
  const cols = [
    { key: "id", title: "S.No." },
    { key: "name", title: "Event Name" },
    { key: "organizer", title: "Organizer" },
    { key: "date", title: "Date" },
    { key: "location", title: "Location" },
    {
      key: "action",
      title: "Action",
      render: (r: any) => (
        <Link className="Blue" to={`/event/${r.id}`}>
          View
        </Link>
      ),
    },
  ];
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Event Management</h4>
        </div>
        <TableList columns={cols} data={data} />
      </div>
    </div>
  );
}
