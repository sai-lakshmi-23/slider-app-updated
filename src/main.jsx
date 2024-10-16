import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/main.css"
import RouterConfig from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
)
