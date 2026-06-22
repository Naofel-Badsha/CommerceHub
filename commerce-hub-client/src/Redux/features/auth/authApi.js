import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../Utils/getBaseUrl'

//--- query: get methods
//--- mutation: post, put, patch, delete

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/auth`,
        credentials: 'include'
    }),
    
     endpoints: (builder) =>({
        registerUser: builder.mutation({
            query: (newUser) => ({
                url: "/register"
            })
        })
     })
})

