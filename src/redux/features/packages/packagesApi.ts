import { apiSlice } from "../api/apiSlice";

export const packagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: () => ({
        url: "/package/get-top-three-popular-package",
        method: "GET", 
      }),
    }),
    createPackage:builder.mutation({
      query:(data)=>({
        url:"package/own-package/createpackage",
        method:"POST",
        body:data
      })
    })
  }),
});

export const { useGetPackagesQuery,useCreatePackageMutation } = packagesApi; 
