import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { ViewBox } from './ViewBox.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ViewBox>
      <App />
    </ViewBox>
  </React.StrictMode>
)
