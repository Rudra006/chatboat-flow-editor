import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import '@xyflow/react/dist/style.css';


import reducer from './store/reducer.js'
import { configureStore } from '@reduxjs/toolkit'

const store= configureStore({reducer});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
