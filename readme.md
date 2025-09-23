# Libraries
## react
- react-dom -> web
- react-native -> mobile

# Virtual DOM
- react doesnt use virtual DOM anymore
- createRoot creates a new DOM tree , only updates the changed parts not all of it
- Reconciliation is the algorithm behind what we call virtual DOM

## React fibre
[article](https://github.com/acdlite/react-fiber-architecture)
- how often should react update the DOM by comparing the virtual DOM with the real DOM
- using keys to identify element in a list is done to optimize the reconciliation process so that react can easily identify which elements have changed 

## Redux
- state management library for JS apps
## react-redux
- official react binding for redux