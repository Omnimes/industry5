"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Leaf, Lightbulb, Recycle } from "lucide-react"
import { useTranslations } from "next-intl"

const lineWidth = 80
const lineHeight = 2

const LogoBeam = () => {
  return (
    <div className="flex min-h-52 items-center justify-center">
      <div className="relative flex items-center">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-black/30 p-4 dark:border-white/30">
          <Recycle size={24} />
        </div>
        <div
          className="relative bg-black dark:bg-white"
          style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, overflow: "hidden" }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-transparent via-white to-transparent opacity-75 dark:via-black"
            initial={{ x: "-40px" }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="relative flex size-16 items-center justify-center overflow-hidden rounded-2xl border-2 border-black/70 p-4 shadow-[0_0_15px_5px_#dbe0e2] dark:border-white/70">
          <Leaf size={24} />
          <motion.div
            className="absolute left-0 top-0 size-full bg-gradient-to-r from-transparent via-black to-transparent opacity-30 dark:via-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div
          className="relative bg-black dark:bg-white"
          style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, overflow: "hidden" }}
        >
          <motion.div
            className="absolute right-0 top-0 h-full w-10 bg-gradient-to-r from-transparent via-white to-transparent opacity-75 dark:via-black"
            initial={{ x: "40px" }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="flex size-14 items-center justify-center rounded-2xl border border-black/30 p-4 dark:border-white/30">
          <Lightbulb size={24} />
        </div>
      </div>
    </div>
  )
}

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      className="relative flex-1 overflow-hidden rounded-xl border border-purple-500 bg-gradient-to-b from-muted/20 to-muted p-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#5D2CA8",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10,
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  )
}

export const BentoBox1 = () => {
  const t = useTranslations("EuropeanUnion")
  return (
    <div className="mt-16 flex items-center justify-center rounded-lg">
      <div className="flex min-h-[800px] w-full flex-col gap-4 md:h-[800px] md:min-h-[800px] md:flex-row">
        <CardWithEffect>
          <div className="flex h-full flex-col justify-between p-2">
            <div className="mb-4 h-full">
              <Image
                alt=""
                loading="eager"
                priority={true}
                className="size-full rounded"
                height={450}
                width={450}
                src={"/images/eu/personalisation.webp"}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="mt-4 pt-6 text-left">
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                {t("l1strong")}
              </h3>
              <p className="text-balance text-muted-foreground">{t("l1")}</p>
            </div>
          </div>
        </CardWithEffect>
        <div className="flex size-full flex-col gap-5 md:h-[800px] md:w-1/2">
          <CardWithEffect>
            <div className="flex h-full flex-col justify-center p-2">
              <div className="flex min-h-52 items-center justify-center overflow-hidden">
                <video className="object-cover" src="/images/eu/video-ai.mp4" autoPlay muted loop />
              </div>
              <div className="pt-6 text-left">
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  {t("l2strong")}
                </h3>
                <p className="text-balance text-muted-foreground">{t("l2")}</p>
              </div>
            </div>
          </CardWithEffect>
          <CardWithEffect>
            <div className="flex h-full flex-col justify-center p-2">
              <LogoBeam />
              <div className="pt-6 text-left">
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  {t("l3strong")}
                </h3>
                <p className="text-balance text-muted-foreground">{t("l3")}</p>
              </div>
            </div>
          </CardWithEffect>
        </div>
      </div>
    </div>
  )
}
