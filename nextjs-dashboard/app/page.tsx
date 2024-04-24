import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <div>
        <header>
          <nav className="white:bg-gray-800 border-gray-200 bg-white px-4 py-2.5 lg:px-6">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
              <a
                href="https://flowbite.com"
                className="--navigation-grid-template-columns: minmax(calc(var(--logo-width) + var(--space-between-menu)), auto) 1fr; --m-navigation-grid-template-columns: minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), auto) 1fr; --logo-grid-row: 1/2; --m-logo-grid-row: 1/2; --logo-grid-column: 1/2; --m-logo-grid-column: 1/2; --logo-justify-self: flex-start; --m-logo-justify-self: flex-start; --logo-image-object-position: left center; --m-logo-image-object-position: left center; --links-grid-row: 1/2; --m-links-grid-row: 1/2; --links-grid-column: 2/3; --m-links-grid-column: 2/3; --cart-grid-row: 1/2; --cart-grid-column: 3/3; --logo-spacing: 0 var(--space-between-menu) 0 0; --m-logo-spacing: 0 var(--space-between-menu) 0 0; --navigation-text-align: left; --m-navigation-text-align: right; --navigation-justify-self: flex-start; --m-navigation-justify-self: flex-end; --mobile-background: var(--background-color, var(--background-image)); --dropdown-background-color:  rgb(255, 255, 255); --m-dropdown-background-color: rgb(255, 255, 255); --dropdown-background-contrast-color: rgb(30, 30, 30); --nav-link-text-color: rgb(0, 0, 0); --nav-link-text-color-hover: rgb(191, 10, 48); flex items-center"
              >
                <img
                  src="/logo/logoidea4.avif"
                  className="mr-6 h-16 sm:h-20"
                  alt="Flowbite Logo"
                />
              </a>
              <div className="flex items-center lg:order-2 ">
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                id="mobile-menu-2"
              >
                <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                  <li>
                    <a
                      href="/navegacion/tienda"
                      className="lg:dark:hover:text-red dark:text-gray- block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-red-500
                      lg:dark:hover:bg-transparent"
                      aria-current="page"
                    >
                      campaign
                    </a>
                  </li>
                  <li>
                    <a
                      href="/navegacion/tienda"
                      className="lg:dark:hover:text-red dark:text-gray- block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-red-500
                      lg:dark:hover:bg-transparent"
                    >
                      photo
                    </a>
                  </li>
                  <li>
                    <a
                      href="/navegacion/tienda"
                      className="lg:dark:hover:text-red dark:text-gray- block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-red-500
                      lg:dark:hover:bg-transparent"
                    >
                      graphic
                    </a>
                  </li>
                  <li>
                    <a
                      href="/navegacion/tienda"
                      className="lg:dark:hover:text-red dark:text-gray- block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-red-500
                      lg:dark:hover:bg-transparent"
                    >
                      video
                    </a>
                  </li>
                  <li>
                    <a
                      href="/navegacion/tienda"
                      className="lg:dark:hover:text-red dark:text-gray- block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-red-500
                      lg:dark:hover:bg-transparent"
                    >
                      ⭐starmakermachine⭐
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div>
        <section className="white:bg-gray-900 bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
              <h2 className="font-american-typewriter dark:text-red mb-4 text-3xl font-normal tracking-tight text-red-500 lg:text-4xl">
                MORE ON MILAN
              </h2>
              <p className="font-light text-gray-500 dark:text-gray-800 sm:text-xl">
                Milan is a 21-year-old artist, creative director, and student at
                Michigan State University. He co-founded the blog and collective
                Starmaker Machine with his best friend Kitty Quinn in June of
                2022. In addition, he works as the Creative Director of MSU’s
                VIM Magazine. Milan was born and raised in Macedonia but
                currently resides between East Lansing and Detroit, Michigan.
                Thank you for exploring Milan’s work.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2"></div>
          </div>
        </section>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src="/img/1.avif"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src="/img/2.avif"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src="/img/3.avif"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src="/img/4.avif"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
