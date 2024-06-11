
import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'pl'] as const;

export const pathnames = {
  '/': '/',

  '/faq': '/faq',
  '/blog': '/blog',

  '/blog/[slug]': {
    en: '/blog/[slug]',
    pl: '/blog/[slug]'
  },
  '/contact': {
    en: '/contact',
    pl: '/kontakt'
  },
  '/privacy-policy': {
    en: '/privacy-policy',
    pl: '/polityka-prywatnosci'
  },
  '/terms': {
    en: '/terms',
    pl: '/regulamin',
  },
  '/european-union': {
    en: '/european-union',
    pl: "/unia-europejska"
  },
  '/eu-applications': {
    en: '/eu-applications',
    pl: '/wnioski-unijne'
  },
  '/eu-applications/[slug]': {
    en: '/eu-applications/[slug]',
    pl: '/wnioski-unijne/[slug]'
  },
  '/future': {
    en: '/future',
    pl: '/przyszlosc'
  },
  '/history': {
    en: '/history',
    pl: '/historia'
  },
  '/industry': {
    en: '/industry',
    pl: '/przemysl'
  },
  '/strategy': {
    en: '/strategy',
    pl: '/strategia'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = `always`;
export const localeDetection = true;

export type AppPathnames = keyof typeof pathnames;

