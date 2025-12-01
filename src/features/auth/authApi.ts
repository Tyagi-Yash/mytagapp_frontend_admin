import { baseApi } from "../api/baseApi";
import type { LoginRequest, LoginResponse } from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/admin/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: [{ type: "Auth", id: "LOGIN" }],
    }),
  }),
});

export const { useLoginMutation } = authApi;
