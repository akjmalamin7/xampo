import { apiSlice } from "@/redux/features/api/apiSlice";
import { userLoggedIn } from "@/redux/features/auth/authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    registration:builder.mutation({
      query:(data)=>({
        url:"/signup",
        method:"POST",
        body:data
      })
    }),
    login:builder.mutation({
      query:(data)=>({
        url:"/login",
        method:"POST",
        body:data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result)
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result?.data?.token,
              user: result?.data?.UserLogin?.data, 
            })
          );
          dispatch(
            userLoggedIn({
              token: result?.data?.token,
              user: result?.data?.UserLogin?.data, 
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    })
  })
})
export const {useRegistrationMutation, useLoginMutation} = authApi