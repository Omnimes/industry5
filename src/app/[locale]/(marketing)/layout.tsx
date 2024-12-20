import { ReactNode } from "react"
import { setRequestLocale } from "next-intl/server"

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/navbar/navbar"

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function MarketingLayout({ children, params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <section className="relative flex min-h-screen flex-col">
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
