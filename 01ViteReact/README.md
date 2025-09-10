# React project using Vite

- vite is just a bundler

## flow of the project => index.html -> main.jsx -> App.jsx

- in index.html we have a div with id root where our react app will be mounted
- in main.jsx we import react and react-dom and use createRoot to mount our App component to the root div in index.html, createRoot creates a virtual DOM tree and only updates the changed parts of the real DOM
- in App.jsx we define our main App component which is a functional component that returns JSX
we import and use the Luffy component in App.jsx


