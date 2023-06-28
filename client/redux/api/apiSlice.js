import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout, setUser } from "../slices/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

/**
 * If session expires then, gets new `access-token` using the `refresh-token`
 */
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("🔃 sending refresh token");
    //send refresh token
    const refreshResult = baseQuery("/api/sessions/refresh", api, extraOptions);
    console.log("refresh: ", refreshResult);
    if (!refreshResult) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ token: refreshResult }));
      api.dispatch(setUser({ user }));

      //retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  console.log(result);
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Income", "Expense", "Balance"],
  endpoints: (builder) => ({}),
});
