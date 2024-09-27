import NavbarComponent from './components/NavbarComponent'
import { Route, Routes } from 'react-router-dom'
import SongList from './pages/SongList/SongList';
import Repertoire from './pages/Repertoire/Repertoire';
import Logo from './components/Logo';
import HomePage from './pages/Home/Home';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css";
import 'primeicons/primeicons.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <Logo/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lists" element={<SongList />} />
        <Route path="/repertoire" element={<Repertoire />} />
      </Routes>
    </>
  )
}

export default App
