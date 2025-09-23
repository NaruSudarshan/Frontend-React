import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import {TodoForm,TodoItem} from './components'

function App() {

  // state to hold todos
  // we got this state in context provider
  const [todos, setTodos] = useState([])

  // functions to add, update, delete and toggle todos
  // these functions will be passed to context provider
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(),...todo}])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  // local storage 
  // only 2 methods : localStorage.setItem() and localStorage.getItem()
  // values are stored in string format only
  // we can use JSON.stringify() and JSON.parse() to store and retrieve objects and arrays

  // useEffect to get todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos && storedTodos.length > 0){
      setTodos(storedTodos)
    }
  }, [])

  // useEffect to store todos in local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  return (
    // provide todos and functions to context provider
    // names must be same as in context
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.length > 0 ? todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            )) : (
              <p className="text-center w-full text-gray-300">No todos available. Please add some todos.</p>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
