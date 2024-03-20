
import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'pl'] as const;

export const pathnames = {
    '/': '/',
    '/blog': '/blog',
    '/blog/[articleSlug]-[articleId]': '/blog/[articleSlug]-[articleId]',
    '/contact': {
        en: '/contact',
        pl: '/kontakt'
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
