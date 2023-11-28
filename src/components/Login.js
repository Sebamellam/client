import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from './../context/User/UserContext'

import Logo from "./../assets/kapo.svg"

export default function Login() {

  const userCtx = useContext(UserContext)

  const { 
      loginUser      
  } = userCtx

  const [data, setData] = useState({
      email: "",
      password: ""
  })

  const handleChange = (event) => {

    setData({
        ...data,
        [event.target.name]: event.target.value
    })

}

  const sendData = (event) => {
      
      event.preventDefault()

      return loginUser(data)

  }

  return (

  <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
  {/* Nuevo componente de inicio de sesión */}
  <div className="flex shadow-md">
    {/* Formulario de inicio de sesión */}
    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white"  style={{ width: '24rem', height: '32rem' }}>
      <div className="w-72">
        {/* Encabezado */}
        <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Iniciar sesión
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ¿Aún sin cuenta? &nbsp;
          <Link to="crear-cuenta">
            <a className="font-medium text-yellow-500 hover:text-yellow-300">
              Regístrate aquí.
            </a>
          </Link>
        </p>

        {/* Formulario de inicio de sesión */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form 
              className="space-y-6"
              onSubmit={(e) => { sendData(e) }}
            >
              {/* Campos de entrada de correo electrónico y contraseña */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Tu correo electrónico
                </label>
                <div className="mt-1">
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    onChange={(e) => { handleChange(e) }}
                    required 
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Tu contraseña
                </label>
                <div className="mt-1">
                  <input 
                    id="password" 
                    name="password" 
                    type="password"
                    required 
                    onChange={(e) => { handleChange(e) }}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              {/* Botón de inicio de sesión */}
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Acceder a tu cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* Banner de inicio de sesión */}
    <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
      <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://bepro.cl/cdn/shop/files/183602023_1_5000x.png?v=1699462663" alt="Login Banner" />
    </div>
  </div>
</div>

   

  )
}
