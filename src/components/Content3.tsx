import Image from "next/image"

import photo from "../../public/images/future.png"
import { MyLink } from "./ui/link"

export const Content3 = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <div className="mx-auto w-full text-left md:text-center">
        <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
          Odkryj Potencjał&nbsp;
          <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">
            Przemysłu 5.0
          </span>
        </h2>
        <p className="text-muted-foreground mb-6 px-0 text-lg md:text-xl">
          Przemysł 5.0 to nie tylko kolejny krok w ewolucji przemysłu, lecz prawdziwa rewolucja w
          sposobie, w jaki postrzegamy produkcję. </p>
      </div>
      {/* lg:py-16 */}
      <div className="row-gap-10 grid max-w-screen-lg gap-5 sm:mx-auto lg:grid-cols-2 ">
        <div className="flex flex-col justify-start">
          <p className="text-muted-foreground mb-6 block w-full px-0 text-lg md:text-center md:text-xl lg:text-left">
            Poznaj innowacyjne podejścia, które zmieniają oblicze przemysłu, kładąc nacisk na postęp
            ludzki i zrównoważony rozwój. Odkryj jak Przemysł 5.0 przynosi korzyści dla
            społeczeństwa i środowiska, otwierając nowe możliwości dla biznesu i przemysłu.
          </p>
          <div className="text-muted-foreground grid space-y-3 font-bold sm:grid-cols-2 sm:gap-2 sm:space-y-0 ">
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
            <MyLink
              href="/strategy"
              text={"Dowiedz się więcej o strategii transformacji cyfrowej"}
            />
          </div>
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
  )
}
