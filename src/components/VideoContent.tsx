const posts = [
  {
    id: 1,
    title: 'Referente del Trading Cuantitativo Mexicano Responde preguntas claves sobre su oficio!',
    href: 'https://youtu.be/9SO05HqJb_Q?si=ontTpeDgAYRBWM9w',
    description:
      'Hunab nos responde preguntas sobre como opera día a dia.',
    src: 'https://www.youtube.com/embed/9SO05HqJb_Q?si=PYma3wZCAqduGHqs',
    date: 'Oct 6, 2025',
    datetime: '2025-10-06',
    author: {
      name: 'Hunab Villanueva',
      role: 'Fundador Quantium',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Que es el Trading Cuantitativo? y porque dice que solo el TradingView te hace perder. (parte 2)',
    href: 'https://youtu.be/Yo2TA2g5qu4?si=52tQo63WYrMZAly5',
    description:
      'Hunab sostiene que entender la arquitectura de los índices americanos y sus ponderaciones es clave: el SP500 por capitalización, el Dow Jones por precio y el Nasdaq por sector tecnológico. Muestra cómo los ETFs concentran liquidez institucional y por qué el flujo en opciones (volumen e interés abierto), la volatilidad implícita del VIX y los ETFs inversos revelan dirección y cobertura. Insiste en que las “siete magníficas” y los grandes ETFs mueven el mercado, y que operar solo con gráficos de TradingView lleva a sesgos; propone una metodología cuantitativa con herramientas como SpotGamma y Bookmap para medir gama, delta y flujos en tiempo real.',
    src: 'https://www.youtube.com/embed/Yo2TA2g5qu4?si=pMhKw7JzRzvWGUmq',
    date: 'Oct 6, 2025',
    datetime: '2025-10-06',
    author: {
      name: 'Hunab Villanueva',
      role: 'Fundador Quantium',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Que es el Trading Cuantitativo? y porque dice que solo el TradingView te hace perder. (video 1)',
    href: 'https://youtu.be/OkPGI7sPq1U?si=3SOnIgXuFHyVyjuo',
    description:
      'Hunab nos explica por qué el trading debe basarse en derivados (opciones y futuros), probabilidades y datos institucionales, y no en patrones subjetivos de TradingView. Muestra cómo la mayor liquidez y decisiones de precio se concentran en SPX, el impacto del 0‑DTE y cómo leer posicionamiento (gamma, strikes, coberturas) para evitar pagar con dinero o tiempo por operar creencias.',
    src: 'https://www.youtube.com/embed/OkPGI7sPq1U?si=ZhdDLLyGujF2BITx',
    date: 'Jun 22, 2025',
    datetime: '2025-06-22',
    author: {
      name: 'Hunab Villanueva',
      role: 'Fundador Quantium',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export function VideoContent() {
  return (
    <div className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
            Desde nuestro canal de YouTube
          </h2>
          <p className="mt-2 text-lg/8 text-gray-400">
            Aprende más sobre trading cuantitativo y estrategias de inversión con nuestros videos educativos y entrevistas exclusivas.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-video h-full w-full lg:aspect-square lg:max-w-64 lg:shrink-0">
                  <iframe width="560" height="315" src={post.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 size-full rounded-2xl object-cover bg-gray-800"></iframe>
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-400">
                      {post.date}
                    </time>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                      <a target="_blank" rel="noopener noreferrer" href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm/6 text-gray-400">{post.description}</p>
                  </div>
                  <div className="mt-6 flex border-t pt-6 border-white/10">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="size-10 rounded-full bg-gray-800"
                      />
                      <div className="text-sm/6">
                        <p className="font-semibold text-white">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-400">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
