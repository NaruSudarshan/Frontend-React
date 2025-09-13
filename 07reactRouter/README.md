# React Router

## Hooks
- useParams → Access dynamic URL parameters.
- useLoaderData → Access data returned by a route’s loader function.

## Core Components
- RouterProvider → Makes the router available to your app.
- Route → Defines a route (props: path, element, loader?).
- Outlet → Placeholder where nested/child routes render.

## Router Creation
- createBrowserRouter → Creates a router for web apps.
- createRoutesFromElements → Build routes directly from JSX <Route> elements.

## Navigation
- Link → Client-side navigation (avoids full page reload unlike a-tag).
- NavLink → Like Link, but automatically applies an active class/style when the route matches.