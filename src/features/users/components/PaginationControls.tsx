export default function PaginationControls({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  onPageChange: (p: number) => void;
  onPageSizeChange: (ps: number) => void;
}) {
  const pages = Array.from({ length: Math.max(1, totalPages) });

  return (
    <div className="paginationMain" style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <select
        className="form-control"
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        <option value={10}>Show 10 items per page</option>
        <option value={20}>Show 20 items per page</option>
        <option value={30}>Show 30 items per page</option>
        <option value={50}>Show 50 items per page</option>
      </select>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          Prev
        </button>

        {pages.map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
