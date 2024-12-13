import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid-a";
import { LuCopy } from "react-icons/lu";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function BentoGridEuropenUnion({ images, bluredImages }: { images: string[], bluredImages: string[] }) {
    const t = useTranslations("EuropeanUnion");

    const items = [
        {
            title: t("l4strong"),
            description: t("l4"),
            header: <ImageHeader src={images[0]} bluredString={bluredImages[0]} />,
            className: "md:col-span-2",
            icon: <LuCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: t("l5strong"),
            description: t("l5"),
            header: <ImageHeader src={images[1]} bluredString={bluredImages[1]} />,
            className: "md:col-span-1",
            icon: <LuCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: t("l6strong"),
            description: t("l6"),
            header: <ImageHeader src={images[2]} bluredString={bluredImages[2]} />,
            className: "md:col-span-1",
            icon: <LuCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: t("l7strong"),
            description: t("l7"),
            header: <ImageHeader src={images[3]} bluredString={bluredImages[3]} />,
            className: "md:col-span-2",
            icon: <LuCopy className="h-4 w-4 text-neutral-500" />,
        },
    ];

    return (
        <BentoGrid className="mx-auto md:auto-rows-[30rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}

const ImageHeader = ({ bluredString, src }: { bluredString: string, src: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl">
        <Image
            alt=""
            loading="eager"
            priority={true}
            className="rounded w-full"
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