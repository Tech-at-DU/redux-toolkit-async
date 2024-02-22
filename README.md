# Redux Tool Kit Query 

This example started with Create React with the Redux Toolkit template. 

```
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

https://redux-toolkit.js.org/introduction/getting-started

This template uses Vite. So starting and running the app along with directory structure is a little a different. The project also uses type script. 

This example uses RTK Query which sets up RTK to load async data into the store. I added the SWAPI component which uses RTK Query to load data from https://swapi.dev. I commented the code in those files to hopefully explain what is going on. 

https://redux-toolkit.js.org/rtk-query/overview

## Try it yourself! 

Try it youself by following these steps: 
1. Take a look at features/quotes or features/swapi you'll recreate one of these with a different web api. 
2. Create a new folfer in features for your new slice. 
3. Add two new files, one for a component and another for the slice. 
4. In your slice, import createApi and fetchQuery. 
5. Use creatApi to define the new slice. Follow one of the examples. and set up the baseQuery, reducerPath, tagTypes, and enpoints. Note! The get... endpoint will be the hook! The query takes any parameters that need to be inlcuded in the query. Quotes uses query vars and SWAPI uses params. Consult one or the other depending on your Web API. 
6. Export the hook by making the name from the get... query you wrote and adding use...Query. For example getBagels becomes: useGetBagelsQuery -> use...GetBagels...Query. It's magic!
7. Now add this slice to your store. Open the store and import your your slice. Find the rootReducer and add your slice to combineReducers. This seems to make the actions and reducers like magic! 
8. In configureStore add your slice to the middleware array. Look at the example to see how this was done. NOTE! If you only have one slice you only need to concat once! 
9. Now make your component! Start by importing your api hook, useGetBagelsQuery in the example. Call it in react-query style. See the example. You'll need to pass any parameters required by your query! 
10. Handle isError, isLoading, and isSuccess, then use data to display the data loaded. This is a good spot to check and debug if the slice is error free. 

# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
