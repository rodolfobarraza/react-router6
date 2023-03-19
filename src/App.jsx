import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'

import LayoutPublic from "./layouts/LayoutPublic";
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => { 
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<LayoutPublic />}>
        <Route element={<Inicio />} index></Route>
        <Route element={<Nosotros />} path="/nosotros"></Route>
        <Route element={<Contacto />} path="/contacto"></Route>
        <Route element={<Blog />} path="/blog"></Route>
        <Route element={<BlogDetails />} path="/blog/:id"></Route>
        { /* <Route element={<NotFound />} path="*"></Route> */ } { /* Si se coloca acá se mantiene con el layout del sitio completo */ }
      </Route>
      <Route element={<NotFound />} path="*"></Route> { /* Si se coloca acá se saca del layout, como una página independiente */ }
    </Routes>
  </>)
}

export default App;