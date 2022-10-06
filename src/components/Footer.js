import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-4 px-4 pt-16 font-medium text-white h-96 lg:px-10">
      <div>
        <Link to="/"> INICIO </Link>
      </div>
      <div>
        <div className="">
          <Link to="/personajes"> PERSONAJES </Link>
        </div>

        <div className="flex items-center justify-center gap-3 pt-4 text-3xl text-blue-600">
          <a href="https://github.com/angel210819">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/angel-mirko-juarez-166776224/">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/543885836779">
            <FaWhatsapp />
          </a>
        </div>
        <div className="pt-4"> 
        <a href="https://mi-portfolio-two.vercel.app/"> mi Portfolio </a>
        </div>
      </div>
      <div>
        <Link to="/episodios"> EPISODIOS </Link>
      </div>
    </footer>
  );
};

export default Footer;
