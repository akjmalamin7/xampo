import { apiSlice } from "../api/apiSlice";

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
          // API কল সফল হলে `queryFulfilled` থেকে ডেটা পাওয়া যাবে
          const result = await queryFulfilled;
      
          // API থেকে প্রাপ্ত টোকেন ও ব্যবহারকারীর তথ্য লোকাল স্টোরেজে সেভ করা
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result?.data?.data?.token, // টোকেন
              user: result?.data?.data?.data,  // ব্যবহারকারীর তথ্য
            })
          );
      
          // Redux state এ টোকেন ও ব্যবহারকারীর তথ্য আপডেট করা
          // dispatch(
          //   userLoggedIn({
          //     token: result.data.data.token,
          //     user: result.data.data.data,
          //   })
          // );
        } catch (err) {
          console.log(err);
        }
      }
    })
  })
})
export const {useRegistrationMutation} = authApi