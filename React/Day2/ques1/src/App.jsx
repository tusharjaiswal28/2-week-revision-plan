import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoSaveNotes from './AutoSeveNotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Notes App</h1>
      <AutoSaveNotes />
    </>
  )
}

export default App
