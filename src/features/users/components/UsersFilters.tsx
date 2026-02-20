import { useEffect } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { filterByOption, sortByOption } from "../constants";

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

  const debounced = useDebounce(localSearch, 800);

  useEffect(() => {
    onApply({ search: debounced });
  }, [debounced]);

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
            {filterByOption.map((f) => (
              <option key={f.value} value={f.value}>
                {f.key}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group" style={{ width: 150 }}>
          <label>Sort By</label>
          <select
            className="form-control"
            value={localSort ?? ""}
            onChange={(e) => onSortChange(e.target.value === "" ? undefined : e.target.value)}
          >
            {sortByOption.map((f) => (
              <option key={f.value} value={f.value}>
                {f.key}
              </option>
            ))}
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

      {/* <div className="FilterRight">
        <div className="form-group">
          <label>Sort By Users</label>
          <select className="form-control">
            {sortByUsersOption.map((f) => (
              <option key={f.value} value={f.value}>
                {f.key}
              </option>
            ))}
          </select>
        </div>
      </div> */}
    </div>
  );
}
