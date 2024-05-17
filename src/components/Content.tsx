import Image from "next/image"
export const Content = () => {
    return (
        <>
            <section className="mx-auto max-w-7xl px-4">
                <div className="mx-auto w-full text-left md:w-11/12 md:text-center xl:w-9/12">
                    <h2 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-5xl dark:text-white">
                        Dlaczego Przemysł 5.0 jest ważny?
                        <span className="block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
                            Kluczowy trend w produkcji przemysłowej
                        </span>
                    </h2>
                    <p className="mb-6 px-0 text-lg text-gray-600 md:text-xl dark:text-gray-400">
                        Przemysł 5.0 jest ważny, ponieważ umożliwia przedsiębiorstwom i przemysłowi aktywne dostarczanie społeczeństwu rozwiązań pozwalających na ochronę zasobów, zapewnienie stabilności społecznej i realizację celów klimatycznych. Dzięki korzyściom skupionym na szerszym świecie, w tym na pracownikach, a nie tylko na produktywności i zyskach, Przemysł 5.0 zamienia połączone firmy w część rozwiązania, zamiast stwarzać potencjalny problem środowiskowy i społeczny.
                    </p>
                </div>
            </section>
            <section className="mx-auto lg:flex lg:justify-center lg:py-16">
                <div className="mx-auto px-4 md:max-w-full lg:max-w-screen-xl lg:px-8">
                    <div className="flex max-w-screen-lg flex-col overflow-hidden rounded sm:mx-auto md:shadow-sm lg:flex-row lg:border">
                        <div className="relative lg:w-1/2">
                            <Image src={"/images/3.png"} alt={"przemysł 5.0 tł"} width={1260} height={750} className="h-80 w-full object-cover lg:absolute lg:h-full" />
                            <svg
                                className="absolute right-0 top-0 hidden h-full translate-x-1 fill-[#ffffff] text-white lg:inline-block dark:fill-[#030711]"
                                viewBox="0 0 20 104"
                            >
                                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                            </svg>
                        </div>
                        <div className="mx-auto w-full px-0 py-8 text-left md:w-11/12 md:px-6 md:text-center lg:w-1/2 lg:max-w-5xl lg:text-left">
                            <h3 className="font-heading mb-3 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-left dark:text-white">
                                Jaka jest przyszłość Przemysłu 5.0?
                            </h3>
                            <p className="md:text-md mb-3 px-0 text-gray-600 dark:text-gray-400">
                                <span className="font-bold">Przyszłość Przemysłu 5.0</span> obejmuje produkcję robotów, w tym robotów przemysłowych, z ulepszonymi technologiami sztucznej inteligencji i obliczeń kognitywnych w celu poprawy wydajności i szybkości dostaw, a jednocześnie umożliwienia ludziom skupienia się na innych obszarach.
                            </p>
                            <div className="flex w-full items-center justify-start md:justify-center lg:justify-start">
                                <a
                                    href="/future"
                                    aria-label=""
                                    className="flex items-center font-semibold text-gray-900 transition-colors duration-200 dark:text-white"
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
                </div>
            </section>
        </>

    );
};