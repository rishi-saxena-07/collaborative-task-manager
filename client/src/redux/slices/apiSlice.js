import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// it is where our backen server is running
const API_URI="http://localhost:8800/api"

const baseQuery = fetchBaseQuery({baseUrl : API_URI})

export const apiSlice = createApi({
    baseQuery,
    tagTypes : [],
    endpoints : (builder) => ({}),
})