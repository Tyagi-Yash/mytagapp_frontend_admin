import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";

export const API_BASE = "https://konnectx.app/api/v1";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "User",
    "Auth",
    "Market",
    "Job",
    "Event",
    "Content",
    "ReportedUser",
    "Post",
    "Role",
    "SubAdmin",
    "StaticContent",
  ],
  endpoints: () => ({}),
});
