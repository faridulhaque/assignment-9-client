import { apiSlice } from "../rootApi/apiSlice";

const itemApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    reportLostItem: builder.mutation({
      query: (body) => {
        const url = `/item/lost`;
        const method = "POST";

        return {
          url,
          method,
          body,
        };
      },
    }),

    reportFoundItem: builder.mutation({
      query: (body) => {
        const url = `/item/found`;
        const method = "POST";

        return {
          url,
          method,
          body,
        };
      },
    }),

    getRecentLostItem: builder.query({
      query: () => {
        const url = `/items/lost/recent`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
    }),
  }),
});

export const { useReportLostItemMutation, useReportFoundItemMutation } =
  itemApi;
