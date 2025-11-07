import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './styles.css'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Example for semi-bold

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
