import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getLocalePrimaryDialects } from "./locales";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedDate(dateString: string, locale: string): string {
    const lang = getLocalePrimaryDialects(locale);
    return new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(new Date(dateString))
}