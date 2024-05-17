import Image from "next/image";
import photo from "../../public/images/future.png";
export const Content3 = () => {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mx-auto w-full text-left md:w-11/12 md:text-center xl:w-9/12">
                <h2 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
                    Odkryj Potencjał <span className="block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent sm:inline">Przemysłu 5.0</span>
                </h2>
                <p className="mb-6 px-0 text-lg text-gray-600 md:text-xl dark:text-gray-400">Przemysł 5.0 to nie tylko kolejny krok w ewolucji przemysłu, lecz prawdziwa rewolucja w sposobie, w jaki postrzegamy produkcję.</p>
            </div>
      <div className="row-gap-10 grid max-w-screen-lg gap-5 sm:mx-auto lg:grid-cols-2 lg:py-16">
        <div className="flex flex-col justify-start">
          {/* <h2 className="font-heading mb-6 block w-full text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none md:text-center md:text-4xl
          md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-left lg:text-5xl dark:text-white">
            Odkryj Potencjał Przemysłu 5.0
          </h2> */}
          <p className=" mb-6 block w-full px-0 text-lg text-gray-600 md:text-center md:text-xl lg:text-left dark:text-gray-400">
            Poznaj innowacyjne podejścia, które zmieniają oblicze przemysłu, kładąc nacisk na postęp ludzki i zrównoważony rozwój.
            Odkryj jak Przemysł 5.0 przynosi korzyści dla społeczeństwa i środowiska, otwierając nowe możliwości dla biznesu i przemysłu.
          </p>
          <div className="grid space-y-3 font-bold text-gray-600 sm:grid-cols-2 sm:gap-2 sm:space-y-0 dark:text-gray-400">
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Decentralizacja
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Zmiana orientacji gospodarczej
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Zrównoważony rozwój
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Transformacja cyfrowa
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Nacisk na postęp ludzki i dobrostan
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Nowe wskaźniki
              </li>
            </ul>
          </div>
          <div className="my-6 flex w-full items-center justify-start md:justify-center lg:justify-start">
              <a
                  href="/strategy"
                  aria-label="Dowiedz się więcej o strategii transformacji cyfrowej"
                  className="flex items-center font-semibold text-gray-900 transition-colors duration-200 dark:text-white"
              >
                  Dowiedz się więcej o strategii transformacji cyfrowej
                  <svg
                      className="ml-2 inline-block w-3"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                  >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
              </a>
          </div>
          {/* <p className="my-6 block w-full px-0 text-lg text-gray-600 md:text-center md:text-xl lg:text-left">
          Sprawdź strategie transformacji cyfrowej
          </p> */}
        </div>
        <div>
          <Image
            className="h-56 w-full rounded object-cover shadow-lg sm:h-96"
            src={photo.src}
            alt=""
            width={1260}
            height={750}
          />
        </div>
      </div>
    </section>
  );
};