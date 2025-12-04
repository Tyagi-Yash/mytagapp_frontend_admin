import { baseApi } from "../api/baseApi";
import type { ReportedUser, PostSummary, PostDetail, Paged, ReportedUsersPagedResp } from "./types";

export const contentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReportedUsers: builder.query<
      ReportedUsersPagedResp,
      { page?: number; limit?: number; search?: string; sortBy?: string }
    >({
      query: ({ page = 1, limit = 10, search = "", sortBy = "" } = {}) => {
        const qs = new URLSearchParams();
        if (page !== undefined) qs.set("page", String(page));
        if (limit !== undefined) qs.set("limit", String(limit));
        if (search) qs.set("search", search);
        if (sortBy) qs.set("sortBy", sortBy);
        const suffix = qs.toString() ? `?${qs.toString()}` : "";
        return `/admin/content/listUsersReport${suffix}`;
      },
      transformResponse: (res: any): ReportedUsersPagedResp => {
        const arr = Array.isArray(res?.data) ? res.data : [];
        const items: ReportedUser[] = arr.map((u: any) => ({
          id: u._id ?? u.id,
          name: u.name,
          email: u.email,
          phone: u.phone ? String(u.phone) : undefined,
          type: u.userType ?? u.userSubType ?? undefined,
          reportedCount:
            typeof u.reportedCount === "number" ? u.reportedCount : Number(u.reportedCount ?? 0),
        }));

        const pagination = res?.pagination ?? {
          totalUsers: items.length,
          currentPage: 1,
          totalPages: 1,
          pageSize: items.length,
        };

        return { items, pagination };
      },
      providesTags: (result) =>
        result?.items?.length
          ? [
              ...result.items.map((it) => ({ type: "ReportedUser" as const, id: it.id })),
              { type: "ReportedUser", id: "LIST" },
            ]
          : [{ type: "ReportedUser", id: "LIST" }],
    }),

    getUserReportedPosts: builder.query<
      Paged<PostSummary>,
      { userId: string; page?: number; limit?: number }
    >({
      query: ({ userId, page = 1, limit = 30 }) => {
        const qs = new URLSearchParams();
        qs.set("userId", userId);
        if (page !== undefined) qs.set("page", String(page));
        if (limit !== undefined) qs.set("limit", String(limit));
        return `/admin/content/listofUserReportedPost?${qs.toString()}`;
      },
      transformResponse: (res: any, _meta, arg): Paged<PostSummary> => {
        const postsArr: any[] = Array.isArray(res?.posts) ? res.posts : [];
        const items: PostSummary[] = postsArr.map((p) => ({
          id: p._id ?? p.id,
          postId: p._id ?? p.postId ?? p.displayId ?? p.id,
          type: p.postType ?? "post",
          postedAt: p.createdAt ?? p.updatedAt ?? "",
          // choose thumbnail: first image or first frame in video? Use imageUrl first then video/thumbnail fallback
          thumbnail: p.imageUrl && p.imageUrl.length ? p.imageUrl[0] : undefined,
          isReported: !!p.hasReports || (Array.isArray(p.reports) && p.reports.length > 0),
          // raw: p, // optional: include raw backend object if you need it in UI
        }));

        const total =
          typeof res?.pagination?.totalPosts === "number"
            ? res.pagination.totalPosts
            : items.length;
        const currentPage =
          typeof res?.pagination?.currentPage === "number"
            ? res.pagination.currentPage
            : (arg.page ?? 1);
        const pageSize = arg.limit ?? 30;
        const totalPages = Math.max(1, Math.ceil(total / pageSize));

        return {
          items,
          pagination: {
            total,
            currentPage,
            totalPages,
            pageSize,
          },
        };
      },
      providesTags: (result) =>
        result?.items?.length
          ? [
              ...result.items.map((it) => ({ type: "Post" as const, id: it.id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    getPostById: builder.query<PostDetail, string>({
      query: (id) => `/admin/content/detailPost?postId=${id}`,
      transformResponse: (res: any): PostDetail => {
        const p = res?.post ?? {};
        return {
          id: p._id ?? p.id,
          postId: p._id ?? p.postId,
          user: {
            id: p.userId?._id ?? p.userId ?? "",
            name: p.userId?.name ?? undefined,
            userId: p.userId?.userId ?? undefined,
            userName: p.userId?.userName ?? undefined,
            profileImage: p.userId?.profileImage ?? undefined,
          },
          imageUrl: Array.isArray(p.imageUrl) ? p.imageUrl : [],
          videoUrl: Array.isArray(p.videoUrl) ? p.videoUrl : [],
          reelUrl: Array.isArray(p.reelUrl) ? p.reelUrl : [],
          documentUrl: Array.isArray(p.documentUrl) ? p.documentUrl : [],
          postType: p.postType ?? "post",
          text: p.text ?? undefined,
          caption: p.caption ?? undefined,
          views: p.views ?? 0,
          likes: Array.isArray(p.likes) ? p.likes : [],
          likeCount: p.likeCount,
          comments: Array.isArray(p.comments) ? p.comments : [],
          createdAt: p.createdAt,
          updatedAt: p.updatedAt,
          reports: Array.isArray(p.reports) ? p.reports : [],
          hasReports: !!p.hasReports,
          isDeleted: !!p.isDeleted,
          isRepost: !!p.isRepost,
          // raw: p,
        };
      },
      providesTags: (_result, _error, arg) => [{ type: "Post" as const, id: arg }],
    }),

    actionOnPost: builder.mutation<
      any,
      { postId: string; type: "hide" | "unhide" | "delete"; userId: string }
    >({
      query: ({ postId, type, userId }) => ({
        url: `/admin/content/actionOnPost`,
        method: "POST",
        body: { postId, type, userId },
      }),
      invalidatesTags: (_res, _err, { postId }) => [
        { type: "Post" as const, id: postId },
        { type: "Post" as const, id: "LIST" },
      ],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetReportedUsersQuery,
  useGetUserReportedPostsQuery,
  useGetPostByIdQuery,
  useActionOnPostMutation,
} = contentApi;
