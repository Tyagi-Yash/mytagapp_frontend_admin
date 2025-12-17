import { Link } from "react-router-dom";
import type { User, Pagination } from "../../users/types";
import { rowNames } from "../constants";

export default function UserTable({
  data,
  pagination,
  onToggleActive,
  onDeleteClick,
}: {
  data: User[];
  pagination: Pagination;
  onToggleActive: (id: string, v: boolean) => void;
  onDeleteClick: (id: string) => void;
}) {
  if (!data?.length) {
    return <div className="TableList">No users found</div>;
  }

  return (
    <div className="TableList">
      <table>
        <thead>
          <tr>
            {rowNames.map((n) => (
              <th key={n}>{n}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((u, idx) => {
            const serial = (pagination.currentPage - 1) * pagination.pageSize + idx + 1;
            return (
              <tr key={u.id}>
                <td>{String(serial).padStart(2, "0")}</td>
                <td style={{ textTransform: "capitalize" }}>{u.type}</td>
                <td>
                  <Link to={`/users/details/${u.id}`} className="ms-0">
                    {u.name}
                  </Link>
                  {u.isReported && (
                    <Link to={`/users/report/${u.id}`} className="ms-0">
                      <i className="fa-solid fa-flag"></i>
                    </Link>
                  )}
                </td>
                <td>{u.email}</td>
                <td>{u.phone ?? "—"}</td>
                <td>{u.location ?? "—"}</td>
                <td>
                  <div className="Actions">
                    <label className="Switch" title="Active">
                      <input
                        type="checkbox"
                        checked={!!u.status}
                        onChange={(e) => onToggleActive(u.id, e.target.checked)}
                      />
                      <span className="slider" />
                    </label>

                    <div>
                      <button
                        className="Red"
                        onClick={() => onDeleteClick(u.id)}
                        aria-label={`Delete ${u.name}`}
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
