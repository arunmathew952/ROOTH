import ReactDDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <App />

  </BrowserRouter>
)
