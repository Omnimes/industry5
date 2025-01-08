import { siteConfig } from "@/data/config/site"
import { Feed } from "feed"
import { getDocuments } from "outstatic/server"

const host = siteConfig.siteUrl

export const dynamic = "force-static"

export async function GET() {
  const feedOptions = {
    id: host,
    title: "Industry5 - Eu-Application",
    favicon: `${host}/favicon.ico`,
    description: "Latest updates and news from Eu Applications - Industry5.",
    link: host,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    generator: "Feed for Node.js",
    feedLinks: {
      json: `${host}eu-applications.json`,
      atom: `${host}feed-eu-applications.xml`,
      rss2: `${host}rss-eu-applications.xml`,
    },
    author: {
      name: "Industry5 Administrator",
      email: "kontakt@industry5.pl",
      link: host,
    },
  }

  const feed = new Feed(feedOptions)
  const euapplications = getDocuments("euapplications", [
    "title",
    "slug",
    "lang",
    "description",
    "author",
  ])

  const pathMappingNews: { [key: string]: string } = {
    en: "eu-applications",
    pl: "wnioski-unijne",
  }

  euapplications.forEach((item) => {
    const lang = (item.lang ?? "pl") as "en" | "pl"

    feed.addItem({
      title: item.title,
      guid: `${host}${item.lang}/${pathMappingNews[lang]}/${item.slug}`,
      link: `${host}${item.lang}/${pathMappingNews[lang]}/${item.slug}`,
      description: item.description,
      date: new Date(item.publishedAt),
      published: new Date(item.publishedAt),
      author: [item.author ?? {}],
    })
  })

  return new Response(feed.atom1(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  })
}
