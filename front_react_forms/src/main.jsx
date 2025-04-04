import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home'
import App from './App'
import Teste from './components/teste'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
