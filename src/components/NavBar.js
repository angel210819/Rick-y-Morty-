import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";
import image from "../image/logo.png";

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
    <header className="fixed z-50 w-full p-4 bg-gray-900 h-18 cabeza">
      <section className="flex items-start justify-between w-full cabeza">
        <div className="h-16 px-4">
          <Link className="text-gray-400 min" to="/">
            <img
              className="object-contain w-full h-full logo"
              src={image}
              alt="logo"
            />
          </Link>
        </div>
        <button className="w-12 h-1 pt-5 pr-5">
          <FontAwesomeIcon
            onClick={cambioMenu}
            className="w-12 text-4xl text-yellow-500 cursor-pointer icono hover:text-yellow-300 active:scale-90"
            icon={faBars}
          />
        </button>

        <nav
          onClick={cambioMenu}
          id="navi"
          ref={barraNavegacion}
          className="fixed left-0 flex flex-col w-full bg-gray-900 active:transition-all top-24 nav active:duration-500"
        >
          <Link
            className="navigation"
            to="/personajes"
          >
            Personajes
          </Link>
          <Link
            className="navigation"
            to="/episodios"
          >
            Episodios
          </Link>
          <Link
            className="navigation"
            to="/localizacion"
          >
            Localizacion
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
