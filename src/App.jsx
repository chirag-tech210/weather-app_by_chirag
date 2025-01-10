import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'
import WeatherApp from './WeatherApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{backgroundColor:"#E8F3F2"}}>
        <WeatherApp/>
        </div>
    </>
  )
}

export default App
