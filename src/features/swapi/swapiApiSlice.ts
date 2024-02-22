import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Here we are making a "slice" that works with async data. 
// Start with createApi and fetchBaseQuery.

// Create a new slice with createApi
// This takes an object with fields fo: baseQuery, reducerPath, tagTypes, endpoints
export const swapiApiSlice = createApi({
    // This base url for the query that returns data. 
    // I used SWAPI. This url requires a param at the end. This will be added at "endpoints"
    baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/people" }),
    // This is the reducer that handles this data
    reducerPath: "swapiApi",
    // I'm not sure what this does need to look it up. 
    tagTypes: ["SWAPI"],
    // Here is where the complete request is created. This is a function that 
    // receives a "build" as a parameter. 
    endpoints: build => ({
        // The name here is used to generate the hook below. 
        // NOTE! The first type here is the type for the data you are expecting! 
        // I cheated and typed it as any! 
        // Second is the argument type. Our query takes a number
        getSwapi: build.query<any, number>({
            // id is a parameter supplied by your action provides a string that is tacked
            // on to the end of the url. In this case it's the id of the character. 
            query: (id = 1) => `/${id}`,
            // Not sure how the tags are working here. 
            providesTags: (results, error, id) => [{ type: "SWAPI", id }]
        })
    })
})

// This is a hook used to load data from this api. 
// There is sme magic here where the name "getSwapi" is turned into "useGetSwapiQuery"
export const { useGetSwapiQuery, useLazyGetSwapiQuery } = swapiApiSlice