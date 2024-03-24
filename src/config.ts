
import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'pl'] as const;

export const pathnames = {
  '/': '/',

  '/faq': '/faq',
  '/blog': '/blog',

  '/blog/[articleSlug]-[articleId]': {
    en: '/blog/[articleSlug]-[articleId]',
    pl: '/blog/[articleSlug]-[articleId]',
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
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = `always`;
export const localeDetection = true;

export type AppPathnames = keyof typeof pathnames;

