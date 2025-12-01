import { useDebounce } from "../../../hooks/useDebounce";

export default function UsersFilters({
  initial,
  onSearchChange,
  onStatusChange,
  onSortChange,
  onApply,
  onReset,
}: {
  initial?: { search?: string; status?: string; sortBy?: string };
  onSearchChange: (v: string) => void;
  onStatusChange: (v?: string) => void;
  onSortChange: (v?: string) => void;
  onApply: (payload: { search?: string; status?: string; sortBy?: string }) => void;
  onReset: () => void;
}) {
  const localSearch = initial?.search ?? "";
  const localStatus = initial?.status;
  const localSort = initial?.sortBy;

  // local uncontrolled state is kept in parent; UsersFilters acts as controlled inputs via callbacks
  // But we still debounce the visible search: parent stores the visible value via onSearchChange
  const debounced = useDebounce(localSearch, 1000);

  // If you want to auto-apply on pause, you could call onApply here:
  // useEffect(() => { onApply({ search: debounced, status: localStatus, sortBy: localSort }); }, [debounced]);

  return (
    <div className="FilterArea">
      <div className="FilterLeft">
        <div className="form-group">
          <label>Search</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={localSearch}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Filter By</label>
          <select
            className="form-control"
            value={localStatus ?? "all"}
            onChange={(e) => onStatusChange(e.target.value === "all" ? undefined : e.target.value)}
          >
            <option value="all">All</option>
            <option value="blocked">blocked users</option>
            <option value="inactive">inactive users</option>
            <option value="active">active users</option>
          </select>
        </div>

        <div className="form-group" style={{ width: 150 }}>
          <label>Sort By</label>
          <select
            className="form-control"
            value={localSort ?? ""}
            onChange={(e) => onSortChange(e.target.value === "" ? undefined : e.target.value)}
          >
            <option value="">Select </option>
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
          </select>
        </div>

        <div className="form-group">
          <label>&nbsp;</label>
          <button
            className="Button"
            onClick={(e) => {
              e.preventDefault();
              onApply({ search: debounced, status: localStatus, sortBy: localSort });
            }}
          >
            Apply
          </button>

          <button
            className="Button Cancel"
            onClick={() => {
              onReset();
            }}
          >
            <i className="fa fa-refresh" />
          </button>
        </div>
      </div>

      <div className="FilterRight">
        <div className="form-group">
          <label>Sort By Users</label>
          <select className="form-control">
            <option>Select </option>
            <option>students</option>
            <option>professional</option>
            <option>teachers</option>
            <option>college</option>
            <option>company</option>
            <option>schools</option>
          </select>
        </div>
      </div>
    </div>
  );
}
