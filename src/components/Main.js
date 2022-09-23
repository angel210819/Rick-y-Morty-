import image from "./../image/Rick_y_Morty.jpg";
import Cards from "./Cards";
import Presentacion from "./Presentacion";

const Main = () => {
  return (
    <>
      <main id="inicio" className="w-full h-screen">
        <img
          className="object-fill w-full h-full pt-10"
          src={image}
          alt="portada"
        />
      </main>
      <Presentacion />
      <Cards />
    </>
  );
};

export default Main;
