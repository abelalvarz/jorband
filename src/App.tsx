import NavbarComponent from './components/NavbarComponent'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import "primereact/resources/themes/lara-light-cyan/theme.css";

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
