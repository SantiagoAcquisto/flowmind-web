import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FlowMind from './FlowMind.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlowMind />
  </StrictMode>,
)
