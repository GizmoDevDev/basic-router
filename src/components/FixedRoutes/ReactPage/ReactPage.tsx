import { useState } from 'react'
import reactLogo from '../../../assets/react.svg'
import '../style.css'
import {Link} from "react-router-dom";

function ReactPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/components/FixedRoutes/ReactPage/ReactPage.tsx</code> and save to test HMR
        </p>
        <button type="button">
          <Link to="/">Main page</Link>
        </button>
      </div>
      <p className="read-the-docs">
        Click on the React logos to learn more
      </p>
    </div>
  )
}

export default ReactPage
