import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useGetUserReportedPostsQuery } from "../../features/content/contentApi";
import type { PostSummary } from "../../features/content/types";

export default function ContentUserDetails() {
  const { id: userId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const { data, isLoading } = useGetUserReportedPostsQuery(
    {
      userId: userId || "",
      page,
      limit,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const posts: PostSummary[] = data?.items ?? [];
  const pagination = data?.pagination ?? {
    total: 0,
    currentPage: page,
    totalPages: 0,
    pageSize: limit,
  };

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="TitleBox ">
          <h4 className="Title">User Post</h4>

          <div style={{ marginLeft: "auto" }}>
            <button
              className="Back"
              onClick={() => navigate("/content")}
              aria-label="Back"
              title="Back"
            >
              Back
            </button>
          </div>
        </div>

        <div className="TableList">
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Post ID</th>
                <th>Post Type</th>
                <th>Posted At</th>
                <th>Thumb Nail</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5}>Loading...</td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={5}>No posts found</td>
                </tr>
              ) : (
                posts.map((p, idx) => {
                  const serial = (pagination.currentPage - 1) * pagination.pageSize + idx + 1;
                  return (
                    <tr key={p.id}>
                      <td>{String(serial).padStart(2, "0")}</td>
                      <td>
                        <Link
                          className="ms-0"
                          style={{ cursor: "pointer" }}
                          to={`/content/post/${p.id}`}
                        >
                          {p.postId}
                        </Link>
                      </td>

                      <td>
                        {p.type}
                        {p.isReported && (
                          <i
                            className="fa-solid fa-flag"
                            style={{ marginLeft: 8, color: "#c00" }}
                            title="Reported"
                          />
                        )}
                      </td>

                      <td>{p.postedAt ? new Date(p.postedAt).toLocaleString() : "—"}</td>

                      <td>
                        {p.thumbnail ? (
                          <img
                            src={p.thumbnail}
                            alt="thumb"
                            style={{ width: 60, height: 60, objectFit: "cover" }}
                          />
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="paginationMain">
          <select
            className="form-control"
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
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
