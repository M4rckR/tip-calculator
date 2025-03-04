import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppCalculator } from './AppCalculator'
import './global.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppCalculator />
  </StrictMode>,
)
