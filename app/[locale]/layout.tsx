import "@/styles/globals.css"
import localFont from "next/font/local"
import { ReactNode } from "react"
import { locales } from "@/config"
import { siteConfig } from "@/config/site"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { getLocalePrimaryDialects } from "@/lib/locales"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Navbar } from "@/components/navbar/navbar"
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})
const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: t(siteConfig.title),
    description: t(siteConfig.description),
    keywords: t(siteConfig.keywords),
    authors: [
      {
        name: siteConfig.author,
        url: siteConfig.authorUrl,
      },
    ],
    openGraph: {
      title: t(siteConfig.title),
      description: t(siteConfig.description),
      url: "./",
      siteName: t(siteConfig.title),
      images: [siteConfig.socialBanner],
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: "./",
      types: {
        "application/rss+xml": `${siteConfig.siteUrl}/feed.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: t(siteConfig.title),
      card: "summary_large_image",
      images: [siteConfig.socialBanner],
      description: siteConfig.description,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.siteUrl}/site.webmanifest`,
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html
      lang={getLocalePrimaryDialects(locale)}
      className={`scroll-smooth`}
      suppressHydrationWarning
    >
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              {children}
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
