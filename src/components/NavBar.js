
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import image from '../image/logo.png'

const NavBar = () => {
    const barraNavegacion = useRef();

  const cambioMenu = () => {
    barraNavegacion.current.classList.toggle("hidden");
    // if (e.target.matches(barraNavegacion )) {
    //   barraNavegacion.current.classList.add('hidden')
    // }
    // barraNavegacion.current.classList.toggle("pointer-events-none");
  };


  return (
    <header 
    className="fixed z-50 w-full p-4 bg-gray-900 h-18 cabeza">
      <section className="flex items-start justify-between w-full cabeza">
        <div className="h-16 px-4">
          <a className="text-gray-400 min" href="#inicio">
          <img
          className='object-contain w-full h-full logo'
          src={image} alt='logo'/>
          </a> 
        </div>
        <button>
          <FontAwesomeIcon 
          onClick={cambioMenu}
          className='flex pr-5 mt-5 text-4xl text-yellow-500 cursor-pointer icono hover:text-yellow-300 bg-inherit active:scale-90'
          icon={faBars}  
          />
        </button>
        <nav
          onClick={cambioMenu}
          id="navi"
          ref={barraNavegacion}
          className="fixed left-0 flex flex-col hidden w-full bg-gray-900 active:transition-all top-24 nav active:duration-500"
        >
          <a
            className="items-center p-4 text-3xl text-center text-gray-400 no-underline hover:text-violet-600"
            href="#personajes"
          >
            Personajes
          </a>
          <a
            className="items-center p-4 text-3xl text-center text-gray-400 no-underline hover:text-violet-600"
            href="2"
          >
          Temporadas
          </a>
          <a 
            className="items-center p-4 text-3xl text-center text-gray-400 no-underline hover:text-violet-600"
            href="sil"
          >
            episodios
          </a>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
