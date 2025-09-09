import Luffy from "./Luffy"

function App() {

  const username = "Sudarshan"
  return (
    // can return only one element
    // {} is user for evaluated expression -> cannot do operations and all , only final evaluated expression
    // because </> is basically a object and we dont do operation in object
    <>
      <h1>{username}'s favourite One Piece Character</h1>
      <Luffy/>
    </>
  )
}

export default App
