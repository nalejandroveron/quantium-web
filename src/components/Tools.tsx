export function Tools() {
  return (
    <div className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-white">
          Aprenderás a utilizar las siguientes herramientas
        </h2>
        <div className="mx-auto mt-18 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img
            alt="Spotgamma"
            src="spotgamma-iso2.png"
            className="col-span-2 max-h-12 max-w-[150px] w-full object-contain lg:col-span-1"
          />
          <img
            alt="ATAS"
            src="atas-iso.png"
            className="col-span-2 max-h-12 max-w-[174px] w-full object-contain lg:col-span-1"
          />
          <img
            alt="Quantdata"
            src="quantdata.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 max-w-[220px] w-full object-contain lg:col-span-1"
          />
          <img
            alt="Bookmap"
            src="bookmap-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 max-w-[220px] w-full object-contain sm:col-start-2 lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}
