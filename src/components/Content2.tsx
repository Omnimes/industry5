import Image from "next/image"

export const Content2 = () => {
    return (
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-24">
            <div className="mx-auto mb-16 w-full text-left md:text-center">
                <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
                    Korzyści wprowadzenia&nbsp;
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">
                        Przemysłu 5.0
                    </span>
                </h2>
                <p className="text-muted-foreground mb-6 px-0 text-lg md:text-xl">
                    Przemysł 5.0 to koncepcja rozwoju przemysłu, która stawia na harmonię między człowiekiem a technologią, przekształcając tradycyjne środowisko produkcyjne. Oto kilka korzyści, które niesie ze sobą wprowadzenie Przemysłu 5.0
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 sm:mx-auto lg:grid-cols-2 ">
                <div className="grid grid-cols-2 gap-5">
                    <Image src={"/images/4.png"} alt={"przemysł 5.0 tł"} width={1260} height={750} className="col-span-2 h-56 w-full rounded object-cover shadow-lg" />
                    <Image src={"/images/5.png"} alt={"przemysł 5.0 tł"} width={1260} height={750} className="h-48 w-full rounded object-cover shadow-lg" />
                    <Image src={"/images/6.png"} alt={"przemysł 5.0 tł"} width={1260} height={750} className="h-48 w-full rounded object-cover shadow-lg" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="mb-4 border-b pb-4">
                        <h4 className="mb-2 font-semibold leading-5">
                            Zwiększona elastyczność produkcyjna
                        </h4>
                        <p className="text-muted-foreground text-sm">
                            Dzięki wykorzystaniu zaawansowanych technologii, takich jak IoT czy AI, przemysł 5.0 umożliwia elastyczne dostosowanie procesów produkcyjnych do zmieniających się potrzeb rynku.
                        </p>
                    </div>
                    <div className="mb-4 border-b pb-4">
                        <h4 className="mb-2 font-semibold leading-5">
                            Personalizacja i indywidualizacja produkcji
                        </h4>
                        <p className="text-muted-foreground text-sm">
                            Dzięki możliwościom analizy danych oraz produkcji na żądanie, Przemysł 5.0 umożliwia dostosowanie produktów do indywidualnych preferencji klientów, co może przyczynić się do zwiększenia konkurencyjności firm.
                        </p>
                    </div>
                    <div className="mb-4 border-b pb-4">
                        <h4 className="mb-2 font-semibold leading-5">
                            Bezpieczeństwo i ergonomia pracy
                        </h4>
                        <p className="text-muted-foreground text-sm">
                            Przemysł 5.0 stawia na współpracę między ludźmi a robotami, co może zmniejszyć ryzyko wypadków przy jednoczesnym zwiększeniu ergonomii pracy.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-2 font-semibold leading-5">
                            Tworzenie nowych miejsc pracy
                        </h4>
                        <p className="text-muted-foreground text-sm">
                            Choć automatyzacja może prowadzić do zmian w strukturze zatrudnienia, wprowadzenie Przemysłu 5.0 otwiera również nowe możliwości zatrudnienia, zwłaszcza w obszarach związanych z obsługą, programowaniem czy zarządzaniem technologią.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};