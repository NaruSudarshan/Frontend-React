import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook -> to take reference of anything
  const passwordRef = useRef(null)

  // this function should be run again and again based on the dependencies
  // here we use useCallback hook which lets u cache a function between re-renders
  // similar to memoization
  // useCallback(fn,dependencyArray)
  // we give useCallback the dependency array so that it can optimize the function wn it runs again and again 
  // useEffect is responsible to run the mehtod on change in dependencies
  // useCallback is responsible to cache and optimize 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*"
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      let char = str.charAt(index)
      pass += char
    }
    setPassword(pass)

  }, [length, number, character, setPassword])

  // run the function if anything changes in the dependency array
  useEffect(() => {
    passwordGenerator()
  },[length, number, character, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //this just higlights the test on copy
    passwordRef.current?.setSelectionRange(0, 100); // ranged select
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={character}
            id="characterInput"
            onChange={() => {
              setCharacter((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
