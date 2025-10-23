export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg/8 text-gray-100">
                <p>
                  “Quantium me permitió conocer el mercado de opciones y entender la lógica detrás del movimiento del subyacente.
                  Si no fuera por todo lo aprendido, seguramente estaría buscando patrones FVG en un grafico y perdiendo dinero.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://platan.us/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjE1NiwicHVyIjoiYmxvYl9pZCJ9fQ==--6a890bf880f568853b13c72e5325ac669da7c276/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--f66c101e7348fa07d502fe7307d709855d541735/1669758536145.jpg"
                  className="size-14 rounded-full bg-gray-800"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Nahuel Veron</div>
                  <div className="mt-1 text-gray-400">Programador</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20 border-white/10">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg/8 text-gray-100">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                  reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                  dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-14 rounded-full bg-gray-800"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Jorge Rodriguez</div>
                  <div className="mt-1 text-gray-400">Algun otro cargo</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
