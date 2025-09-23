# React Router - Learning Notes 📚

## 🎯 What I Learned

### **Client-Side Routing**
- **Single Page Application (SPA)** navigation
- **No page refreshes** on route changes
- **URL-based navigation** with browser history
- **Dynamic route parameters**

### **React Router Ecosystem**
- **RouterProvider**: Makes router available to entire app
- **createBrowserRouter**: Creates router for web applications
- **Route**: Defines individual routes with path and component
- **Outlet**: Placeholder for child routes in layouts

## 🔧 Key Code Patterns

### **Router Setup**
```javascript
// Method 1: Object syntax
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: "", element: <Home/> },
      { path: "about", element: <About/> },
      { path: "contact", element: <Contact/> }
    ]
  }
])

// Method 2: JSX syntax (preferred)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="user/:id" element={<User/>}/>
      <Route 
        loader={githubInfoLoader}
        path="github" 
        element={<Github/>}
      />
    </Route>
  )
)
```

### **Layout Component with Outlet**
```javascript
function Layout() {
    return (
        <>
            <Header />
            <Outlet />    {/* Child routes render here */}
            <Footer />
        </>
    )
}
```

## 🧭 Navigation Components

### **Link vs NavLink**
```javascript
// Basic navigation (no active state)
<Link to="/about">About</Link>

// Navigation with active state styling
<NavLink 
  to="/about"
  className={({isActive}) =>
    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}`
  }
>
  About
</NavLink>
```

### **Why Link Instead of <a>**
```javascript
// ❌ Causes full page reload
<a href="/about">About</a>

// ✅ Client-side navigation (no reload)
<Link to="/about">About</Link>
```

## 🪝 Router Hooks

### **useParams - Dynamic URL Parameters**
```javascript
// Route definition: <Route path="user/:id" element={<User/>}/>
// URL: /user/123

function User() {
    const {id} = useParams()  // id = "123"
    return <div>User ID: {id}</div>
}
```

### **useLoaderData - Pre-loaded Data**
```javascript
// Loader function (runs before component)
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/NaruSudarshan')
    return response.json()
}

// Component using loaded data
function Github() {
    const data = useLoaderData()  // Data is already available
    return <div>Followers: {data.followers}</div>
}
```

## 📝 Key Concepts

### **Nested Routing**
```
/ (Layout)
├── "" → Home
├── about → About  
├── contact → Contact
├── user/:id → User
└── github → Github
```

### **Route Loaders**
- **Pre-fetch data** before component renders
- **Better performance** than useEffect
- **No loading states** needed
- **Automatic error handling**

### **Layout Pattern**
- **Consistent UI** (header/footer) across routes
- **Dynamic content** area with Outlet
- **Shared state** between routes

## 🎨 Navigation Patterns

### **Active Link Styling**
```javascript
<NavLink 
  to="/about"
  className={({isActive}) =>
    `base-classes ${isActive ? "active-classes" : "inactive-classes"}`
  }
>
```

### **Conditional Navigation**
```javascript
// Function receives isActive boolean
className={({isActive}) => 
  isActive ? "text-orange-700" : "text-gray-700"
}
```

## 🚀 Performance Benefits

### **Loader vs useEffect**
```javascript
// ❌ Old way - useEffect (slower)
function Github() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('/api/github').then(res => res.json()).then(setData)
  }, [])
  return data ? <div>{data.followers}</div> : <div>Loading...</div>
}

// ✅ New way - Loader (faster)
function Github() {
  const data = useLoaderData()  // Already loaded!
  return <div>{data.followers}</div>
}
```

### **Router Benefits**
- ✅ **No page refreshes** (faster navigation)
- ✅ **Browser history** support
- ✅ **Pre-loading data** with loaders
- ✅ **Code splitting** possible
- ✅ **SEO friendly** URLs

## 🐛 Common Patterns

### **Root Route**
```javascript
<Route path="" element={<Home/>}/>  // Empty path = home page
```

### **Dynamic Parameters**
```javascript
<Route path="user/:id" element={<User/>}/>  // :id is parameter
```

### **Loader Integration**
```javascript
<Route 
  loader={githubInfoLoader}      // Function that fetches data
  path="github" 
  element={<Github/>}
/>
```

## 🚀 Quick Tips
- Use **NavLink** for navigation menus (active states)
- Use **Link** for simple navigation
- **Loaders** are better than useEffect for route data
- **Outlet** enables layout patterns
- **useParams** for URL parameters

**Tech Stack**: React Router + SPA Navigation + Loaders Hooks
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