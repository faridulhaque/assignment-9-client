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

    claimItem: builder.mutation({
      query: (body) => {
        const url = `/item/claim`;
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
    getFilteredItem: builder.query({
      query: (query) => {
        const url = `/items/filter?${query}`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
    }),

    getFoundItem: builder.query({
      query: (id) => {
        const url = `/found-item/${id}`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
    }),

    getLostItem: builder.query({
      query: (id) => {
        const url = `/lost-item/${id}`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
    }),

    updateFoundItem: builder.mutation({
      query: ({ body, id }) => {
        const url = `/found-item/update/${id}`;
        const method = "PUT";

        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: ["foundItems"],
    }),

    updateLostItem: builder.mutation({
      query: ({ body, id }) => {
        const url = `/lost-item/update/${id}`;
        const method = "PUT";

        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: ["lostItems"],
    }),
  }),
});

export const {
  useGetFoundItemQuery,
  useGetLostItemQuery,
  useReportLostItemMutation,
  useReportFoundItemMutation,
  useUpdateFoundItemMutation,
  useUpdateLostItemMutation,
  useGetFilteredItemQuery,
  useClaimItemMutation
} = itemApi;
