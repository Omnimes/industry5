import CustomLink from '@/components/mdx/custom-link'
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
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">
                                Transformacja piąta koncentruje się na zastosowaniu metod zarządzania, które prowadzą do stworzenia organizacji skupionej na człowieku. Szczegółowe wytyczne dotyczące tego podejścia można znaleźć w normach <CustomLink href={"https://www.iso.org/standard/64239.html"} openNewTab={true} className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent underline-offset-4 hover:underline lg:inline">ISO 27500:2016</CustomLink> (Organizacja skoncentrowana na człowieku – Uzasadnienie i ogólne zasady) oraz <CustomLink href={"https://www.iso.org/standard/64241.html"} openNewTab={true} className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent underline-offset-4 hover:underline lg:inline">ISO 27501:2019</CustomLink> (Organizacja zorientowana na człowieka – Wskazówki dla menedżerów). Te normy definiują kluczowe kryteria, wymagane kompetencje z obszaru ergonomii i czynników ludzkich, oraz zapewniają wytyczne dla członków zarządów.
                            </p>
                            <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">
                                W ramach norm ISO określono także siedem zasad organizacji skoncentrowanej na człowieku:
                                <li className="pl-4 pt-4">Wykorzystanie różnic indywidualnych jako siły organizacyjnej.</li>
                                <li className="pl-4">Zapewnienie użyteczności i dostępności strategicznych celów biznesowych.</li>
                                <li className="pl-4">Przyjęcie podejścia systemowego.</li>
                                <li className="pl-4">Uwzględnienie w priorytetach biznesowych zapewnienia zdrowia, bezpieczeństwa i dobrego samopoczucia pracowników.</li>
                                <li className="pl-4">Docenianie pracowników i tworzenie sensownego środowiska pracy.</li>
                                <li className="pl-4">Wprowadzenie zasady bycia otwartym i godnym zaufania.</li>
                                <li className="pl-4">Działanie w sposób społecznie odpowiedzialny.</li>
                            </ul>
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">
                                Przemysł 5.0, oparty na strategii, która przesuwa uwagę z traktowania ludzi jako zasobów na uznawanie ich za rzeczywiste aktywa, dodaje nowy wymiar do tego podejścia. Zamiast jednostki służyć organizacjom, oznacza to, że organizacje zaczynają służyć ludziom. Zamiast wykorzystywać talenty jedynie w celu uzyskania przewagi konkurencyjnej i tworzenia wartości dla klientów, Przemysł 5.0 skupia się na dodawaniu wartości dla pracowników, aby przyciągać i zatrzymywać najlepszych specjalistów. Integracja tego podejścia z zasadami organizacji skoncentrowanej na człowieku stanowi kluczowy element dla sukcesu w dynamicznym i konkurencyjnym środowisku biznesowym.
                            </p>

                        </li>
                        <li className="text-black dark:text-white">
                            Odporność
                            {/* <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">
                                W miarę jak świat stawał się coraz bardziej zglobalizowany, zauważamy powszechny wpływ globalnych problemów, takich jak pandemia Covid-19 i międzynarodowe niedobory w łańcuchach dostaw. Mimo że wiele firm dąży do poprawy efektywności i optymalizacji zysków, te czynniki same w sobie nie wzmacniają odporności. W rzeczywistości istnieje przekonanie, że skupienie się na efektywności i elastyczności może sprawić, że firmy staną się mniej odporne, a nie bardziej. Zamiast skupiać się na wzroście, zyskach i efektywności, bardziej odporne organizacje będą starały się przewidzieć każdy kryzys i reagować na niego, aby zapewnić stabilność w trudnych czasach.
                            </p> */}

                            <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">Wraz z globalizacją świata coraz bardziej dostrzegamy powszechny wpływ globalnych problemów, takich jak pandemia Covid-19 oraz międzynarodowe niedobory w łańcuchach dostaw. Pomimo że wiele firm dąży do poprawy efektywności i optymalizacji zysków, te czynniki same w sobie nie zwiększają odporności. W rzeczywistości istnieje przekonanie, że skupienie się jedynie na efektywności i elastyczności może sprawić, że firmy staną się mniej, a nie bardziej, odporne. Zamiast koncentrować się wyłącznie na wzroście, zyskach i efektywności, bardziej odporne organizacje będą dążyły do przewidywania każdego potencjalnego kryzysu i reagowania na niego, aby zapewnić stabilność w trudnych czasach.</p>

                            <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">Model łańcucha wartości opisuje kompleksowe działania niezbędne do opracowania produktu lub usługi - począwszy od etapu koncepcji, poprzez zaopatrzenie w surowce, procesy produkcyjne i działania marketingowe, aż po dystrybucję. Podejście oparte na łańcuchu wartości ma na celu zrozumienie potrzeb firm oraz podmiotów w ramach danej branży, takich jak dostawcy surowców, ostateczni klienci oraz jednostki świadczące wsparcie techniczne, biznesowe i finansowe dla przemysłu i otoczenia biznesowego. Poniżej przedstawiam ogólne zasady wdrażania programów rozwoju łańcucha wartości:</p>

                            <ol className="list-inside list-decimal space-y-4 ps-6 text-gray-600 md:text-xl">
                                <li>
                                    Opis technologii:
                                    <ul>
                                        <li className="pl-6">Ułatwienie zmian w firmie: ułatwienie wdrożenia zmian mających na celu zwiększenie konkurencyjności łańcucha oraz generowanie przychodów dla wszystkich uczestniczących w nim firm, co przyczynia się do wzrostu gospodarczego i społecznego. Zrozumienie finansowych i pozafinansowych zachęt różnych interesariuszy jest kluczowe.</li>
                                    </ul>
                                </li>
                                <li>Przekształcanie relacji:
                                    <ul>
                                        <li className="pl-6">Poprzez korzyści płynące z relacji typu win-win w zakresie współpracy interesariuszy, niektóre firmy znajdują motywację do zmiany przyjętych metod działania oraz form kontaktu stosowanych wobec innych uczestników łańcucha. Skuteczność prostych odwołań do własnego interesu jest ograniczona przez sprzeczne zachęty i wysoki poziom nieufności.</li>
                                    </ul>
                                </li>
                                <li>
                                    Ukierunkowanie punktów dźwigni:
                                    <ul>
                                        <li className="pl-6">Wykonawcy projektów łańcucha wartości powinni kierować się punktami dźwigni, które mają znaczący wpływ na interwencje, aby maksymalizować wpływ i zasięg działań. Punkty dźwigni mogą obejmować struktury gospodarcze i społeczne, zachęty handlowe oraz normy i zachęty społeczne.</li>
                                    </ul>
                                </li>
                                <li>
                                    Wzmocnienie pozycji sektora prywatnego:
                                    <ul>
                                        <li className="pl-6">Celem podejścia opartego na łańcuchu wartości jest umożliwienie sektorowi prywatnemu działania na własną rękę poprzez modernizację firm i współtworzenie konkurencyjnego łańcucha wartości, przyczyniając się tym samym do wzrostu gospodarczego i redukcji ubóstwa. Analiza łańcucha wartości oraz opracowywanie strategii powinny być oparte na uczestnictwie i współpracy.</li>
                                    </ul>
                                </li>
                                <li>
                                    Uczenie się i zarządzanie adaptacyjne:
                                    <ul>
                                        <li className="pl-6">W dynamicznym otoczeniu rynkowym, osiągnięcie sukcesu wymaga ciągłego uczenia się i dostosowywania się do zmian. Identyfikacja mechanizmów działania jest kluczowa dla osiągnięcia pozytywnych wyników.</li>
                                    </ul>
                                </li>
                            </ol>

                            <p className="mb-6 mt-4 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">Zmiana sposobu myślenia o zaawansowanej produkcji prowadzi do transformacji technologicznej, zarządzania oraz reguł pracy. Podjęcie wyzwań związanych z opisanymi zagadnieniami przyczyni się do pełnej implementacji inteligentnej fabryki. Nawiązanie współpracy z partnerami branżowymi, którzy również przyjęli ten sam model, przysłuży się budowie ekosystemu zgodnego z wymogami przemysłu 4.0.</p>

                        </li>
                        <li className="text-black dark:text-white">
                            Zrównoważony rozwój
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">
                                Przemysł 5.0 poszerza koncepcję zrównoważonego rozwoju poza prostym ograniczaniem, minimalizacją lub łagodzeniem szkód klimatycznych, by aktywnie dążyć do wprowadzenia pozytywnych zmian. Ten cel, czasami nazywany &quot;netto pozytywnym&quot;, ma na celu uczynienie świata lepszym miejscem, gdzie firmy stają się częścią rozwiązania, a nie problemu, ani też nie tylko deklarują cele zrównoważonego rozwoju poprzez &quot;pranie mózgu ekologiczne&quot;.
                            </p>
                        </li>
                    </ol>
                </article>
            </section >
        </main >
    )
}
