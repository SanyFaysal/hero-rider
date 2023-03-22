import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (formData) => {
        return {
          url: "/user/signup",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["User"],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    getMe: builder.query({
      query: (token) => ({
        url: `/user/me`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),

    getAllUsers: builder.query({
      query: ({ page, limit, ageRange, search }) => ({
        url: `/user/all?page=${page}&limit=${limit}&age[gte]=${ageRange.gte}&age[lte]=${ageRange.lte}&search=${search}`,
      }),
      providesTags: ["Users"],
    }),

    updateUsersRole: builder.mutation({
      query: (data) => ({
        url: "/user/all",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useGetAllUsersQuery,
  useGetMeQuery,
  useUpdateUsersRoleMutation,
} = authApi;
