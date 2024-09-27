import NavbarComponent from './components/NavbarComponent'
import { Route, Routes } from 'react-router-dom'

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css"
import 'primeicons/primeicons.css';

import Home from './pages/Home/Home';
import SongList from './pages/SongList/SongList';
import Repertoire from './pages/Repertoire/Repertoire';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <NavbarComponent />
      <Logo/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<SongList />} />
        <Route path="/repertoire" element={<Repertoire />} />
      </Routes>
    </>
  )
}

export default App
