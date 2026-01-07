import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserPostViewer from './UserPostViewer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserPostViewer/>
    </>
  )
}

export default App
