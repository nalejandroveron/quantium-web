'use client'

export function Hero() {
  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Quantium</span>
              <img
                alt=""
                src="quantium-iso.jpg"
                className="h-10 w-auto rounded-full"
              />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate overflow-hidden">
        <video
          src="bg.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className='absolute inset-0 mix-blend-multiply bg-blue-700 -z-10' />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto h-screen flex items-center justify-center max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <img src="quantium-logo-removebg.png" alt="Quantium Logo" className="mx-auto h-26 w-auto mb-6" />
              <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-5xl text-white">
                Aprende a operar los mercados como un profesional
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty sm:text-lg text-gray-400">
                Comprende como la presión de las opciones y los Market Maker afectan los movimientos de los precios y cómo puedes aprovechar esta información para mejorar tus operaciones.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://t.me/trading_cuantitativo_oficial/10518"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500"
                >
                  Inicia Aquí
                </a>
                <a href="#contenido" className="text-sm/6 font-semibold text-white">
                  Aprende más <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
