import { apiSlice } from "./apiSlice";

export const expenseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllExpense: builder.query({
      query: () => ({
        url: "/api/expenses",
        method: "GET",
      }),
      providesTags: ["Expense"],
    }),
    addExpense: builder.mutation({
      query: (credentials) => ({
        url: "/api/expenses",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Expense"],
    }),
    updateExpense: builder.mutation({
      query: (id, credentials) => ({
        url: `/api/expenses/${id}`,
        method: "PATCH",
        body: { ...credentials },
      }),
    }),
    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `/api/expenses/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllExpenseQuery,
  useAddExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expenseApiSlice;
