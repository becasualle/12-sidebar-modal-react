import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context';
ReactDOM.render(
  <React.StrictMode>
    {/* use wrapping provider to use context data from context.js */}
    <AppProvider>
      <App />
    </AppProvider>

  </React.StrictMode>,
  document.getElementById('root')
)
