import { apiSlice } from "../rootApi/apiSlice";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => {
        const url = `/profile`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["profile"],
    }),

    getMyFoundItems: builder.query({
      query: () => {
        const url = `/my-found-items`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["foundItems"],
    }),

    getMyLostItems: builder.query({
      query: () => {
        const url = `/my-lost-items`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["lostItems"],
    }),

    updateProfile: builder.mutation({
      query: (body) => {
        const url = `/profile/update`;
        const method = "PUT";

        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: ["profile"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateProfileMutation,
  useGetMyLostItemsQuery,
  useGetMyFoundItemsQuery,
} = profileApi;
