import React from "react";

// Componente principal del formulario de inicio de sesión
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-50 dark:bg-gray-900">
      {/* Encabezado */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-52 ">
        {/* Contenido del banner */}
        <div className="flex flex-col ">
          {/* Título del banner con estilo personalizado para ajustar el margen superior */}
          <h1 className="text-white text-2xl font-bold">
            Shirus Nutricion Activa
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Bienvenido
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-semibold text-gray-100 text-center">
                ¿Olvidaste tu contraseña?
              </h1>
              {/* inicio olvidaste */}
              <div>
                <div className="container sm:mt-10 mt-24 my-auto max-w-md border-2 border-gray-200 rounded-[20px] p-3 bg-gray-800">
                  <div className="text-center m-6">
                    <p className="text-gray-200">
                      Simplemente ingrese su dirección de correo electrónico a
                      continuación y nosotros le enviará un enlace para
                      restablecer su contraseña aprobar !!
                    </p>
                  </div>
                  <div className="m-6">
                    <form className="mb-4">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-100 dark:text-gray-400"
                        >
                          Dirección de correo electrónico{" "}
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Tu correo electrónico"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <button
                          type="button"
                          className="w-full px-3 py-4 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none duration-100 ease-in-out"
                        >
                          Enviar enlace de reinicio{" "}
                        </button>
                      </div>
                      <p className="text-sm text-center text-gray-200">
                        ¿No tienes cuenta aún?{" "}
                        <a
                          href="#!"
                          className="font-semibold text-teal-500 focus:text-indigo-600 focus:outline-none focus:underline"
                        >
                          Registro{" "}
                        </a>
                        .
                      </p>
                    </form>
                    <div className="flex flex-row justify-center mb-8">
                      <span className="absolute bg-gray-800 px-4 text-gray-100">
                        O inicia sesión con{" "}
                      </span>
                      <div className="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-900 duration-100 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="w-5"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        Github
                      </button>
                      <button className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="w-5"
                          viewBox="0 0 48 48"
                        >
                          <defs>
                            <path
                              id="a"
                              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                            ></path>
                          </defs>
                          <clipPath id="b">
                            <use xlinkHref="#a" overflow="visible"></use>
                          </clipPath>
                          <path
                            clipPath="url(#b)"
                            fill="#FBBC05"
                            d="M0 37V11l17 13z"
                          ></path>
                          <path
                            clipPath="url(#b)"
                            fill="#EA4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                          ></path>
                          <path
                            clipPath="url(#b)"
                            fill="#34A853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                          ></path>
                          <path
                            clipPath="url(#b)"
                            fill="#4285F4"
                            d="M48 48L17 24l-4-3 35-10z"
                          ></path>
                        </svg>
                        Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* inicio olvidaste */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
