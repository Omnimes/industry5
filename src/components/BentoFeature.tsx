import React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { LuCopy } from "react-icons/lu"

import { BentoGrid, BentoGridItem } from "./ui/bento-grid-a"

export function BentoGridEuropenUnion({
  images,
  bluredImages,
}: {
  images: string[]
  bluredImages: string[]
}) {
  const t = useTranslations("EuropeanUnion")

  const items = [
    {
      title: t("l4strong"),
      description: t("l4"),
      header: <ImageHeader src={images[0]} bluredString={bluredImages[0]} />,
      className: "md:col-span-2",
      icon: <LuCopy className="size-4 text-neutral-500" />,
    },
    {
      title: t("l5strong"),
      description: t("l5"),
      header: <ImageHeader src={images[1]} bluredString={bluredImages[1]} />,
      className: "md:col-span-1",
      icon: <LuCopy className="size-4 text-neutral-500" />,
    },
    {
      title: t("l6strong"),
      description: t("l6"),
      header: <ImageHeader src={images[2]} bluredString={bluredImages[2]} />,
      className: "md:col-span-1",
      icon: <LuCopy className="size-4 text-neutral-500" />,
    },
    {
      title: t("l7strong"),
      description: t("l7"),
      header: <ImageHeader src={images[3]} bluredString={bluredImages[3]} />,
      className: "md:col-span-2",
      icon: <LuCopy className="size-4 text-neutral-500" />,
    },
  ]

  return (
    <BentoGrid className="mx-auto md:auto-rows-[30rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          // icon={item.icon}
        />
      ))}
    </BentoGrid>
  )
}

const ImageHeader = ({ bluredString, src }: { bluredString: string; src: string }) => (
  <div className="flex size-full min-h-32 flex-1 rounded-xl">
    <Image
      alt=""
      loading="eager"
      priority={true}
      className="w-full rounded"
      height={450}
      width={450}
      src={src}
      placeholder="blur"
      blurDataURL={bluredString}
      style={{
        objectFit: "cover",
      }}
    />
  </div>
)
