import {useState} from 'react'

function App() {
  // let counter = 5

  // useState returns a variable and a function
  // changes are propagated using useState
  // once state changes react vl automatically update the counter value everywhere
  let [counter , setCounter] = useState(0)

  const addValue = () => {
    // counter = counter + 1 // this wont update in ui

    setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // on one click only one value is changed 
    // because useState sends changes in batches and send at once
    // all 4 +1 are treated as a batch and because we are doing the same job so its considered only once

    // but still if want to acheicve this we can do it using a call back function in setCounter
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    console.log(counter)
  }

  const removeValue = () => {
    // counter = counter - 1
    setCounter(counter-1)
    console.log(counter)
  }
  // react decides wn to update variable values in UI
  // in classic javascript we would take reference and use dom manipultaion
  // so counter as a varuable wont get updated in UI
  // hooks enable us to do this easily , each hook has a special function

  return (
    <>
    <h1>Basic Counter</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
