import { useState } from "react";
import UserTable from "../../features/users/components/UserTable";
import DeleteModal from "../../components/common/DeleteModal";
import ConfirmModal from "../../components/common/ConfirmModal";
import UsersFilters from "../../features/users/components/UsersFilters";
import PaginationControls from "../../features/users/components/PaginationControls";
import { useUsers } from "../../features/users/hooks/useUsers";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch as useDispatchTyped } from "../../hooks/useAppDispatch";
import { setFilter } from "../../features/users/usersSlice";

export default function UsersPage() {
  const dispatch = useDispatchTyped();
  const usersUi = useAppSelector((s) => s.usersUi);

  const [localQuery, setLocalQuery] = useState(usersUi.filter.query || "");
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(usersUi.filter.userType);
  const [sortBy, setSortBy] = useState<string | undefined>(usersUi.filter.sortBy);

  const {
    users,
    pagination,
    isLoading,
    isFetching,
    applyFilters,
    gotoPage,
    changePageSize,
    toggleActive,
    deleteUser,
  } = useUsers({
    query: usersUi.filter.query,
    userType: usersUi.filter.userType,
    sortBy: usersUi.filter.sortBy,
  });

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [statusTargetUser, setStatusTargetUser] = useState<string | null>(null);
  const [statusTargetValue, setStatusTargetValue] = useState<boolean | null>(null);

  const handleApply = (applied: { search?: string; status?: string; sortBy?: string }) => {
    dispatch(
      setFilter({
        query: applied.search ?? "",
        userType: applied.status,
        sortBy: applied.sortBy,
      })
    );
    applyFilters(applied);
  };
  const handleReset = () => {
    setLocalQuery("");
    setSelectedStatus(undefined);
    setSortBy(undefined);
    dispatch(setFilter({ query: "", userType: undefined, sortBy: undefined }));
    applyFilters({});
  };

  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">User Management</h4>
          </div>

          <div className="Small-Wrapper">
            <UsersFilters
              initial={{ search: localQuery, status: selectedStatus, sortBy }}
              onSearchChange={(val) => setLocalQuery(val)}
              onStatusChange={(val) => setSelectedStatus(val)}
              onSortChange={(val) => setSortBy(val)}
              onApply={handleApply}
              onReset={handleReset}
            />
          </div>

          {isLoading || isFetching ? (
            <div>Loading...</div>
          ) : (
            <UserTable
              data={users}
              pagination={pagination}
              onToggleActive={(id, val) => {
                setStatusTargetUser(id);
                setStatusTargetValue(val);
                setIsStatusModalOpen(true);
              }}
              onBlockClick={(id) => {
                setSelectedUser(id);
                setIsDeleteModalOpen(true);
              }}
            />
          )}

          <PaginationControls
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            pageSize={pagination.pageSize}
            onPageChange={(p) => gotoPage(p)}
            onPageSizeChange={(ps) => changePageSize(ps)}
          />
        </div>
      </div>

      {isDeleteModalOpen && (
        <DeleteModal
          title="Block User"
          message="If you block this user all data related to this user will be deleted permanently"
          onConfirm={async () => {
            await deleteUser(selectedUser);
            setIsDeleteModalOpen(false);
            setSelectedUser(null);
          }}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}

      {isStatusModalOpen && statusTargetUser !== null && statusTargetValue !== null && (
        <ConfirmModal
          title="Change User Status"
          message={`Are you sure you want to ${statusTargetValue ? "activate" : "deactivate"} this user?`}
          onConfirm={async () => {
            await toggleActive(statusTargetUser, statusTargetValue);
            setIsStatusModalOpen(false);
            setStatusTargetUser(null);
            setStatusTargetValue(null);
          }}
          onClose={() => {
            setIsStatusModalOpen(false);
            setStatusTargetUser(null);
            setStatusTargetValue(null);
          }}
        />
      )}
    </>
  );
}
