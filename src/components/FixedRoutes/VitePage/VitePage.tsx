import { useState } from 'react'
import viteLogo from '../../../assets/vite.svg'
import '../style.css'
import {Link} from "react-router-dom";

function VitePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/components/FixedRoutes/VitePage/VitePage.tsx</code> and save to test HMR
        </p>
        <button type="button">
          <Link to="/">Main page</Link>
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite logos to learn more
      </p>
    </div>
  )
}

export default VitePage
