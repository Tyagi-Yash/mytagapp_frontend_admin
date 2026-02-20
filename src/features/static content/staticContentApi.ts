import { baseApi } from "../api/baseApi";

export interface StaticContentResponse {
  _id: string;
  details: string;
  createdAt?: string;
  updatedAt?: string;
}

export const staticContentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query<StaticContentResponse, void>({
      query: () => `/user/static/privacyView`,
      transformResponse: (res: any): StaticContentResponse => {
        const item = Array.isArray(res?.data) ? res.data[0] : null;

        return {
          _id: item?._id ?? "",
          details: item?.details ?? "",
          createdAt: item?.createdAt,
          updatedAt: item?.updatedAt,
        };
      },
      providesTags: [{ type: "StaticContent", id: "PRIVACY" }],
    }),

    updatePrivacyPolicy: builder.mutation<{ message: string }, { details: string }>({
      query: (body) => ({
        url: `/user/static/privacyUpdate?id=69970ef81fe90ad7721d4089`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "StaticContent", id: "PRIVACY" }],
    }),

    getTermsConditions: builder.query<StaticContentResponse, void>({
      query: () => `/user/static/termView`,
      transformResponse: (res: any): StaticContentResponse => {
        const item = Array.isArray(res?.data) ? res.data[0] : null;

        return {
          _id: item?._id ?? "",
          details: item?.details ?? "",
          createdAt: item?.createdAt,
          updatedAt: item?.updatedAt,
        };
      },
      providesTags: [{ type: "StaticContent", id: "TERMS" }],
    }),

    updateTermsConditions: builder.mutation<{ message: string }, { details: string }>({
      query: (body) => ({
        url: `/user/static/termUpdate?id=69970e081fe90ad7721d4086`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "StaticContent", id: "TERMS" }],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyMutation,
  useGetTermsConditionsQuery,
  useUpdateTermsConditionsMutation,
} = staticContentApi;
