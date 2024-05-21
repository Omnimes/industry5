import { MyLink } from "./ui/link"
export const Content5 = () => {
    return (
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-24">
            <div className="mx-auto w-full text-left md:text-center">
                <h2 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:flex md:flex-col md:items-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
                    Historia inspiruje tych, którzy szukają rozwoju
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">
                        Poznaj Historię Innowacji Przemysłowych
                    </span>
                </h2>
                <p className="text-muted-foreground mb-6 px-0 text-lg md:text-xl">
                    Od początków rękodzielnictwa po współczesne inteligentne fabryki, przemysł przeszedł ogromną ewolucję, każda przynosiła ze sobą nie tylko rozwój technologiczny, ale także głębokie zmiany społeczne i ekonomiczne. Przemysł pozostaje siłą napędową globalnej gospodarki, a jego historia pokazuje, jak innowacje technologiczne mogą kształtować naszą przyszłość.
                </p>
                <MyLink href="/history" text={"Czytaj więcej"} />
            </div>
        </section>
    )
}