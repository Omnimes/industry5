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
            <section className="lg:flex lg:justify-center lg:py-16">
                <div
                    className="overflow-hidden bg-white lg:mx-8 lg:flex lg:w-full lg:max-w-6xl lg:rounded-xl lg:shadow-md dark:bg-gray-900">
                    <div className="lg:w-1/2">
                        <Image src={"/images/industry.jpg"} alt={"test"} width={1000} height={1000} className="h-64 object-cover lg:h-full " />
                    </div>

                    <div className="max-w-xl px-6 py-12 lg:w-1/2 lg:max-w-5xl">
                        <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                            {/* Co to jest <span className="text-blue-500">przemysł 5.0</span>? */}
                            Temat
                        </h2>

                        <p className="mt-4 text-gray-500 dark:text-gray-300">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam
                            mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
                        </p>

                        <div className="mt-6 inline-flex w-full sm:w-auto">
                            <a href="#" className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-6 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Start Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}