import { apiSlice } from "../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getServices:builder.query({
      query:()=>({
        url:"/service/getallservices",
        method:"GET"
      })
    })
  })
})
export const {useGetServicesQuery} = serviceApi