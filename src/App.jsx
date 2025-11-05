import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Introduccion from './pages/Introduccion';
import Autenticacion from './pages/Autenticacion';
import Usuarios from './pages/Usuarios';
import Mascotas from './pages/Mascotas';
import Funcionalidades from './pages/Funcionalidades';
import Notificaciones from './pages/Notificaciones';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter basename="/manualUser">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="introduccion" element={<Introduccion />} />
          <Route path="autenticacion" element={<Autenticacion />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="mascotas" element={<Mascotas />} />
          <Route path="funcionalidades" element={<Funcionalidades />} />
          <Route path="notificaciones" element={<Notificaciones />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
