"use client"

import React, { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export const TextRevealCard = ({
  text,
  desc,
  className,
}: {
  text: string
  desc?: string
  className?: string
}) => {
  return (
    <div className={cn("bg-background relative w-full overflow-hidden", className)}>
      <div className="w-fit max-w-screen-xl overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] md:mx-auto md:mb-2">
        <h1 className="font-heading bg-[#111827] bg-clip-text py-5 text-2xl tracking-normal text-transparent sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:bg-white">
          {text}
        </h1>
        <MemoizedStars />
      </div>
      {desc && (
        <p className="text-muted-foreground mx-auto mb-8 max-w-screen-xl px-0 pb-3 text-lg md:text-center md:text-xl">
          {desc}
        </p>
      )}
      {/* <hr className="my-8" /> */}
    </div>
  )
}

export const TextRevealCardDouble = ({
  text,
  textPart,
  desc,
  className,
}: {
  text: string
  textPart: string
  desc?: string
  className?: string
}) => {
  return (
    <div className={cn("bg-background relative w-full overflow-hidden py-10", className)}>
      <div className="w-fit max-w-screen-xl overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] md:mx-auto md:mb-2">
        <h1 className="font-heading bg-[#111827] bg-clip-text py-5 text-2xl tracking-normal text-transparent sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:bg-white">
          <span>{text}</span>
          <br />
          {textPart}
        </h1>
        <MemoizedStars />
      </div>
      {desc && (
        <p className="text-muted-foreground mx-auto max-w-screen-xl px-0 pb-3 text-lg md:text-center md:text-xl">
          {desc}
        </p>
      )}
      <hr className="my-8" />
    </div>
  )
}

const Stars = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const randomMove = () => Math.random() * 4 - 2
  const randomOpacity = () => Math.random()
  const random = () => Math.random()
  return (
    <div className="absolute inset-0">
      {isClient
        ? [...Array(120)].map((_, i) => (
            <motion.span
              key={`star-${i}`}
              animate={{
                top: `calc(${random() * 100}% + ${randomMove()}px)`,
                left: `calc(${random() * 100}% + ${randomMove()}px)`,
                opacity: randomOpacity(),
                scale: [1, 1.2, 0],
              }}
              transition={{
                duration: random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: `${random() * 100}%`,
                left: `${random() * 100}%`,
                width: `2px`,
                height: `2px`,
                borderRadius: "50%",
                zIndex: 1,
              }}
              className="inline-block bg-black dark:bg-white"
            />
          ))
        : null}
    </div>
  )
}

export const MemoizedStars = memo(Stars)
