import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Presentacion from "./components/Presentacion";


function App() {
  return (
    <div className='bg-gradient-to-tr from-green-600 to-cyan-600 '>
    <NavBar />
    <Main />
    <Presentacion />
    <Cards />
    <Footer />
    </div>
  );
}

export default App;
