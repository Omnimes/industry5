import Link from "next/link";
import { siteConfig } from "@/data/config/site";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator"

export const Footer = () => {
    const t = useTranslations("Navbar");
    const tr = useTranslations("Footer");
    return (
        <footer className="w-full py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="-mb-0.5 w-full" viewBox="0 0 1367.743 181.155">
                <path
                    className="fill-current text-gray-100 dark:text-gray-900"
                    id="wave"
                    data-name="wave"
                    d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
                    transform="translate(1.743 66.155)"
                ></path>
            </svg>
            <div className="bg-gradient-to-b from-gray-100 to-transparent pt-1 md:px-12 lg:px-28 dark:from-gray-900 dark:to-transparent">
                <div className="container m-auto space-y-6 text-gray-400 dark:text-gray-300">
                    <Logo />
                    <ul
                        role="list"
                        className="flex flex-col flex-wrap items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
                    >
                        {siteConfig.mainNav.map(item => {
                            return (
                                <li key={item.href} role="listitem">
                                    <Link href={item.href} className="hover:text-primary">
                                        {t(item.title)}
                                    </Link>
                                </li>
                            )
                        })}
                        <li role="listitem">
                            <Link href={"/strategy"}>{t("title")}</Link>
                        </li>
                        {siteConfig.subNav.map(item => {
                            return (
                                <li key={item.href} role="listitem">
                                    <Link href={item.href} className="hover:text-primary">
                                        {t(item.title)}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <Separator/>

                    {/* <div className="m-auto flex w-max items-center justify-between space-x-4">
                        <a href="tel:+243996660436" aria-label="call">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="m-auto w-5"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                ></path>
                            </svg>
                        </a>
                        <a href="mailto:hello@mail.com" aria-label="send mail">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="m-auto w-5"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                                ></path>
                            </svg>
                        </a>
                        <a href="#" title="facebook" target="blank" aria-label="facebook">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="m-auto w-5"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                ></path>
                            </svg>
                        </a>
                        <a href="#" title="linkedin" target="blank" aria-label="linkedin">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="m-auto w-5"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                ></path>
                            </svg>
                        </a>
                    </div>  */}
                    <div className="text-center">
                        <span className="text-sm tracking-wide">
                            {tr("Copyright")}&nbsp;
                            <span id="year">
                                - 2024
                            </span>&nbsp;
                            {tr("reserved")}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="150"
                zoomAndPan="magnify" viewBox="0 0 211.5 56.999997" height="40"
                preserveAspectRatio="xMidYMid meet" version="1.0">
                <defs>
                    <g />
                    <clipPath id="e387b1a02d">
                        <path d="M 13 24 L 64.347656 24 L 64.347656 33 L 13 33 Z M 13 24 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="ef64e1516f">
                        <path d="M 22 4 L 64.347656 4 L 64.347656 13 L 22 13 Z M 22 4 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="82f5261302">
                        <path d="M 44 14 L 64.347656 14 L 64.347656 23 L 44 23 Z M 44 14 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="acdea990bb">
                        <path d="M 24 34 L 64.347656 34 L 64.347656 43 L 24 43 Z M 24 34 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="8a19060377">
                        <path d="M 28 43 L 64.347656 43 L 64.347656 53 L 28 53 Z M 28 43 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="cf0eb0bbba">
                        <path d="M 63 0.0664062 L 66 0.0664062 L 66 56.933594 L 63 56.933594 Z M 63 0.0664062 "
                            clipRule="nonzero" />
                    </clipPath>
                </defs>
                <g clipPath="url(#e387b1a02d)">
                    <path fill="#0091ff"
                        d="M 86.5625 24.496094 L 45.144531 24.496094 L 43.375 27.550781 L 39.28125 27.550781 L 37.511719 24.496094 C 35.984375 24.496094 16.878906 24.496094 15.351562 24.496094 L 13.066406 28.457031 L 15.351562 32.417969 C 16.878906 32.417969 35.984375 32.417969 37.511719 32.417969 L 39.28125 29.359375 L 43.375 29.359375 L 45.144531 32.417969 L 86.5625 32.417969 C 87.015625 29.800781 87.015625 27.121094 86.5625 24.496094 Z M 86.5625 24.496094 "
                        fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#ef64e1516f)">
                    <path fill="#0091ff"
                        d="M 29.699219 12.941406 L 31.464844 9.882812 L 35.5625 9.882812 L 37.332031 12.941406 L 80.996094 12.941406 C 72.789062 3.6875 63.585938 5.007812 52.484375 5.007812 L 37.332031 5.007812 L 35.5625 8.066406 L 31.464844 8.066406 L 29.699219 5.007812 L 25.121094 5.007812 L 22.835938 8.96875 L 25.121094 12.933594 L 29.699219 12.933594 Z M 29.699219 12.941406 "
                        fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#82f5261302)">
                    <path fill="#0091ff"
                        d="M 57.050781 17.8125 L 52.957031 17.8125 L 51.1875 14.753906 L 46.613281 14.753906 L 44.324219 18.71875 L 46.613281 22.679688 L 51.1875 22.679688 L 52.957031 19.621094 L 57.050781 19.621094 L 58.820312 22.679688 L 86.175781 22.679688 C 85.4375 19.785156 84.15625 17.105469 82.449219 14.746094 L 58.820312 14.746094 Z M 57.050781 17.8125 "
                        fillOpacity="1" fillRule="nonzero" />
                </g>
                <path fill="#0091ff"
                    d="M 2.289062 24.496094 L 0 28.457031 L 2.289062 32.425781 L 6.871094 32.425781 L 9.15625 28.457031 L 6.871094 24.496094 Z M 2.289062 24.496094 "
                    fillOpacity="1" fillRule="nonzero" />
                <path fill="#0091ff"
                    d="M 31.261719 18.71875 L 33.550781 22.679688 L 38.132812 22.679688 L 40.417969 18.71875 L 38.132812 14.753906 L 33.550781 14.753906 Z M 31.261719 18.71875 "
                    fillOpacity="1" fillRule="nonzero" />
                <path fill="#0091ff"
                    d="M 17.921875 43.972656 L 15.628906 47.941406 L 17.921875 51.90625 L 22.496094 51.90625 L 24.785156 47.941406 L 22.496094 43.972656 Z M 17.921875 43.972656 "
                    fillOpacity="1" fillRule="nonzero" />
                <g clipPath="url(#acdea990bb)">
                    <path fill="#0091ff"
                        d="M 37.511719 37.292969 L 33.414062 37.292969 L 31.648438 34.234375 L 27.070312 34.234375 L 24.785156 38.195312 L 27.070312 42.15625 L 31.648438 42.15625 L 33.414062 39.097656 L 37.511719 39.097656 L 39.28125 42.15625 L 82.441406 42.15625 C 84.148438 39.800781 85.429688 37.117188 86.167969 34.226562 C 71.835938 34.226562 53.601562 34.226562 39.273438 34.226562 Z M 37.511719 37.292969 "
                        fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#8a19060377)">
                    <path fill="#0091ff"
                        d="M 49.238281 47.039062 L 45.144531 47.039062 L 43.375 43.980469 C 39.25 43.980469 35.113281 43.980469 30.980469 43.980469 L 28.691406 47.941406 L 30.980469 51.90625 C 35.113281 51.90625 39.238281 51.90625 43.375 51.90625 L 45.144531 48.847656 L 49.238281 48.847656 L 51.007812 51.90625 C 62.726562 51.90625 72.578125 53.46875 80.996094 43.972656 L 51.007812 43.972656 Z M 49.238281 47.039062 "
                        fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#cf0eb0bbba)">
                    <path strokeLinecap="round"
                        transform="matrix(0, 0.748231, -0.748231, 0, 65.717387, 0.399386)" fill="none"
                        strokeLinejoin="miter" d="M 1.502278 1.501724 L 73.829113 1.501724 " stroke="#0091ff"
                        strokeWidth="3" strokeOpacity="1" strokeMiterlimit="4" />
                </g>
            </svg>
        </Link>);
}