import { apiSlice } from "../api/apiSlice";

export const packagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    packages: builder.query({
      query: () => ({
        url: "/package/get-top-three-popular-package",
        method: "GET", 
      }),
    }),
  }),
});

export const { usePackagesQuery } = packagesApi; 
