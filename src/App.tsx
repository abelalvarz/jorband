import NavbarComponent from './components/NavbarComponent'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css"

function App() {
  return (
    <>
    <NavbarComponent/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
