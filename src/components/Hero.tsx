import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Hero = () => {
    const t = useTranslations("Hero")
    return (
        <section className="relative mt-[-65px] flex h-screen flex-col items-center justify-center px-3 py-0 text-center text-white">
            <div className="absolute left-0 top-0 size-full overflow-hidden">
                <video className="absolute min-h-full min-w-full object-cover" src="/video/hero.mp4" autoPlay muted loop />
                <div className="absolute z-[1] size-full bg-black/65" />
            </div>
            <div className="z-[2] space-y-2">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center">
                        <h1 className="font-heading bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-4xl 
                        font-bold tracking-normal text-transparent drop-shadow-xl sm:text-6xl">
                            {t("title")}
                        </h1>
                        <p className="mt-6 bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text font-sans text-lg font-medium leading-8 text-transparent drop-shadow-xl">
                            {t("desc")}
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6">
                            <Button asChild className="bg-gradient-to-r from-slate-600 to-slate-800 text-white">
                                <Link href="#industry">{t("button1")}</Link>
                            </Button>
                            <Button variant="link" asChild className="text-white">
                                <Link href="/eu-applications">{t("button2")}<ArrowRightIcon className="ml-2 size-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}