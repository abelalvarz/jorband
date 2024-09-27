import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { ToastProvider } from './context/ToastContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <ToastProvider>
        <App />
    </ToastProvider>
  </HashRouter>
)
