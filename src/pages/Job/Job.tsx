import { Link } from "react-router-dom";
import TableList from "../../components/common/TableList";

export default function Job() {
  const data = [
    {
      id: "1",
      jobName: "UX Designer",
      company: "ABC Solutions",
      postedOn: "24-04-2025",
      type: "Full Time",
      budget: "6 LPA",
      openings: 3,
      status: "Active",
    },
  ];
  const cols = [
    { key: "id", title: "S.No." },
    { key: "jobName", title: "Job Name" },
    { key: "company", title: "Company name" },
    { key: "postedOn", title: "Posted On" },
    { key: "type", title: "Type" },
    { key: "budget", title: "Budget" },
    { key: "openings", title: "Openings" },
    { key: "status", title: "Status" },
    {
      key: "action",
      title: "Action",
      render: (r: any) => (
        <Link className="Blue" to={`/job/${r.id}`}>
          View
        </Link>
      ),
    },
  ];
  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Job Management</h4>
        </div>
        <TableList columns={cols} data={data} />
      </div>
    </div>
  );
}
