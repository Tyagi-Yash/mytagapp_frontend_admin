import { baseApi } from "../api/baseApi";
import type {
  User,
  GetUsersParams,
  UsersPagedResp,
  UserProfileDetail,
  UserReportDetail,
} from "./types";

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
          isReported: u.isReported ?? "false",
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

    updateUser: builder.mutation<User, { id: string; status: "active" | "inactive" | "blocked" }>({
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

    getReportedUserDetail: builder.query<UserProfileDetail, string>({
      query: (userId) => `/admin/user/reportedUserDetail?userId=${userId}`,
      transformResponse: (res: any): UserProfileDetail => {
        const personal = res?.data?.personalData ?? {};
        const stats = res?.data?.stats ?? {};
        const analytics = res?.data?.analytics ?? {};
        const userIntro = personal.userIntro ?? {};
        const userSummary = personal.userSummary ?? {};
        const docs = personal.userDocuments ?? {};
        const experiences = Array.isArray(personal.userExperience) ? personal.userExperience : [];
        const education = Array.isArray(personal.userEducation) ? personal.userEducation : [];

        const firstExperience = experiences[0] ?? {};

        return {
          id: userIntro.userId ?? personal.userId ?? personal._id ?? "",
          fullName: userIntro.fullName ?? "",
          userType: userIntro.userType,
          userSubType: userIntro.userSubType,
          location: firstExperience.location ?? "",
          phone: userIntro.phone ? String(userIntro.phone) : undefined,
          email: userIntro.email ?? undefined,
          about: userSummary.about ?? "",
          skills: Array.isArray(userSummary.skills) ? userSummary.skills : [],
          goal: userSummary.goal ?? "",
          stats: {
            connections: stats.connections ?? 0,
            followers: stats.followers ?? 0,
            following: stats.following ?? 0,
          },
          analytics: {
            totalPosts: analytics.totalPosts ?? 0,
            totalTextPosts: analytics.totalTextPosts ?? 0,
            totalReels: analytics.totalReels ?? 0,
            totalVideos: analytics.totalVideos ?? 0,
            totalPhotos: analytics.totalPhotos ?? 0,
            totalReports: analytics.totalReports ?? 0,
            pinnedPosts: analytics.pinnedPosts ?? 0,
          },
          experiences: experiences.map((e: any) => ({
            title: e.title,
            employeeType: e.employeeType,
            companyName: e.companyName,
            startDate: e.startDate,
            endDate: e.endDate,
            location: e.location,
            description: e.description,
            isCurrentlyWorking: e.isCurrentlyWorking,
          })),
          education,
          documents: {
            resume: Array.isArray(docs.resume) ? docs.resume : [],
            schoolDocuments: Array.isArray(docs.schoolDocuments) ? docs.schoolDocuments : [],
            otherDocuments: Array.isArray(docs.otherDocuments) ? docs.otherDocuments : [],
          },
          raw: res?.data,
        };
      },
      providesTags: (_result, _error, userId) => [{ type: "User" as const, id: userId }],
    }),

    getUserReportDetail: builder.query<UserReportDetail, string>({
      query: (userId) => `/admin/user/reportDetail?userId=${userId}`,
      transformResponse: (res: any): UserReportDetail => {
        const reportsArr = Array.isArray(res?.reports) ? res.reports : [];
        return {
          userId: res?.userId ?? "",
          totalReports:
            typeof res?.totalReports === "number" ? res.totalReports : reportsArr.length,
          reports: reportsArr.map((r: any) => ({
            id: r._id ?? r.id,
            reason: r.reason ?? "",
            reportedAt: r.reportedAt ?? "",
            reportedBy: {
              id: r.reportedBy?._id ?? r.reportedBy?.id ?? "",
              name: r.reportedBy?.name,
              email: r.reportedBy?.email,
              userId: r.reportedBy?.userId,
            },
          })),
        };
      },
      providesTags: (_result, _error, userId) => [{ type: "User" as const, id: userId }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUsersPagedQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetReportedUserDetailQuery,
  useGetUserReportDetailQuery,
} = usersApi;
