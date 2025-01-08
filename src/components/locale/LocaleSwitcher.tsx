"use client"

import { useTransition } from "react"
import { useParams } from "next/navigation"
import { locales } from "@/config"
import { usePathname, useRouter } from "@/navigation"
import clsx from "clsx"
import { useLocale, useTranslations } from "next-intl"
import ReactCountryFlag from "react-country-flag"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  function onSelectChange(value: string) {
    const nextLocale = value
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }
  return (
    <Select onValueChange={onSelectChange} defaultValue={locale}>
      <SelectTrigger
        className={clsx(
          "inline-flex w-[60px] items-center justify-center rounded-md border-0 px-3 text-sm font-medium shadow-none ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isPending && "transition-opacity [&:disabled]:opacity-30"
        )}
        aria-label="Locale Switcher"
        aria-labelledby="Locale Switcher"
        title="Locale Switcher"
      >
        <SelectValue placeholder={t("label")} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            <ReactCountryFlag
              countryCode={cur == "en" ? "gb" : cur}
              svg
              className="flag"
              alt={`flag ${cur}`}
            />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
