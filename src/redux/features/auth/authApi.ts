import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    registration:builder.mutation({
      query:(data)=>({
        url:"/signup",
        method:"POST",
        body:data
      })
    })
  })
})
export const {useRegistrationMutation} = authApi