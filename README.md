# Redux Tool Kit Query 

This example started with Create React with the Redux Toolkit template. 

```
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

https://redux-toolkit.js.org/introduction/getting-started

This template uses Vite. So starting and running the app along with directory structure is a little a different. The project also uses type script. 

This example uses RTK Query which sets up RTK to load async data into the store. I added the SWAPI component which uses RTK Query to load data from https://swapi.dev. I commented the code in those files to hopefully explain what is going on. 

https://redux-toolkit.js.org/rtk-query/overview

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
