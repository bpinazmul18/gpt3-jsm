import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './locales/i18n/i18n'

import './index.css'

// Create Root
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render App
root.render(<App />)
