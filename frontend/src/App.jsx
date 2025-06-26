import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-500 text-white p-6 rounded-xl text-center">
      Tailwind is working bro! 🎉
    </div>
  )
}

export default App
