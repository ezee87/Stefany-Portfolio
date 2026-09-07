import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Portfolio2026Page from './portfolio-2026/Portfolio2026Page.jsx'
import 'lenis/dist/lenis.css'
import './index.css'

// Lightweight path-based routing: keeps the existing landing untouched and
// isolates the new experience without adding a router dependency for a single route.
const isPortfolio2026 = window.location.pathname.replace(/\/+$/, '') === '/portfolio-2026'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isPortfolio2026 ? <Portfolio2026Page /> : <App />}
  </React.StrictMode>,
)
