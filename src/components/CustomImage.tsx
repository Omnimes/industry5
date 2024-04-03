import Image from "next/image"
type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImage({ src, alt, priority }: Props) {
    const prty = priority ? true : false

    return (
        <div className="flex size-full justify-center">
            <Image
                className="z-1 size-auto"
                src={src}
                alt={alt}
                width={650}
                height={650}
                loading={'lazy'}
                priority={prty}
            />
        </div>
    )
}