import { Metadata } from 'next'
import { siteConfig } from '@/data/config/site'

interface PageSEOProps {
    title: string;
    description: string;
    keywords: string;
    localeShort: string;
    image?: string;
    [key: string]: any;
}

export function genPageMetadata({ title, description, keywords, image, localeShort, ...rest }: PageSEOProps): Metadata {
    return {
        title,
        description,
        keywords,
        openGraph: {
            title: `${title} | ${siteConfig.title}`,
            description: description || siteConfig.description,
            url: './',
            siteName: siteConfig.title,
            images: image ? [image] : [siteConfig.socialBanner],
            locale: localeShort,
            type: 'website',
        },
        twitter: {
            title: `${title} | ${siteConfig.title}`,
            card: 'summary_large_image',
            images: image ? [image] : [siteConfig.socialBanner],
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
        ...rest,
    }
}