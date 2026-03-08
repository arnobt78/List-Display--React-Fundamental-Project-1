/* React and ReactDOM needed for createRoot and StrictMode */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
/* Global styles (variables, layout, buttons, .person, .container) */
import './index.css'

/* Mount point: index.html has <div id="root">; this replaces its content with the app */
ReactDOM.createRoot(document.getElementById('root')).render(
  /* StrictMode helps catch issues in development (e.g. impure renders) */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
