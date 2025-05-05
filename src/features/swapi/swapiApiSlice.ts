import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// This defines an API slice for asynchronous data fetching using RTK Query.
// We use createApi and fetchBaseQuery to set it up.

export const swapiApiSlice = createApi({
    // baseQuery is the function that performs the data fetching.
    // We're using fetchBaseQuery with a base URL for the SWAPI (Star Wars API).
    // Note: this base URL expects a parameter at the end (e.g., /1, /2, etc.)
    baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/people" }),

    // The reducerPath is the key in the Redux store where this slice's state will be stored.
    reducerPath: "swapiApi",

    // tagTypes are used for cache invalidation and re-fetching. We're tagging responses as "SWAPI".
    tagTypes: ["SWAPI"],

    // The endpoints section defines individual operations that can be performed with this API slice.
    // It receives a "build" object used to define different types of queries and mutations.
    endpoints: (build) => ({
        // Define a query endpoint named "getSwapi".
        // The hook generated from this will be called useGetSwapiQuery.
        // The first type parameter is the expected response shape (set to any here).
        // The second is the type of the argument passed to the query (a number).
        getSwapi: build.query<any, number>({
            // The query function constructs the URL for the request.
            // The 'id' argument is used to fetch a specific character by appending it to the base URL.
            query: (id = 1) => `/${id}`,

            // providesTags marks the response with a tag, useful for caching and re-fetching.
            providesTags: (result, error, id) => [{ type: "SWAPI", id }]
        })
    })
})

// RTK Query automatically generates hooks based on the endpoint names.
// getSwapi -> useGetSwapiQuery, useLazyGetSwapiQuery
export const { useGetSwapiQuery, useLazyGetSwapiQuery } = swapiApiSlice
