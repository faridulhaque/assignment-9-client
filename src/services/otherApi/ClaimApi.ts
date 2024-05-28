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

    getClaimers: builder.query({
      query: (id:string) => {
        const url = `/claimers/${id}`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["claimers"],
    }),


  }),
});

export const { useGetMyClaimsQuery,  useGetClaimersQuery} =
  claimApi;
