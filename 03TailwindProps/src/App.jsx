import Card from '../components/Card'

function App() {
  const myObj = {
    username: "Sudarshan"
  }

  return (
    <>
    <h1 className='bg-sky-100'>Tailwind test</h1>
    {/* card component along with props */}
    <Card name="luffy" obj={myObj}/>
    <Card name="Zoro"/>
    </>
  )
}

export default App
