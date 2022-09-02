import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='flex justify-between h-48 gap-10 px-4 pt-16 font-medium text-white lg:px-10'>
    <div>
      <a href="#inicio"> INICIO </a>
    </div>
    <div>
    <div> 
    <a href="#personajes"> PERSONAJES </a>
    </div>
    <div className='flex items-center justify-center gap-3 pt-4 text-3xl text-blue-600'> 
        <a href="3"> 
        <FaGithub />
        </a>
        <a href="2"> 
        <FaLinkedin />
        </a>
        <a href="1"> 
        <FaWhatsapp />
        </a>
    </div>
    <div className='pt-4'> www.angel.com </div>
    </div>
    <div>EPISODIOS</div>
    </footer>
  )
}

export default Footer