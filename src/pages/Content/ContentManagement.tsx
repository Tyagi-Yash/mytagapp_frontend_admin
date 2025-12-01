import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetReportedUsersQuery } from "../../features/content/contentApi";
import { type ReportedUser } from "../../features/content/types";

export default function ContentManagement() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const { data, isLoading, isFetching } = useGetReportedUsersQuery(
    {
      page,
      limit: pageSize,
      search: search || undefined,
      sortBy: undefined,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const users: ReportedUser[] = data?.items ?? [];
  const pagination = data?.pagination ?? {
    totalUsers: 0,
    currentPage: page,
    totalPages: 0,
    pageSize,
  };

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox">
          <h4 className="Title">Content Management</h4>
        </div>

        <div className="Small-Wrapper">
          <div className="FilterArea">
            <div className="FilterLeft">
              <div className="form-group">
                <label>Search</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Sort By Users</label>
                <select
                  className="form-control"
                  onChange={() => {
                    setPage(1);
                  }}
                >
                  <option value="">Select</option>
                  <option value="students">students</option>
                  <option value="professional">professional</option>
                  <option value="teachers">teachers</option>
                  <option value="college">college</option>
                  <option value="company">company</option>
                  <option value="schools">schools</option>
                </select>
              </div>

              <div className="form-group">
                <label>&nbsp;</label>
                <button
                  className="Button"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(1);
                  }}
                  disabled={isFetching}
                >
                  Apply
                </button>

                <button
                  className="Button Cancel"
                  onClick={() => {
                    setSearch("");
                    setPage(1);
                  }}
                >
                  <i className="fa fa-refresh" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {isLoading || isFetching ? (
          <div>Loading...</div>
        ) : (
          <div className="TableList">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>User Type</th>
                  <th>Name</th>
                  <th>E-mail address</th>
                  <th>Phone Number</th>
                  <th>Reports</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={6}>No users found</td>
                  </tr>
                ) : (
                  users.map((u, idx) => {
                    const serial = (pagination.currentPage - 1) * pagination.pageSize + idx + 1;
                    return (
                      <tr key={u.id}>
                        <td>{String(serial).padStart(2, "0")}</td>
                        <td style={{ textTransform: "capitalize" }}>{u.type ?? "user"}</td>
                        <td>
                          <Link
                            className="ms-0"
                            style={{ cursor: "pointer" }}
                            to={`/content/${u.id}`}
                          >
                            {u.name}
                          </Link>
                        </td>
                        <td>{u.email ?? "—"}</td>
                        <td>{u.phone ?? "—"}</td>
                        <td>{u.reportedCount ?? 0}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="paginationMain">
          <select
            className="form-control"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={10}>Show 10 items per page</option>
            <option value={20}>Show 20 items per page</option>
            <option value={30}>Show 30 items per page</option>
            <option value={50}>Show 50 items per page</option>
          </select>

          <div className="pagination">
            <button
              disabled={pagination.currentPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Prev
            </button>

            {Array.from({ length: pagination.totalPages || 1 }).map((_, i) => (
              <button
                key={i}
                className={pagination.currentPage === i + 1 ? "active" : ""}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={pagination.currentPage === pagination.totalPages}
              onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
