import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// stylesheet
import './index.css'

//page parts
import Nav from './pages/navigation/navigation.jsx'
import Home from './pages/home/home.jsx'
import Features from './pages/features/features.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Home/>
    <Features/>
  </StrictMode>,
)
