import React from "react";

function RelatedProducts() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-24 lg:px-8">
        {/* buscador inicio */}

        <form className="max-w-lg mx-auto">
          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              Categorias{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Explora Suplementos..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        {/* buscador fin */}
        {/* carrusel inicio */}

        {/* fin */}
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tu carrito
        </h2>

        <div
          className="relative w-screen max-w-sm border border-gray-900 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-900"
          aria-modal="true"
          role="dialog"
        >
          {/* producto inicio*/}

          <div className="mt-4 space-y-6 ">
            <ul className="space-y-4">
              {/* producto inicio*/}
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src="/img/promocion_creatina_proteina_gohard.webp"
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 dark:text-white">
                      <a href="/navegacion/tienda/articulo">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        proteina + creatina gohard
                      </a>
                    </h3>
                    <dl className="mt-0.5 space-y-px text-[15px] text-gray-600 dark:text-white">
                      <div>
                        <dt className="inline">Marca:</dt>
                        <dd className="inline">gohard</dd>
                      </div>
                    </dl>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    $50.000
                  </p>
                </div>
                <div className="flex flex-1 items-center  gap-2">
                  <form>
                    <label htmlFor="Line1Qty" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line1Qty"
                      className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600 dark:text-white">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/*prueba  producto fin*/}

              {/* producto inicio*/}
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src="/img/promocion_creatina_proteina_gohard.webp"
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 dark:text-white">
                      <a href="/navegacion/tienda/articulo">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        proteina + creatina gohard
                      </a>
                    </h3>
                    <dl className="mt-0.5 space-y-px text-[15px] text-gray-600 dark:text-white">
                      <div>
                        <dt className="inline">Marca:</dt>
                        <dd className="inline">gohard</dd>
                      </div>
                    </dl>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    $50.000
                  </p>
                </div>
                <div className="flex flex-1 items-center  gap-2">
                  <form>
                    <label htmlFor="Line1Qty" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line1Qty"
                      className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600 dark:text-white">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* prueba fin*/}

              {/* producto inicio*/}
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src="/img/promocion_creatina_proteina_gohard.webp"
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 dark:text-white">
                      <a href="/navegacion/tienda/articulo">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        proteina + creatina gohard
                      </a>
                    </h3>
                    <dl className="mt-0.5 space-y-px text-[15px] text-gray-600 dark:text-white">
                      <div>
                        <dt className="inline">Marca:</dt>
                        <dd className="inline">gohard</dd>
                      </div>
                    </dl>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    $50.000
                  </p>
                </div>
                <div className="flex flex-1 items-center  gap-2">
                  <form>
                    <label htmlFor="Line1Qty" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line1Qty"
                      className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600 dark:text-white">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* producto fin*/}
            </ul>
            {/* inicio botones*/}

            <div className="space-y-4 text-center">
              <a
                href="#"
                className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
              >
                Productos (3)
              </a>

              <a
                href="#"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Confirmar
              </a>

              <a
                href="/navegacion/tienda"
                className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
              >
                Seguir comprando
              </a>
            </div>
            {/* fin botones*/}
          </div>
        </div>
      </div>
    </main>
  );
}

export default RelatedProducts;
