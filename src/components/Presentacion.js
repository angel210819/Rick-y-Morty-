import logo from './../image/logo.png'
import imagen from './../image/rickymorty.jpg'
const Presentacion = () => {
  return (
    <section className='md:flex-row md:flex lg:mx-48 lg:mt-10'>
    <div className='flex flex-col'>
      <div>
        <img 
        className='object-contain w-3/4 h-24 m-auto'
        src={logo} alt='logo' />
      </div>
      <div className='flex flex-col gap-5 px-5 m-auto text-xl text-white'>
        <p> Rick y Morty es una comedia animada estadounidense de ciencia ficción para adultos creada por Justin Roiland y Dan Harmon para el bloque de programación nocturna Adult Swim de Cartoon Network.
        </p>
        <p> La serie sigue las desventuras del cínico científico loco Rick Sanchez y su nieto de buen corazón pero inquieto Morty Smith, que dividía su tiempo entre la vida doméstica y las aventuras interdimensionales.
        </p>
      </div>
    </div>
      <div className='hidden w-full h-auto lg:flex lg:flex-row rotate-6'>
        <img 
        className='w-auto h-auto rounded-3xl'
        src={imagen} alt='rick y morty'/>
      </div>
    </section>
  )
}

export default Presentacion