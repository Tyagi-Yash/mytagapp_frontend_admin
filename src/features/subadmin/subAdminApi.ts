import { baseApi } from "../api/baseApi";
import type {
  GetRoleListingResp,
  GetRolesResp,
  RoleItem,
  SubAdminItem,
  ViewInfoResp,
} from "./types";

export const subAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableRoles: builder.query<RoleItem[], void>({
      query: () => `/admin/role/listAvailable`,
      transformResponse: (res: GetRolesResp) =>
        (Array.isArray(res?.data) ? res.data : []).map((r) => ({
          id: r._id,
          roleName: r.roleName,
        })),
      providesTags: (result) =>
        result && result.length
          ? [
              ...result.map((r) => ({ type: "Role" as const, id: r.id })),
              { type: "Role" as const, id: "LIST" },
            ]
          : [{ type: "Role" as const, id: "LIST" }],
    }),

    getRoleListing: builder.query<SubAdminItem[], { role: string }>({
      query: ({ role }) => `/admin/role/listing?role=${encodeURIComponent(role)}`,
      transformResponse: (res: GetRoleListingResp) =>
        (Array.isArray(res?.data) ? res.data : []).map((s: any) => ({
          id: s._id ?? s.id,
          fullName: s.fullName,
          email: s.email,
          password: s.password,
          phoneNumber: s.phoneNumber,
          role: s.role,
          status: s.status,
          permissions: s.permissions ?? {},
          createdAt: s.createdAt,
          updatedAt: s.updatedAt,
        })),
      providesTags: (result) =>
        result && result.length
          ? [
              ...result.map((r) => ({ type: "SubAdmin" as const, id: r.id })),
              { type: "SubAdmin" as const, id: "LIST" },
            ]
          : [{ type: "SubAdmin" as const, id: "LIST" }],
    }),

    viewSubAdmin: builder.query<SubAdminItem, { subadminId: string }>({
      query: ({ subadminId }) => `/admin/role/viewInfo?subadminId=${subadminId}`,
      transformResponse: (res: ViewInfoResp) => {
        const s = res?.data ?? {};
        return {
          id: s._id ?? s.id,
          fullName: s.fullName,
          email: s.email,
          password: s.password,
          phoneNumber: s.phoneNumber,
          role: s.role,
          status: s.status,
          permissions: s.permissions ?? {},
          createdAt: s.createdAt,
          updatedAt: s.updatedAt,
        };
      },
      providesTags: (_result, _error, arg) => [{ type: "SubAdmin" as const, id: arg.subadminId }],
    }),

    deleteRole: builder.mutation<any, { roleId: string }>({
      query: ({ roleId }) => ({
        url: `/admin/role/deleteRole?roleId=${roleId}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Role", id: "LIST" },
        { type: "SubAdmin", id: "LIST" },
      ],
    }),

    updateSubAdminStatus: builder.mutation<
      any,
      { subadminId: string; status: "active" | "inactive" }
    >({
      query: ({ subadminId, status }) => ({
        url: `/admin/role/updateRole?subadminId=${subadminId}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: (_res, _err, { subadminId }) => [
        { type: "SubAdmin", id: subadminId },
        { type: "SubAdmin", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAvailableRolesQuery,
  useGetRoleListingQuery,
  useViewSubAdminQuery,
  useDeleteRoleMutation,
  useUpdateSubAdminStatusMutation,
} = subAdminApi;
