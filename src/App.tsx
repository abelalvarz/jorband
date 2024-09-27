import NavbarComponent from './components/NavbarComponent'
import { Route, Routes } from 'react-router-dom'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css"
import Home from './pages/home/Home';
import SongList from './pages/SongList/SongList';
import Repertoire from './pages/Repertoire/Repertoire';

function App() {
  return (
    <>
    <NavbarComponent/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/lists" element={<SongList/>}/>
      <Route path="/repertoire" element={<Repertoire/>}/>
    </Routes>
    </>
  )
}

export default App
