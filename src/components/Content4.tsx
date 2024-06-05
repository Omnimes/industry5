import Image from "next/image"
import { useTranslations } from "next-intl"
export const Content4 = () => {
  const t = useTranslations("Content4")
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-24">
      <div className="mx-auto w-full text-left md:text-center">
        <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
          {t("head1")}&nbsp;
          <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">{t("head1span")}</span>
        </h2>
        <p className="text-muted-foreground mb-6 px-0 text-lg md:text-xl">{t("p1")}</p>
        <p className="mb-6 mt-16 px-0">{t("p2")}</p>
      </div>
      <div className="mx-auto px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-5xl lg:px-8">
        <div className="row-gap-8 sm:row-gap-0 grid sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-b p-8 sm:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={"/images/features/1.png"} alt={t("alt1")} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t("head2")}</h6>
              <p className="text-muted-foreground mb-3 text-sm">{t("p3")}</p>
            </div>
          </div>
          <div className="border-b p-8 lg:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={"/images/features/2.png"} alt={t("alt2")} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t("head3")}</h6>
              <p className="text-muted-foreground mb-3 text-sm">{t("p4")}</p>
            </div>
          </div>
          <div className="border-b p-8 sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={"/images/features/3.png"} alt={t("alt3")} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t("head4")}</h6>
              <p className="text-muted-foreground mb-3 text-sm">{t("p5")}</p>
            </div>
          </div>
          <div className="border-b p-8 lg:border-b-0 lg:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={"/images/features/4.png"} alt={t("alt4")} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t("head5")}</h6>
              <p className="text-muted-foreground mb-3 text-sm">{t("p6")}</p>
            </div>
          </div>
          <div className="border-b p-8 sm:border-b-0 sm:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={"/images/features/5.png"} alt={t("alt5")} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t("head6")}</h6>
              <p className="text-muted-foreground mb-3 text-sm">{t("p7")}</p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={"/images/features/6.png"} alt={t("alt6")} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t("head7")}</h6>
              <p className="text-muted-foreground mb-3 text-sm">{t("p8")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
