import { Route, Routes } from 'react-router-dom';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import './theme/themeGlobal.css'
import { HomePage } from '@/Home/HomePage';
import { SongList } from '@/PlayList/UI/PlayList';
import { Repertoire } from '@/Repertoire/UI/Repertoire';
import { ToastProvider } from './context/ToastContext';
import { NavBar } from './components';


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

