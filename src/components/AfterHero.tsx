import Image from "next/image"
import { MyLink } from "./ui/link"

export const AfterHero = () => {
    return (
        <section id="industry" className="mx-auto max-w-7xl px-4 py-24">
            <div className="mx-auto w-full text-left md:w-11/12 md:text-center xl:w-9/12">
                <h2 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-5xl dark:text-white">
                    Przemysł 5.0 - Ewolucja czy Rewolucja?
                    <span className="block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
                        Odkryj Nowe Granice Produkcji Przemysłowej
                    </span>
                </h2>
                <p className="text-muted-foreground mb-6 px-0 text-lg md:text-xl">
                    Ta fascynująca koncepcja skupia się na łączeniu dobra społeczeństwa, ekologii, odporności na czynniki zewnętrzne oraz efektywności działań produkcyjnych. Współpraca człowieka z maszyną ma się skupiać na produkcji zindywidualizowanej, bez masowości i utraty jakości.
                </p>
            </div>
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

                        <p className="md:text-md text-muted-foreground mb-3 px-0">
                            Przemysł 5.0 to rewolucyjne podejście do produkcji, które integruje ludzi, maszyny i technologie, zmieniając sposób, w jaki produkowane są towary i usługi.
                            Przemysł 5.0 nie tylko wykorzystuje zaawansowane technologie cyfrowe, takie jak sztuczna inteligencja, analiza danych czy internet rzeczy, ale również kładzie duży nacisk na rozwój umiejętności pracowników oraz bezpieczeństwo danych i systemów.
                        </p>

                        <div className="flex w-full items-center justify-start md:justify-center lg:justify-start">
                            <MyLink href="/industry" text={"Czytaj więcej"} />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}