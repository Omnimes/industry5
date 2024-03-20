'use client';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { locales } from '@/config';
import { useTranslations, useLocale } from 'next-intl';
import ReactCountryFlag from "react-country-flag"

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(value: string) {
    const nextLocale = value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }
  return (
    <Select onValueChange={onSelectChange} defaultValue={locale}>
      <SelectTrigger className={clsx(
        'w-[60px] inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border-0 px-3 focus:border-0 focus:outline-none focus:ring-0 hover:bg-accent hover:text-accent-foreground shadow-none',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )} >
        <SelectValue placeholder={t("label")} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((cur) => <SelectItem key={cur} value={cur}>
          <ReactCountryFlag countryCode={cur == "en" ? "gb" : cur} svg className="flag" />
        </SelectItem>)}
      </SelectContent>
    </Select>
  );
}