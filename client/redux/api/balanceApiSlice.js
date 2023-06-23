import { apiSlice } from "./apiSlice";

export const balanceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: () => ({
        url: "/api/balance",
        method: "GET",
      }),
      providesTags: ["Balance"],
    }),
    addBalance: builder.mutation({
      query: (credentials) => ({
        url: "/api/balance",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    updateBalance: builder.mutation({
      query: (id, credentials) => ({
        url: `/api/balance/${id}`,
        method: "PATCH",
        body: { ...credentials },
      }),
    }),
    deleteBalance: builder.mutation({
      query: (id) => ({
        url: `/api/balance/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBalanceQuery,
  useAddBalanceMutation,
  useUpdateBalanceMutation,
  useDeleteBalanceMutation,
} = balanceApiSlice;
