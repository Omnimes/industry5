import Image from "next/image"

export const AfterHero = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-24">
            <div className="mx-auto w-full text-left md:w-11/12 md:text-center xl:w-9/12">
                <h2 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-5xl dark:text-white">
                    Przemysł 5.0 - Ewolucja czy Rewolucja?
                    <span className="block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
                        Odkryj Nowe Granice Produkcji Przemysłowej
                    </span>
                </h2>
                <p className="mb-6 px-0 text-lg text-gray-600 md:text-xl">
                    Ta fascynująca koncepcja skupia się na łączeniu dobra społeczeństwa, ekologii, odporności na czynniki zewnętrzne oraz efektywności działań produkcyjnych. Współpraca człowieka z maszyną ma się skupiać na produkcji zindywidualizowanej, bez masowości i utraty jakości.
                </p>
                {/* <div className="mb-4 space-x-0 md:mb-8 md:space-x-2">
                    <a className="btn btn-primary btn-lg mb-2 inline-flex w-full items-center justify-center sm:mb-0 sm:w-auto" href="#">
                        Get Started
                        <svg className="ml-1 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a className="btn btn-light btn-lg mb-2 inline-flex w-full items-center justify-center sm:mb-0 sm:w-auto" href="#">
                        Book a Demo
                        <svg className="ml-1 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div> */}
            </div>
            {/* <div className="mx-auto mt-20 w-full text-center md:w-10/12">
                <img src="/hero.jpg" alt="Hellonext feedback boards software screenshot" className="w-full rounded-lg shadow-2xl" />
            </div> */}
            {/* <h4>
                Czy możemy uznać to za kolejną rewolucję czy jedynie ewolucję założeń Przemysłu 4.0?
            </h4> */}
            <section className="mx-auto lg:flex lg:justify-center lg:py-16">
                <div
                    className="overflow-hidden rounded-t-md lg:flex lg:w-full lg:max-w-5xl lg:rounded-xl lg:shadow-md">
                    <div className="lg:w-1/2">
                        <Image src={"/images/2.png"} alt={"przemysł 5.0 tł"} width={1152} height={768} className="h-64 object-cover lg:h-full" />
                    </div>

                    <div className="mx-auto w-full px-0 py-8 text-left md:w-11/12 md:px-6 md:text-center lg:w-1/2 lg:max-w-5xl lg:text-left">
                        <h3 className="font-heading mb-3 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-left dark:text-white">
                            Czym dokładnie jest Przemysł 5.0?
                        </h3>

                        <p className="md:text-md mb-3 px-0 text-gray-600">
                            Przemysł 5.0 to rewolucyjne podejście do produkcji, które integruje ludzi, maszyny i technologie, zmieniając sposób, w jaki produkowane są towary i usługi.
                            Przemysł 5.0 nie tylko wykorzystuje zaawansowane technologie cyfrowe, takie jak sztuczna inteligencja, analiza danych czy internet rzeczy, ale również kładzie duży nacisk na rozwój umiejętności pracowników oraz bezpieczeństwo danych i systemów.
                        </p>

                        <div className="flex w-full items-center justify-start md:justify-center lg:justify-start">
                            <a
                                href="/industry"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-900 transition-colors duration-200 dark:text-white"
                            >
                                Czytaj więcej
                                <svg
                                    className="ml-2 inline-block w-3"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}