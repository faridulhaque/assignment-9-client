import { apiSlice } from "../rootApi/apiSlice";

const claimApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getMyClaims: builder.query({
      query: () => {
        const url = `/my-claims`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["claims"],
    }),


  }),
});

export const { useGetMyClaimsQuery } =
  claimApi;
