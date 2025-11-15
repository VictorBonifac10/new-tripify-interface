import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles.js'
import { Router } from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>,
)
