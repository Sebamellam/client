
import { Link } from 'react-router-dom'
import BackgroundJumbotron from './../assets/marcas.png'
import ListProducts from './ListProducts'

export default function Main() {
  return (
    <>
      <main className="mt-10">
        <section className="relative grid grid-cols-1 md:grid-cols-2 bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply">
          <div className="md:col-span-1 flex items-center justify-center">
            <img className="object-cover w-full md:h-full" src={BackgroundJumbotron} alt="Guitarras para todo el público" />
          </div>
          <div className="md:col-span-1 flex items-center justify-center text-white text-center p-8">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">El lugar donde encontraras todas tus marcas favoritas</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-4 md:px-16 lg:px-48">Acá en Kapo di pelo nos preocupamos por tener una gran variedad de marcas para los mejores productos de barberías</p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <Link to="/catalogo">
                  <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-white font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
                    Ver catálogo
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="md:col-span-2 text-center mt-8">
          <h2 className="text-3xl font-extrabold text-black mb-4">Conoce nuestro catálogo</h2>
          <hr className="border-t-4 border-black w-80 mx-auto mb-6" />
        </div>
      </main>
      <ListProducts title="" />
    </>
  )
}