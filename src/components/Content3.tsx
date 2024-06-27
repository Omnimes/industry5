import Image from "next/image"
import { MyLink } from "./ui/link"
import { useTranslations } from "next-intl"

export const Content3 = () => {
  const t = useTranslations("Content3");
  const taria = useTranslations("AriaLabel");
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-24">
      <div className="mx-auto mb-16 w-full text-left md:text-center">
        <h2 data-aos="fade-up" className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
          {t("head1")}&nbsp;
          <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">{t("head1span")}</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="300" className="text-muted-foreground mb-6 px-0 text-lg md:text-xl">{t("p1")}</p>
      </div>
      <div className="row-gap-10 grid max-w-screen-lg gap-5 sm:mx-auto lg:grid-cols-2 ">
        <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="500" className="flex flex-col justify-start">
          <p className="text-muted-foreground mb-6 block w-full px-0 text-lg md:text-center md:text-xl lg:text-left">{t("p2")}</p>
          <div className="text-muted-foreground grid space-y-3 font-bold sm:grid-cols-2 sm:gap-2 sm:space-y-0 ">
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {t("list1")}
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {t("list2")}
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {t("list3")}
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {t("list4")}
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {t("list5")}
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="text-deep-purple-accent-400 mt-px size-5"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {t("list6")}
              </li>
            </ul>
          </div>
          <div className="my-6 flex w-full items-center justify-start md:justify-center lg:justify-start">
            <MyLink
              href="/strategy"
              aria-label={taria("footerAria") + t("link")}
              text={t("link")}
            />
          </div>
        </div>
          <Image
            data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="500"
            className="h-56 w-full rounded object-cover shadow-lg sm:h-96"
            src={"/images/future.png"}
            alt={t("alt")}
            width={1260}
            height={750}
          />
      </div>
    </section>
  )
}
