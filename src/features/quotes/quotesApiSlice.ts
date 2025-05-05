// Import the React-specific entry point for RTK Query's `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define the shape of a single quote
interface Quote {
  id: number
  quote: string
  author: string
}

// Define the expected response structure from the quotes API
interface QuotesApiResponse {
  quotes: Quote[]
  total: number
  skip: number
  limit: number
}

// Create an API slice using RTK Query
export const quotesApiSlice = createApi({
  // Specify the base query function and base URL
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/quotes" }),

  // Unique key in the Redux store for this slice
  reducerPath: "quotesApi",

  // Define tag types for caching and invalidation
  tagTypes: ["Quotes"],

  // Define available endpoints for this API slice
  endpoints: (build) => ({
    // Define a query to fetch quotes
    // First generic: the expected response type
    // Second generic: the query argument type (a number for `limit`)
    getQuotes: build.query<QuotesApiResponse, number>({
      // Query function constructs the request URL with a `limit` parameter
      query: (limit = 10) => `?limit=${limit}`,

      // Attach tags to the response for cache control
      providesTags: (result, error, limit) => [{ type: "Quotes", id: limit }],
    }),
  }),
})

// RTK Query auto-generates hooks based on endpoint names
// `getQuotes` becomes `useGetQuotesQuery`
export const { useGetQuotesQuery } = quotesApiSlice
