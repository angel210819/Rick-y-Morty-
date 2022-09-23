import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Personajes from "../components/Personajes"
import Footer from "../components/Footer"
import Main from "../components/Main"
import NavBar from "../components/NavBar"
import Episodios from "../components/Episodios"
import Localizacion from "../components/Localizacion"


export default function Rutas() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/localizacion" element={<Localizacion />} />
      </Routes>
      <Footer />
    </Router>
  )
}
