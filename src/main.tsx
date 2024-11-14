import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
        <App />
  </HashRouter>
)
