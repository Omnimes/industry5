import { unstable_setRequestLocale } from "next-intl/server"

export default function HistoryPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  return (
    <main className="mx-auto max-w-5xl px-4 py-24">
      <section className="mx-auto w-full text-left">
        <h1 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-5xl dark:text-white">
          <span className="block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
            Ewolucja produkcji <br />
            od Przemysłu 1.0 do Przemysłu 5.0
          </span>
        </h1>
        <article className="mb-6 px-0 text-lg text-gray-600 md:text-xl dark:text-gray-400">
          <p className="mb-6 mt-2 space-y-1 px-0 text-lg text-gray-600 md:text-xl dark:text-gray-400">
            Historia przemysłu to fascynujący i wieloaspektowy temat, który obejmuje rozwój
            technologii, społeczeństwa i gospodarki na przestrzeni wieków. Od początków
            rękodzielnictwa i manufaktur, przez rewolucję przemysłową, aż po współczesne innowacje w
            zakresie automatyzacji i zrównoważonego rozwoju, przemysł odgrywa kluczową rolę w
            kształtowaniu świata, w którym żyjemy.
          </p>
          <p className="mb-12 mt-2 space-y-1 px-0 text-lg text-gray-600 md:text-xl dark:text-gray-400">
            Jak produkcja ewoluowała od pierwszej rewolucji przemysłowej (Przemysł 1.0) do obecnego
            etapu, znanego jako Przemysł 5.0? Od końca XVIII wieku, kiedy rozpoczęła się pierwsza
            rewolucja przemysłowa, przemysł przeszedł długą drogę i nadal dynamicznie się rozwija.
          </p>

          <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
              Przed Rewolucją Przemysłową
            </span>
          </h2>
          <p className="mb-12 mt-2 space-y-1 px-0 text-lg text-gray-600 md:text-xl dark:text-gray-400">
            W czasach przedindustrialnych dominowały gospodarki agrarne, a produkcja dóbr odbywała
            się głównie w małych warsztatach rzemieślniczych. Rękodzielnictwo i manufaktury były
            podstawowymi formami wytwarzania, a większość populacji pracowała na roli.
            Technologiczne innowacje były stosunkowo rzadkie, a produkcja była ograniczona lokalnie.
          </p>

          <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
              Przemysł 1.0 (koniec XVIII wieku)
            </span>
          </h2>

          <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl dark:text-gray-400">
            <li>
              <strong>Mechanizacja:</strong> Pierwsza rewolucja przemysłowa (Przemysł 1.0) oznaczała
              przejście od pracy ręcznej do zmechanizowanych procesów produkcyjnych. Kluczową rolę
              odegrał przemysł tekstylny, wprowadzając przędzalnię, która znacząco zwiększyła
              produktywność i zapoczątkowała nową erę przemysłową.
            </li>

            <li>
              <strong>Siła pary:</strong>
              Wprowadzenie silnika parowego zapewniło bardziej niezawodne źródło energii, zarówno
              dla przemysłu wytwórczego, jak i transportu, co umożliwiło dalszy rozwój produkcji i
              logistyki.
            </li>

            <li>
              <strong>System fabryczny:</strong>
              Rozwój miast i migracja ludności z obszarów wiejskich do miast zaowocowały przejściem
              od zdecentralizowanego przemysłu do bardziej zmechanizowanego i scentralizowanego
              systemu fabrycznego.
            </li>

            <li>
              <strong>Wpływ na społeczeństwo:</strong>
              Pierwsza rewolucja przemysłowa, związana ze wzrostem gospodarczym i zwiększoną
              produkcją, miała głębokie skutki społeczne i gospodarcze. Doprowadziła do rozwoju
              miast przemysłowych, powstania klasy robotniczej oraz znaczących zmian w praktykach
              pracy.
            </li>
          </ul>

          <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
              Przemysł 2.0 (koniec XIX i początek XX w.)
            </span>
          </h2>

          <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl dark:text-gray-400">
            <li>
              <strong>Energia elektryczna:</strong> Energia parowa została zastąpiona energią
              elektryczną, która okazała się bardziej wszechstronna i elastyczna. Umożliwiła
              tworzenie wydajniejszych maszyn i oświetlenia elektrycznego, co zrewolucjonizowało
              środowisko pracy i wydłużyło godziny pracy.
            </li>

            <li>
              <strong>Komunikacja:</strong> Wynalezienie telegrafu, a później telefonu, znacznie
              usprawniło komunikację na duże odległości. Umożliwiło to przedsiębiorstwom lepszą
              koordynację działań oraz przyspieszenie wymiany informacji.
            </li>

            <li>
              <strong>Silnik spalinowy:</strong> Silnik spalinowy przyczynił się do rozwoju
              przemysłu motoryzacyjnego i transportowego. W połączeniu z rozwojem linii montażowej,
              zrewolucjonizował transport, czyniąc go szybszym i bardziej dostępnym.
            </li>

            <li>
              <strong>Linia do produkcji masowej i montażu:</strong> Innowacje w produkcji,
              zwłaszcza wprowadzenie linii montażowej, usprawniły procesy produkcyjne. Techniki te,
              spopularyzowane przez Henry&apos;ego Forda, umożliwiły masową produkcję towarów,
              znacząco obniżając koszty produkcji. Koncepcje opracowane przez Forda stały się
              podstawą Systemu Produkcyjnego Toyoty, czyli Lean Manufacturing, w dzisiejszym
              przemyśle produkcyjnym.
            </li>
          </ul>

          <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
              Przemysł 3.0 (koniec XX wieku)
            </span>
          </h2>

          <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl dark:text-gray-400">
            <li>
              <strong>Informatyzacja:</strong> W miarę jak komputery stawały się coraz bardziej
              rozpowszechnione i niezawodne, przemysł produkcyjny zaczął je wykorzystywać do
              przetwarzania danych, systemów kontroli oraz zautomatyzowanego podejmowania decyzji.
            </li>

            <li>
              <strong>Automatyzacja:</strong> Zwiększone wykorzystanie automatyzacji w produkcji,
              gdzie maszyny i roboty zaczęły przejmować powtarzalne i niebezpieczne zadania,
              doprowadziło do wzrostu wydajności i zmniejszenia zapotrzebowania na pracę fizyczną.
              Było to kluczowym krokiem w kierunku dalszej integracji automatyzacji w ramach
              Przemysłu 4.0.
            </li>

            <li>
              <strong>Elektronika:</strong> Rozwój elektroniki umożliwił stosowanie komponentów i
              systemów elektronicznych w różnych systemach przemysłowych. Czujniki, mikrokontrolery
              i inne urządzenia elektroniczne zaczęły być powszechnie używane do monitorowania i
              kontrolowania maszyn oraz procesów.
            </li>

            <li>
              <strong>Sterowniki PLC (programowalne sterowniki logiczne):</strong> Rozwój i
              zastosowanie sterowników PLC umożliwiło programowalne sterowanie maszynami i
              procesami, redukując potrzebę ręcznych regulacji i interwencji człowieka.
            </li>
          </ul>

          <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
              Przemysł 3.0 (koniec XX wieku)
            </span>
          </h2>

          <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl dark:text-gray-400">
            <li>
              <strong>Informatyzacja:</strong> W miarę jak komputery stawały się coraz bardziej
              rozpowszechnione i niezawodne, przemysł produkcyjny zaczął je wykorzystywać do
              przetwarzania danych, systemów kontroli oraz zautomatyzowanego podejmowania decyzji.
            </li>

            <li>
              <strong>Automatyzacja:</strong> Zwiększone wykorzystanie automatyzacji w produkcji,
              gdzie maszyny i roboty zaczęły przejmować powtarzalne i niebezpieczne zadania,
              doprowadziło do wzrostu wydajności i zmniejszenia zapotrzebowania na pracę fizyczną.
              Było to kluczowym krokiem w kierunku dalszej integracji automatyzacji w ramach
              Przemysłu 4.0.
            </li>

            <li>
              <strong>Elektronika:</strong> Rozwój elektroniki umożliwił stosowanie komponentów i
              systemów elektronicznych w różnych systemach przemysłowych. Czujniki, mikrokontrolery
              i inne urządzenia elektroniczne zaczęły być powszechnie używane do monitorowania i
              kontrolowania maszyn oraz procesów.
            </li>

            <li>
              <strong>Sterowniki PLC (programowalne sterowniki logiczne):</strong> Rozwój i
              zastosowanie sterowników PLC umożliwiło programowalne sterowanie maszynami i
              procesami, redukując potrzebę ręcznych regulacji i interwencji człowieka.
            </li>
          </ul>

          <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
              Przemysł 4.0 (koniec XX wieku do chwili obecnej)
            </span>
          </h2>

          <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0 ps-6 text-lg text-gray-600 md:text-xl dark:text-gray-400">
            <li>
              <strong>Internet rzeczy (IoT):</strong> Czujniki i urządzenia wprowadzone w erze
              Przemysłu 3.0 zostały teraz połączone z Internetem, co umożliwia gromadzenie i wymianę
              danych w czasie rzeczywistym, a także monitorowanie i kontrolę procesów.
            </li>

            <li>
              <strong>Sztuczna inteligencja (AI) i uczenie maszynowe:</strong> Uczenie maszynowe,
              będące częścią sztucznej inteligencji, umożliwia podejmowanie autonomicznych decyzji,
              przewidywanie problemów, optymalizację procesów i podnoszenie jakości produktów.
            </li>

            <li>
              <strong>Automatyka i robotyka:</strong> Integracja robotów i automatyzacji z procesami
              produkcyjnymi osiągnęła nowy poziom. Choć robotykę wprowadzono w epoce Przemysłu 3.0,
              teraz wykorzystuje się bardziej zaawansowane roboty autonomiczne do przenoszenia
              materiałów, pakowania oraz niektórych aspektów montażu produktów.
            </li>

            <li>
              <strong>Cyfrowe bliźniaki:</strong> Tworzenie wirtualnych replik systemów fizycznych
              lub produktów umożliwia symulację i analizę. Cyfrowe bliźniaki są wykorzystywane do
              konserwacji predykcyjnej, projektowania produktów i optymalizacji procesów.
            </li>

            <li>
              <strong>Przetwarzanie w chmurze:</strong> Systemy oparte na chmurze oferują
              scentralizowaną platformę do przechowywania i dostępu do danych. Ułatwia to
              współpracę, skalowalność i udostępnianie danych w czasie rzeczywistym w różnych
              lokalizacjach.
            </li>

            <li>
              <strong>Cyberbezpieczeństwo:</strong> Wraz ze wzrostem łączności cyberbezpieczeństwo
              staje się krytycznym problemem. Ochrona danych i systemów przed zagrożeniami
              cybernetycznymi jest kluczowym aspektem Przemysłu 4.0.
            </li>

            <li>
              <strong>Rzeczywistość rozszerzona (AR) i rzeczywistość wirtualna (VR):</strong>
              Technologie AR i VR są wykorzystywane do szkoleń, zdalnego wsparcia technicznego oraz
              wizualizacji złożonych procesów i systemów.
            </li>

            <li>
              <strong>Produkcja przyrostowa (druk 3D):</strong> Druk 3D znajduje zastosowanie w
              szybkim prototypowaniu i produkcji, co umożliwia bardziej elastyczne i efektywne
              procesy produkcyjne.
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}
