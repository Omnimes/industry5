import CustomLink from '@/components/mdx/custom-link'
import { unstable_setRequestLocale } from 'next-intl/server'
import test from "../../../../../public/images/test.png"
import Image from "next/image";

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
                            <Image src={test.src} alt={"test"} width={2084} height={1000} className="my-3 rounded-lg shadow-lg" />
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
                                Przemysł 5.0 przekształca koncepcję zrównoważonego rozwoju z prostego ograniczania szkód klimatycznych na aktywne dążenie do wprowadzania pozytywnych zmian. Ten cel, określany również jako &quot;netto pozytywny&quot;, zmierza do uczynienia świata lepszym miejscem, w którym firmy stanowią część rozwiązania, a nie problemu. To nie tylko kwestia deklarowania celów zrównoważonego rozwoju, ale również realnego zaangażowania w nie.
                            </p>
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">
                                Zrównoważony rozwój odgrywa kluczową rolę w polityce europejskiej od dawna, znalazł swoje miejsce w Traktatach Europejskich. Unia Europejska w pełni zobowiązała się do realizacji Agendy 2030 dotyczącej 17 celów zrównoważonego rozwoju, ustanowionej przez Zgromadzenie Ogólne ONZ w 2015 r. Zielony Ład, ogłoszony w grudniu 2019 r., wyznacza jasne kierunki dla Europy w drodze do zrównoważonej gospodarki. Zidentyfikowano kilka skutecznych narzędzi, które pomagają UE osiągnąć cel neutralności pod względem emisji dwutlenku węgla. Innowacje w dziedzinie zielonych technologii, w połączeniu z inicjatywami UE dotyczącymi cyfryzacji przemysłu europejskiego (takimi jak lepsze wykorzystanie dużych zbiorów danych i sztuczna inteligencja), stają się rzeczywistością i są coraz powszechniej akceptowane przez przemysł. W obliczu rosnących obaw społecznych i środowiskowych firmy integrują zrównoważony rozwój w swoje modele biznesowe. Gdy przemysł uzna korzyści płynące z lepszego wizerunku firmy oraz oszczędności w kosztach energii i materiałów, efektywne wykorzystanie zasobów stanie się naturalnym wyborem.
                            </p>
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">
                                Zwiększenie produkcji przemysłowej zazwyczaj wiąże się z większym zużyciem energii i wzrostem emisji dwutlenku węgla. Innowacje mogą jednak odwrócić ten trend poprzez inteligentniejsze planowanie produkcji i wykorzystanie bardziej energooszczędnych technologii.
                            </p>
                            <p className="mb-6 mt-2 space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl">
                                Od 2005 r. netto wzrost efektywności energetycznej w przemyśle spowolnił się. Istotne jest zrozumienie związku między zużyciem energii a wzrostem gospodarczym na poziomie sektorowym, szczególnie w przypadku energetycznie intensywnych sektorów przemysłu. Taka analiza sektorowa może pomóc zidentyfikować specyficzne dla branży problemy, co prowadziłoby do bardziej ukierunkowanych działań badawczych i innowacyjnych w zakresie efektywności energetycznej, a także do konkretnie skierowanej polityki energetycznej.
                            </p>
                        </li>
                    </ol>
                </article>
            </section >
        </main >
    )
}
