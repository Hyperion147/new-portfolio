import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cursor from './components/ui/Cursor.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cursor />
    <App />
  </StrictMode>,
)
