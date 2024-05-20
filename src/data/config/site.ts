export type SiteConfig = typeof siteConfig

export const siteConfig = {
  author: "Piotr Sierant",
  authorUrl: "https://github.com/PiotrSierant",
  name: "Industry5",
  title: "title",
  description: 'description',
  keywords: 'keywords',
  theme: "dark",
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  socialBanner: '/images/twitter-card.png',
  mainNav: [
    {
      title: "home",
      href: "/",
    },
    {
      title: "blog",
      href: "/blog",
    },
    {
      title: "contact",
      href: "/contact",
    },
    {
      title: "europe",
      href: "/european-union",
    },
    {
      title: "europe-app",
      href: "/eu-applications",
    },
  ],

  subNav: [
    {
      title: "title3",
      href: "/industry",
      desc: "desc3"
    },
    {
      title: "title2",
      href: "/history",
      desc: "desc2"
    },
    {
      title: "title4",
      href: "/future",
      desc: "desc4"
    }
  ]
}