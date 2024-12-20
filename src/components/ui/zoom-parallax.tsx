"use client"

import { FC, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

interface Props {
  classes?: string
}

const ZoomParallax: FC<Props> = ({ classes }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: "/images/strategia/eko4.png",
      scale: scale1,
      classes: "relative w-[25%] h-[25%]",
    },
    {
      src: "/images/strategia/eko1.png",
      scale: scale2,
      classes: "relative top-[-30%] left-[5%] w-[35%] h-[30%]",
    },
    {
      src: "/images/strategia/eko2.png",
      scale: scale3,
      classes: "relative top-[-29%] left-[-25%] w-[20%] h-[28%]",
    },
    {
      src: "/images/strategia/eko3.png",
      scale: scale2,
      classes: "relative left-[27.5%] w-[25%] h-[25%]",
    },
    {
      src: "/images/eco.png",
      scale: scale3,
      classes: "relative left-[-27.5%] w-[25%] h-[25%]",
    },
    {
      src: "/images/strategia/eko5.png",
      scale: scale4,
      classes: "relative top-[27.5%] left-[5%] w-[20%] h-[25%]",
    },
    {
      src: "/images/strategia/eko6.png",
      scale: scale5,
      classes: "relative top-[22.5%] left-[25%] w-[15%] h-[15%]",
    },
  ]

  return (
    <section ref={container} className={cn("relative h-[200vh] w-full", classes)}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale, classes }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex size-full items-center justify-center"
            >
              <div className={` bg-zinc-200 dark:bg-zinc-800 ${classes}`}>
                <Image src={src} fill objectFit="cover" alt="image of beautiful person" />
              </div>
            </motion.div>
          )
        })}
      </div>
      <div className="h-screen leading-[0]"></div>
      {/* <p>Continue your content here...</p> */}
    </section>
  )
}

export default ZoomParallax
