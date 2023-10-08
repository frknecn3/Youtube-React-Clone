import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { YoutubeProvider } from './context/youtubeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <YoutubeProvider>
    <App />
    </YoutubeProvider>
)
