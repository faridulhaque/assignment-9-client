import { apiSlice } from "../rootApi/apiSlice";

const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => {
        const url = `/users/all`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["users"],

    }),

    getClaims: builder.query({
      query: () => {
        const url = `/claims`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
    }),

    banUser: builder.mutation({
      query: (body) => {
        const url = `/user/ban`;
        const method = "PUT";

        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: ["users"],

    }),

  }),
});

export const { useGetClaimsQuery, useGetUsersQuery, useBanUserMutation } =
  dashboardApi;
