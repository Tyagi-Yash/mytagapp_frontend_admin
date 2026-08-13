import { Link } from "react-router-dom";
import type { User, Pagination } from "../../users/types";
import { rowNames } from "../constants";

export default function UserTable({
  data,
  pagination,
  onToggleActive,
  onBlockClick,
}: {
  data: User[];
  pagination: Pagination;
  onToggleActive: (id: string, v: boolean) => void;
  onBlockClick: (id: string) => void;
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
                <td>{u.userName}</td>
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
                        className="delete btn btn-danger btn-sm"
                        onClick={() => onBlockClick(u.id)}
                        aria-label={`Block ${u.name}`}
                        style={{
                          fontSize: '12px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontWeight: '600',
                          padding: '3px 12px',
                          borderRadius: '6px'
                        }}
                      >
                        <i className="fa fa-ban" style={{ fontSize: '11px' }} /> 
                        Block
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
