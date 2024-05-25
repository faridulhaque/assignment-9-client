import { apiSlice } from "../rootApi/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => {
        const url = `/register`;
        const method = "POST";

        return {
          url,
          method,
          body,
        };
      },
    }),

    login: builder.mutation({
      query: (body) => {
        const url = `/login`;
        const method = "POST";

        return {
          url,
          method,
          body,
        };
      },
    }),
    changePassword: builder.mutation({
      query: (body) => {
        const url = `/change-password`;
        const method = "PUT";

        return {
          url,
          method,
          body,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,
} = authApi;
