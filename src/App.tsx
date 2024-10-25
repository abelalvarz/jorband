import { Route, Routes } from 'react-router-dom';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css";
import 'primeicons/primeicons.css';

import { HomePage } from './pages/home/HomePage';
import { Repertoire } from './pages/Repertoire/Repertoire';
import { SongList } from './pages/SongList/SongList';
import './theme/themeGlobal.css'
import { NavBar } from './components';
import { ToastProvider } from './context/ToastContext.tsx'

export const App = () => {
  return (
    <ToastProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lists" element={<SongList />} />
        <Route path="/repertoire" element={<Repertoire />} />
      </Routes>
    </ToastProvider>
  )
}

