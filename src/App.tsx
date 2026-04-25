import { useState } from 'react'
import './App.css'
import TodoPage from './views/TodoPage'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <h1>Taskly</h1>
      <TodoPage />
    </>
  )
}

export default App
