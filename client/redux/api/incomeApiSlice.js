import { apiSlice } from "./apiSlice";

export const incomeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllIncome: builder.query({
      query: () => ({
        url: "/api/incomes",
        method: "GET",
      }),
      providesTags: ["Income"],
    }),
    addIncome: builder.mutation({
      query: (credentials) => ({
        url: "/api/incomes",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Income"],
    }),
    updateIncome: builder.mutation({
      query: (id, credentials) => ({
        url: `/api/incomes/${id}`,
        method: "PATCH",
        body: { ...credentials },
      }),
    }),
    deleteIncome: builder.mutation({
      query: (id) => ({
        url: `/api/incomes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllIncomeQuery,
  useAddIncomeMutation,
  useUpdateIncomeMutation,
  useDeleteIncomeMutation,
} = incomeApiSlice;
