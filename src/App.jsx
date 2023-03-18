import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'

import LayoutPublic from "./layouts/LayoutPublic";
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';

const App = () => { 
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<LayoutPublic />}>
        <Route element={<Inicio />} index></Route>
        <Route element={<Nosotros />} path="/nosotros"></Route>
        <Route element={<Contacto />} path="/contacto"></Route>
        <Route element={<Blog />} path="/blog"></Route>
      </Route>
    </Routes>
  </>)
}

export default App;