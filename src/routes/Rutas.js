import { Router, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"


const Rutas = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </Router>
  )
}

export default Rutas