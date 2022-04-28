This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

## Topics:

### 1. Routing
    - Page based routing
    - Nested routes
    - Dynamic routes
    - Catch all routes
    - Link component
    - Custom 404 page

### 2. Pre-rendering & Data Fetching
    a. Static Generation
        - Without data
        - With data
        - Incremental static generation
        - Dynamic parameters when fetching data
    b. Server-side Rendering
        - Data fetching
    
    - Client side data  fetching
    - Combining pre-rendering with client-side data fetching


### getStaticprops

- getStaticProps runs only on the server side.

- The function will never run client-side.

- The code you write inside getStaticProps won't even be included in the JS bundle that is sent to browser.

- We can write server-side code directly in getStaticProps.

- Accessing the file system using the fs module or querying a database can be done inside getStaticProps.

- We also dont't have to worry about including API keys is getStaticProps as that won't make it to the browser.

- getStaticProps is allowed only in a page and cannot be run from regular component file.

- It is used only for pre-rendering and not client-side data fetching.

- getStaticProps should return an object and object should contain a props key which is an object.

- getStaticProps will run at build time.

- During development, getStaticProps run on every request.


### Link Pre-fetching 

- When a page with getStaticProps is pre-rendered at build time, in addition to the HTML file, Next.js generates a JSON file holding the result of running getStaticProps.

- The JSON file will be used in client-side routing throught next/link, or next/router.

- When you navigate to page that's pre-rendered using getStaticProps, Next.js fetches the JSON file (pre-computed at build time) and uses it as the props to create the page component client-side.

- Client-side page transitions will not call getStaticProps as only the exported JSON is used.


### getStaticPaths fallback

1. false
   - The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
   - If fallback is set to false, then any paths not returned by getStaticProps will result in 404 page.

2. true
    - The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
    - The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a "fallback" version of the page ont the first request to such a path.
    - In the background, Next.js will statically generate the requested path HTML and JSON. This includes running getStaticProps.
    - When that's done, the browser receives the JSON for the generated path. This will be used to automatically render the page with the required props. From the user's perspective, the page will be swapped from the fallback page to the full page.
    - At the same time, Next.js kepps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at the build time.