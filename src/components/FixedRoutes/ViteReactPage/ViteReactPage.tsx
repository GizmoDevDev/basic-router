import { useState } from 'react'
import reactLogo from '../../../assets/react.svg'
import viteLogo from '../../../assets/vite.svg'
import '../style.css'
import {Link} from "react-router-dom";

function ViteReactPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/components/FixedRoutes/ViteReactPage/ViteReactPage.tsx</code> and save to test HMR
        </p>
        <button type="button">
          <Link to="/vite">Vite</Link>
        </button>
        <button type="button">
          <Link to="/react">React</Link>
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default ViteReactPage
