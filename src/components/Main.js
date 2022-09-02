import image from './../image/Rick_y_Morty.jpg'

const Main = () => {
  return (
    <main
    id='inicio'
    className='w-full h-screen'>
    <img 
    className='object-fill w-full h-full pt-10'
    src={image} alt='portada' />
    </main>
  )
}

export default Main