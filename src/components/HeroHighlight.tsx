"use client";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import AnimatedShinyText from "./ui/shiny-text-badge";

export function HeroHighlightDemo() {
    const t = useTranslations("Hero");
    const taria = useTranslations("AriaLabel");
    return (
        <>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="font-heading bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-4xl font-bold tracking-normal text-transparent drop-shadow-xl sm:text-6xl"
            >
                {t("title")}
                <Highlight className="text-white">
                    {t("title-highlight")}
                </Highlight>
            </motion.h1>
            <motion.p
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className={cn(
                    "mt-6 mb-12 font-sans text-xl font-medium leading-8 text-transparent drop-shadow-xl tracking-tight",
                    "bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text",
                    "text-balance",
                )}
            >
                {t("desc")}
            </motion.p>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="mt-10 flex flex-col sm:flex-row gap-y-2 items-center justify-center gap-x-6"
            >
                <Link
                    href="#industry"
                    aria-label={taria("heroAria")}
                    rel="noreferrer noopener"
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        ✨ {t("button1")}
                    </AnimatedShinyText>
                </Link>
                <Link
                    href="/eu-applications"
                    rel="noreferrer noopener"
                    aria-label={taria("heroEuAria")}
                    className={cn(
                        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                        "underline-offset-4 hover:underline text-white",
                        "h-10 py-2 px-4",
                    )}
                >
                    {t("button2")}
                    <ArrowRightIcon className="ml-2 size-4" />
                </Link>
            </motion.div>
        </>
    );
}
