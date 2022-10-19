import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ViteReactPage from "./components/FixedRoutes/ViteReactPage/ViteReactPage";
import VitePage from "./components/FixedRoutes/VitePage/VitePage";
import ReactPage from "./components/FixedRoutes/ReactPage/ReactPage";
import {DynamicRoute} from "./components/DinamicRoute/DynamicRoute";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViteReactPage />}/>
        <Route path="/vite" element={<VitePage />}/>
        <Route path="/react" element={<ReactPage />}/>
        <Route path="/hello/:name" element={<DynamicRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
