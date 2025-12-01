import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";

import UserTable from "../../features/users/components/UserTable";
import DeleteModal from "../../components/common/DeleteModal";
import UsersFilters from "../../features/users/components/UsersFilters";
import PaginationControls from "../../features/users/components/PaginationControls";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch as useDispatchTyped } from "../../hooks/useAppDispatch";
import { setFilter } from "../../features/users/usersSlice";

import {
  useGetUsersPagedQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} from "../../features/users/usersApi";
import type { User } from "../../features/users/types";

export default function UsersPage() {
  const dispatch = useDispatchTyped();
  const usersUi = useAppSelector((s) => s.usersUi);

  const [localQuery, setLocalQuery] = useState(usersUi.filter.query || "");
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(usersUi.filter.userType);
  const [sortBy, setSortBy] = useState<string | undefined>(usersUi.filter.sortBy);

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const [appliedSearch, setAppliedSearch] = useState<string | undefined>(
    usersUi.filter.query || undefined
  );
  const [appliedStatus, setAppliedStatus] = useState<string | undefined>(usersUi.filter.userType);
  const [appliedSortBy, setAppliedSortBy] = useState<string | undefined>(usersUi.filter.sortBy);

  const { data, isLoading, isFetching } = useGetUsersPagedQuery(
    {
      page,
      pageSize,
      search: appliedSearch || undefined,
      status: appliedStatus || undefined,
      sortBy: appliedSortBy || undefined,
    },
    {
      refetchOnMountOrArgChange: true,
      // pollingInterval: 40_000
    }
  );

  const users = data?.items ?? [];
  const pagination = data?.pagination ?? {
    totalUsers: 0,
    currentPage: page,
    totalPages: 0,
    pageSize,
  };

  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const memoUsers = useMemo(() => users as User[], [users]);

  const applyFilters = useCallback(
    (payload: { search?: string; status?: string; sortBy?: string }) => {
      dispatch(
        setFilter({ query: payload.search ?? "", userType: payload.status, sortBy: payload.sortBy })
      );

      setAppliedSearch(payload.search || undefined);
      setAppliedStatus(payload.status);
      setAppliedSortBy(payload.sortBy);

      setPage(1);
    },
    [dispatch]
  );

  const handleToggleActive = useCallback(
    async (id: string, v: boolean) => {
      try {
        const statusStr = v ? "active" : "inactive";
        await updateUser({ id, status: statusStr }).unwrap();
        toast.success("User status updated");
      } catch (err: any) {
        console.error("update failed", err);
        toast.error(err?.data?.message || "Failed to update user");
      }
    },
    [updateUser]
  );

  const handleDelete = useCallback(
    async (id: string | null) => {
      if (!id) return;
      try {
        await deleteUser(id).unwrap();
        toast.success("User deleted");
        setIsDeleteModalOpen(false);
        setSelectedUser(null);

        if (pagination.totalUsers - 1 <= (page - 1) * pageSize && page > 1) {
          setPage((p) => p - 1);
        }
      } catch (err: any) {
        console.error("delete failed", err);
        toast.error(err?.data?.message || "Failed to delete user");
      }
    },
    [deleteUser, page, pageSize, pagination.totalUsers]
  );

  const gotoPage = useCallback(
    (p: number) => {
      if (p < 1 || p > (pagination.totalPages || 1)) return;
      setPage(p);
    },
    [pagination.totalPages]
  );

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
              onApply={(applied) => applyFilters(applied)}
              onReset={() => {
                setLocalQuery("");
                setSelectedStatus(undefined);
                setSortBy(undefined);
                dispatch(setFilter({ query: "", userType: undefined, sortBy: undefined }));
                setAppliedSearch(undefined);
                setAppliedStatus(undefined);
                setAppliedSortBy(undefined);
                setPage(1);
              }}
            />
          </div>

          {isLoading || isFetching ? (
            <div>Loading...</div>
          ) : (
            <UserTable
              data={memoUsers}
              pagination={{
                currentPage: pagination.currentPage,
                pageSize: pagination.pageSize,
                totalPages: pagination.totalPages,
                totalUsers: pagination.totalUsers,
              }}
              onToggleActive={handleToggleActive}
              onDeleteClick={(id) => {
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
            onPageSizeChange={(ps) => {
              setPageSize(ps);
              setPage(1);
            }}
          />
        </div>
      </div>

      {isDeleteModalOpen && (
        <DeleteModal
          title="Delete"
          message="Are you sure you want to delete this user?"
          onConfirm={() => handleDelete(selectedUser)}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </>
  );
}
