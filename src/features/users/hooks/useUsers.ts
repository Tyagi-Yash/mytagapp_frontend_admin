import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useGetUsersPagedQuery, useUpdateUserMutation, useDeleteUserMutation } from "../usersApi";
import type { User } from "../types";

export function useUsers(initialFilter?: { query?: string; userType?: string; sortBy?: string }) {
  type UsersFilterPayload = {
    search?: string;
    status?: string;
    sortBy?: string;
  };

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const [appliedSearch, setAppliedSearch] = useState<string | undefined>(
    initialFilter?.query || undefined
  );
  const [appliedStatus, setAppliedStatus] = useState<string | undefined>(initialFilter?.userType);
  const [appliedSortBy, setAppliedSortBy] = useState<string | undefined>(initialFilter?.sortBy);

  const { data, isLoading, isFetching } = useGetUsersPagedQuery(
    {
      page,
      pageSize,
      search: appliedSearch || undefined,
      status: appliedStatus || undefined,
      sortBy: appliedSortBy || undefined,
    },
    { refetchOnMountOrArgChange: true }
  );

  const [updateUser] = useUpdateUserMutation();
  const [deleteUserApi] = useDeleteUserMutation();

  const users = data?.items ?? ([] as User[]);
  const pagination = data?.pagination ?? {
    totalUsers: 0,
    currentPage: page,
    totalPages: 0,
    pageSize,
  };

  const applyFilters = useCallback((payload: UsersFilterPayload) => {
    setAppliedSearch(payload.search || undefined);
    setAppliedStatus(payload.status);
    setAppliedSortBy(payload.sortBy);
    setPage(1);
  }, []);

  const gotoPage = useCallback(
    (p: number) => {
      if (p < 1 || p > (pagination.totalPages || 1)) return;
      setPage(p);
    },
    [pagination.totalPages]
  );

  const changePageSize = useCallback((ps: number) => {
    setPageSize(ps);
    setPage(1);
  }, []);

  const toggleActive = useCallback(
    async (id: string, v: boolean) => {
      try {
        const statusStr = v ? "active" : "inactive";
        await updateUser({ id, status: statusStr }).unwrap();
        toast.success("User status updated");
      } catch (err: any) {
        console.error(err);
        toast.error(err?.data?.message || "Failed to update user");
      }
    },
    [updateUser]
  );

  const deleteUser = useCallback(
    async (id: string | null) => {
      if (!id) return { ok: false };
      try {
        await deleteUserApi(id).unwrap();
        toast.success("User deleted");
        if (pagination.totalUsers - 1 <= (page - 1) * pageSize && page > 1) {
          setPage((p) => p - 1);
        }
        return { ok: true };
      } catch (err: any) {
        console.error(err);
        toast.error(err?.data?.message || "Failed to delete user");
        return { ok: false };
      }
    },
    [deleteUserApi, page, pageSize, pagination.totalUsers]
  );

  const memoUsers = useMemo(() => users as User[], [users]);

  return {
    users: memoUsers,
    pagination,
    isLoading,
    isFetching,
    applyFilters,
    gotoPage,
    changePageSize,
    toggleActive,
    deleteUser,
    appliedSearch,
    appliedStatus,
    appliedSortBy,
  };
}
