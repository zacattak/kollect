import { useState } from 'react'


import './App.css'

function App() {
  // REACT HOOK
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>TIMER</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          minutes {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
