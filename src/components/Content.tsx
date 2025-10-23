import { CheckCircleIcon } from '@heroicons/react/20/solid'

export function Content() {
  return (
    <div id="contenido" className="px-6 py-32 lg:px-8 bg-gray-900">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-300">
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
          Trading cuantitativo: ver el mar que mueve el barco
        </h1>
        <div className="mt-10 max-w-3xl text-gray-400">
          <p>
            El mayor error del trader minorista es operar desde la creencia: “ese order block se respeta”, “ese doble techo gira”, “este indicador predice”. Las velas describen el pasado; el precio se mueve por la estructura, la probabilidad y la disciplina que surgen de datos institucionales y modelos cuantitativos.
            <br /><br />
            La brújula profesional son los derivados (opciones, futuros, forwards, swaps). Ahí se decide el flujo que empuja al subyacente: posicionamiento por strikes, coberturas (gamma/delta), presión intradía y vencimientos. Operar solo con TradingView deja ciego lo esencial: no ves dónde los market makers defienden niveles, ni el balance real de riesgo.
            <br /><br />
            El “sol” de la liquidez es el SP500: cada día se negocian más de 12 mil millones nocionales en opciones y ~la mitad del flujo vence el mismo día (0DTE). Consecuencia: ninguna “zona” antigua garantiza reacción si hoy cambió el posicionamiento. Leer SPX/SPY da contexto al Nasdaq y al resto, porque comparten motores de liquidez y alta correlación.
            <br /><br />
            La liquidez es la sangre del mercado. Medirla en derivados (zero gamma, hedge walls, key strikes; balance de calls/puts y sus coberturas) explica impulsos y frenadas que el price action solo narra después.
          </p>

          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-white">
            Pilares y práctica:
          </h2>
          <ul role="list" className="mt-8 max-w-3xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-400"
              />
              <span>
                <strong className='text-white'>Cobertura</strong>: empresas estabilizan costos con futuros (petróleo, café). No predicen; controlan riesgo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-400"
              />
              <span>
                <strong className='text-white'>Especulación</strong>: se posiciona en opciones según mapa de strikes y presión de gamma para capturar direcciones del día/semana.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-400"
              />
              <span>
                <strong className='text-white'>Arbitraje</strong>: se explotan ineficiencias entre índices, ETFs y derivados.
              </span>
            </li>
          </ul>

          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-white">
            Reglas prácticas:
          </h2>
          <ul role="list" className="mt-8 max-w-3xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-400"
              />
              <span>
                <strong className='text-white'>La señal en velas es el disparador; la brújula son los datos.</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-400"
              />
              <span>
                <strong className='text-white'>Prioriza lo de hoy: sin reposición actual de liquidez, una zona pasada no vale.</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-400"
              />
              <span>
                <strong className='text-white'>Analiza el subyacente y su derivado principal (SPX/SPY, GLD, FXE, IBIT/VITO) para entender el motor.</strong>
              </span>
            </li>
          </ul>

          <article className='pt-8 text-white'>
            <p>
            Sin modelos y métricas, el trading es azar con costo invisible (tiempo o dinero). Con estadística y proceso, la psicología se simplifica y la ventaja se vuelve repetible. No busques “$3,000 fijos”; construir consistencia modesta (p. ej., $50 al día, 3–4 veces por semana) cambia vidas.
            </p>
            <br />
            <p>
              El futuro del trading está en convertir datos complejos en decisiones simples. Ver el mar (derivados) para anticipar cómo se moverá el barco (spot). Menos creer, más medir; menos promesas, más probabilidades.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
