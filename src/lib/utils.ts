import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { getLocalePrimaryDialects } from "./locales"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedDate(dateString: string, locale: string): string {
  const lang = getLocalePrimaryDialects(locale)
  return new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(new Date(dateString))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function parseDate(dateStr: string) {
  if (dateStr.length !== 10 || !dateStr.includes(".")) {
    return dateStr
  }
  const [day, month, year] = dateStr.split(".")
  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)))
}

export function getQuarterStartEnd(quarterStr: string, year: number) {
  let startMonth, endMonth

  switch (quarterStr) {
    case "I":
      startMonth = 0
      endMonth = 2
      break
    case "II":
      startMonth = 3
      endMonth = 5
      break
    case "III":
      startMonth = 6
      endMonth = 8
      break
    case "IV":
      startMonth = 9
      endMonth = 11
      break
    default:
      return [null, null]
  }

  const startDate = new Date(Date.UTC(year, startMonth, 1))
  const endDate = new Date(Date.UTC(year, endMonth + 1, 0, 23, 59, 59, 999))
  return [startDate, endDate]
}

export function isInPeriod(dateFromStr: string, dateToStr: string) {
  const now = new Date()
  const currentYear = now.getUTCFullYear()

  if (dateFromStr === "" && dateToStr === "") {
    return { inPeriod: false, status: "noData" }
  }

  let dateFrom = null
  let dateTo = null

  if (dateFromStr.match(/^\d{2}\.\d{2}\.\d{4}$/)) {
    dateFrom = parseDate(dateFromStr)
  } else if (dateFromStr.match(/^\s*[IV]+\s*$/i)) {
    ;[dateFrom] = getQuarterStartEnd(dateFromStr.trim(), currentYear)
  }

  if (dateToStr.match(/^\d{2}\.\d{2}\.\d{4}$/)) {
    dateTo = parseDate(dateToStr)
  } else if (dateToStr.match(/^\s*[IV]+\s*$/i)) {
    ;[, dateTo] = getQuarterStartEnd(dateToStr.trim(), currentYear)
  }

  if (!dateFrom && dateFromStr !== "") return { inPeriod: false, status: "noData1" }
  if (!dateTo && dateToStr !== "") return { inPeriod: false, status: "noData1" }

  if ((!dateFrom || now >= dateFrom) && (!dateTo || now <= dateTo)) {
    return { inPeriod: true, status: "Started" }
  }

  if (dateTo && now > dateTo) {
    return { inPeriod: false, status: "Ended" }
  }

  if (dateFrom && now < dateFrom) {
    return { inPeriod: false, status: "Coming" }
  }

  return { inPeriod: false, status: "noData2" }
}

export function absoluteUrl(path: string) {
  return `${process.env.SITE_URL}${path}`
}

export function ogUrl(title: string) {
  // Get domain only without last slash
  const siteUrl = absoluteUrl("/")
    .replace(/(^\w+:|^)\/\//, "")
    .replace(/\/$/, "")
  return absoluteUrl(`/api/og?title=${title}&siteUrl=${siteUrl}`)
}
