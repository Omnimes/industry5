import createMiddleware from "next-intl/middleware"

import { localeDetection, localePrefix, locales, pathnames } from "./config"

export const defaultLocale = "pl" as const
export const excludePaths = ["/blog/[slug]", "/eu-applications/[slug]"]
export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localeDetection,
  localePrefix,
})

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    // '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // '/(de|pl|en)/:path*',

    "/((?!api/|_next/|_proxy/|_vercel|_static|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
    // "/((?!api|_next/static|_vercel|_next/image|favicon.ico).*)"
  ],
}
