import { apiSlice } from "../api/apiSlice";

export const courseTypesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourseTypes: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});
export const {useGetCourseTypesQuery} = courseTypesApi