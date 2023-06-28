import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/api/users",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    profile: builder.query({
      query: () => ({
        url: "/api/users/me",
        method: "GET",
      }),
    }),
    onboarding: builder.mutation({
      query: (data) => ({
        url: "/api/users/onboarding",
        method: "PUT",
        body: { ...data },
      }),
    }),
  }),
});

export const { useSignupMutation, useProfileQuery, useOnboardingMutation } =
  authApiSlice;
