import { Link } from "react-router-dom";
import TableList from "../../components/common/TableList";

export default function SubAdminManagement() {
  const data = [{ id: "1", name: "Sub Admin", email: "sub@admin.com", roles: "Editor" }];
  const cols = [
    { key: "id", title: "S.No." },
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "roles", title: "Roles" },
    {
      key: "action",
      title: "Action",
      render: (r: any) => (
        <Link to={`/sub-admin/${r.id}`} className="Blue">
          View
        </Link>
      ),
    },
  ];
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Sub Admin Management</h4>
        </div>
        <TableList columns={cols} data={data} />
      </div>
    </div>
  );
}
