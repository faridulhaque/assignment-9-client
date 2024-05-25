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

export const { useGetUserQuery, useUpdateProfileMutation } = profileApi;
