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
                    <Separator />

                    {/* <div className="m-auto flex w-max items-center justify-between space-x-4">
                        <a href="tel:+243996660436" aria-label="call">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="m-auto w-5"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
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
            <svg xmlns="http://www.w3.org/2000/svg"
                width="50"
                zoomAndPan="magnify"
                viewBox="0 0 375 374.999991"
                height="50"
                preserveAspectRatio="xMidYMid meet"
                version="1.0">
                <defs>
                    <clipPath id="2d255f5dfb">
                        <path d="M 77 164 L 361.8125 164 L 361.8125 209 L 77 209 Z M 77 164 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="b7cd2c2336">
                        <path d="M 131 56 L 361.8125 56 L 361.8125 101 L 131 101 Z M 131 56 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="2ffa92b981">
                        <path d="M 251 110 L 361.8125 110 L 361.8125 155 L 251 155 Z M 251 110 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="f13b350655">
                        <path d="M 4.8125 164 L 56 164 L 56 209 L 4.8125 209 Z M 4.8125 164 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="9fc63a1d8b">
                        <path d="M 142 218 L 361.8125 218 L 361.8125 263 L 142 263 Z M 142 218 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="338ba7096a">
                        <path d="M 164 273 L 361.8125 273 L 361.8125 318 L 164 318 Z M 164 273 " clipRule="nonzero" />
                    </clipPath>
                </defs>
                <g clipPath="url(#2d255f5dfb)">
                    <path fill="#0091ff" d="M 485.929688 164.800781 L 255.726562 164.800781 L 245.894531 181.796875 L 223.132812 181.796875 L 213.304688 164.800781 C 204.828125 164.800781 98.617188 164.800781 90.140625 164.800781 L 77.425781 186.820312 L 90.140625 208.839844 C 98.617188 208.839844 204.828125 208.839844 213.304688 208.839844 L 223.132812 191.84375 L 245.894531 191.84375 L 255.726562 208.839844 L 485.929688 208.839844 C 488.464844 194.292969 488.464844 179.394531 485.929688 164.800781 Z M 485.929688 164.800781 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#b7cd2c2336)">
                    <path fill="#0091ff" d="M 169.875 100.574219 L 179.707031 83.582031 L 202.46875 83.582031 L 212.296875 100.574219 L 455 100.574219 C 409.386719 49.152344 358.222656 56.492188 296.535156 56.492188 L 212.296875 56.492188 L 202.46875 73.488281 L 179.707031 73.488281 L 169.875 56.492188 L 144.445312 56.492188 L 131.734375 78.511719 L 144.445312 100.53125 L 169.875 100.53125 Z M 169.875 100.574219 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#2ffa92b981)">
                    <path fill="#0091ff" d="M 321.917969 127.664062 L 299.15625 127.664062 L 289.324219 110.667969 L 263.898438 110.667969 L 251.183594 132.6875 L 263.898438 154.707031 L 289.324219 154.707031 L 299.15625 137.710938 L 321.917969 137.710938 L 331.746094 154.707031 L 483.789062 154.707031 C 479.683594 138.628906 472.5625 123.730469 463.082031 110.625 L 331.746094 110.625 Z M 321.917969 127.664062 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#f13b350655)">
                    <path fill="#0091ff" d="M 17.527344 164.800781 L 4.8125 186.820312 L 17.527344 208.882812 L 42.996094 208.882812 L 55.710938 186.820312 L 42.996094 164.800781 Z M 17.527344 164.800781 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <path fill="#0091ff" d="M 178.570312 132.6875 L 191.285156 154.707031 L 216.753906 154.707031 L 229.46875 132.6875 L 216.753906 110.667969 L 191.285156 110.667969 Z M 178.570312 132.6875 " fillOpacity="1" fillRule="nonzero" />
                <path fill="#0091ff" d="M 104.425781 273.066406 L 91.667969 295.128906 L 104.425781 317.148438 L 129.855469 317.148438 L 142.570312 295.128906 L 129.855469 273.066406 Z M 104.425781 273.066406 " fillOpacity="1" fillRule="nonzero" />
                <g clipPath="url(#9fc63a1d8b)">
                    <path fill="#0091ff" d="M 213.304688 235.929688 L 190.539062 235.929688 L 180.710938 218.933594 L 155.28125 218.933594 L 142.570312 240.953125 L 155.28125 262.972656 L 180.710938 262.972656 L 190.539062 245.976562 L 213.304688 245.976562 L 223.132812 262.972656 L 463.039062 262.972656 C 472.519531 249.867188 479.640625 234.96875 483.746094 218.890625 C 404.097656 218.890625 302.738281 218.890625 223.089844 218.890625 Z M 213.304688 235.929688 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#338ba7096a)">
                    <path fill="#0091ff" d="M 278.488281 290.105469 L 255.726562 290.105469 L 245.894531 273.109375 C 222.957031 273.109375 199.976562 273.109375 176.996094 273.109375 L 164.28125 295.128906 L 176.996094 317.148438 C 199.976562 317.148438 222.914062 317.148438 245.894531 317.148438 L 255.726562 300.152344 L 278.488281 300.152344 L 288.320312 317.148438 C 353.460938 317.148438 408.207031 325.84375 455 273.066406 L 288.320312 273.066406 Z M 278.488281 290.105469 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <path strokeLinecap="round" transform="matrix(0, 0.75, -0.75, 0, 370.183574, 30.878904)" fill="none" strokeLinejoin="miter" d="M 8.500003 8.499974 L 409.171905 8.499974 " stroke="#0091ff" strokeWidth="17" strokeOpacity="1" strokeMiterlimit="4" />
            </svg>
        </Link>);
}