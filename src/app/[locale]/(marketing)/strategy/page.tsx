import { unstable_setRequestLocale } from 'next-intl/server'

export default function StrategyPage({ params: { locale } }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale)
    return (
        <main className="mx-auto max-w-5xl px-4 py-24">
            <section className="mx-auto w-full text-left">
                <h1 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-5xl dark:text-white">
                    <span className="block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
                        Strategie transformacji cyfrowej
                    </span>
                </h1>
                <article className="mb-6 px-0 text-lg text-gray-600 md:text-xl">
                    <ol className="list-inside list-decimal space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="text-black dark:text-white">
                            Podejście skoncentrowane na człowieku
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-5 text-lg text-gray-600 md:text-xl">
                                Przemysł 5.0 opiera się na strategii, która przesuwa uwagę z traktowania ludzi jako zasobów na uznawanie ich za rzeczywiste aktywa. W rezultacie, zamiast jednostki służyć organizacjom, oznacza to, że organizacje zaczynają służyć ludziom. Zamiast wykorzystywać talenty jedynie w celu uzyskania przewagi konkurencyjnej i tworzenia wartości dla klientów, Przemysł 5.0 skupia się na dodawaniu wartości dla pracowników, aby przyciągać i zatrzymywać najlepszych specjalistów.
                            </p>
                        </li>
                        <li className="text-black dark:text-white">
                            Odporność
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-5 text-lg text-gray-600 md:text-xl">
                                W miarę jak świat stawał się coraz bardziej zglobalizowany, zauważamy powszechny wpływ globalnych problemów, takich jak pandemia Covid-19 i międzynarodowe niedobory w łańcuchach dostaw. Mimo że wiele firm dąży do poprawy efektywności i optymalizacji zysków, te czynniki same w sobie nie wzmacniają odporności. W rzeczywistości istnieje przekonanie, że skupienie się na efektywności i elastyczności może sprawić, że firmy staną się mniej odporne, a nie bardziej. Zamiast skupiać się na wzroście, zyskach i efektywności, bardziej odporne organizacje będą starały się przewidzieć każdy kryzys i reagować na niego, aby zapewnić stabilność w trudnych czasach.
                            </p>
                        </li>
                        <li className="text-black dark:text-white">
                            Zrównoważony rozwój
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-5 text-lg text-gray-600 md:text-xl">
                                Przemysł 5.0 poszerza koncepcję zrównoważonego rozwoju poza prostym ograniczaniem, minimalizacją lub łagodzeniem szkód klimatycznych, by aktywnie dążyć do wprowadzenia pozytywnych zmian. Ten cel, czasami nazywany &quot;netto pozytywnym&quot;, ma na celu uczynienie świata lepszym miejscem, gdzie firmy stają się częścią rozwiązania, a nie problemu, ani też nie tylko deklarują cele zrównoważonego rozwoju poprzez &quot;pranie mózgu ekologiczne&quot;.
                            </p>
                        </li>
                    </ol>
                </article >
            </section >
        </main >
    )
}
