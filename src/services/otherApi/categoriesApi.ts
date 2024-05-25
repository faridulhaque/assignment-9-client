import { apiSlice } from "../rootApi/apiSlice";

const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCats: builder.query({
      query: () => {
        const url = `/category`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["cats"],
    }),

    addCategory: builder.mutation({
      query: (body) => {
        const url = `/category/create`;
        const method = "POST";

        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: ["cats"],
    }),
  }),
});

export const { useGetAllCatsQuery, useAddCategoryMutation } = categoriesApi;
