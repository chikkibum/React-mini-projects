import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' text-center text-4xl text-white'
    style={{backgroundColor: 'black'}}>

      <h1 >password generator</h1>
    </div>
    </>
  )
}

export default App
