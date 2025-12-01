import { baseApi } from "../api/baseApi";
import type { User, GetUsersParams, UsersPagedResp } from "./types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsersPaged: builder.query<UsersPagedResp, GetUsersParams | void>({
      query: (params) => {
        const pData: GetUsersParams = (params ?? {}) as GetUsersParams;

        const qs = new URLSearchParams();
        if (pData.page !== undefined) qs.set("page", String(pData.page));
        if (pData.pageSize !== undefined) qs.set("limit", String(pData.pageSize));
        if (pData.search !== undefined && pData.search !== "") qs.set("search", pData.search);
        if (pData.status !== undefined && pData.status !== "") qs.set("status", pData.status);
        if (pData.sortBy !== undefined && pData.sortBy !== "") qs.set("sortBy", pData.sortBy);

        const suffix = qs.toString() ? `?${qs.toString()}` : "";
        return `/admin/user/listing${suffix}`;
      },
      transformResponse: (response: any): UsersPagedResp => {
        const arr = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : [];

        const items: User[] = arr.map((u: any) => ({
          id: u._id ?? u.id,
          type: u.userSubType ?? u.userType ?? "student",
          name: u.name,
          email: u.email,
          phone: u.phone ? String(u.phone) : undefined,
          location: u.institution ?? undefined,
          status: u.status === "active",
          rawStatus: u.status ?? "inactive",
        }));

        const pagination = response?.pagination ?? {
          totalUsers: items.length,
          currentPage: 1,
          totalPages: 1,
          pageSize: items.length,
        };

        return { items, pagination };
      },
      providesTags: (result) =>
        result?.items && result.items.length
          ? [
              ...result.items.map((u) => ({ type: "User" as const, id: u.id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),

    updateUser: builder.mutation<User, { id: string; status: "active" | "inactive" }>({
      query: ({ id, status }) => ({
        url: `/admin/user/updatestatus?userId=${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "User", id },
        { type: "User", id: "LIST" },
      ],
    }),

    deleteUser: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/admin/user/updatestatus?userId=${id}`,
        method: "PUT",
        body: { status: "inactive", isaccountDeleted: true },
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "User", id },
        { type: "User", id: "LIST" },
      ],
    }),
  }),
});

export const { useGetUsersPagedQuery, useUpdateUserMutation, useDeleteUserMutation } = usersApi;
