import { siteConfig } from "@/data/config/site"
import { Feed } from "feed"
import { OstDocument } from "outstatic"
import { getDocuments } from "outstatic/server"

const host = siteConfig.siteUrl

export const dynamic = "force-static"

export async function GET() {
  const feedOptions = {
    id: host,
    title: "Industry5 Blog Posts",
    favicon: `${host}/favicon.ico`,
    description: "Latest posts from Industry5 Blog.",
    link: host,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    generator: "Feed for Node.js",
    feedLinks: {
      json: `${host}posts.json`,
      atom: `${host}feed.xml`,
      rss2: `${host}rss.xml`,
    },
    author: {
      name: "Industry5 Administrator",
      email: "kontakt@industry5.pl",
      link: host,
    },
  }

  const feed = new Feed(feedOptions)
  const posts = getDocuments("posts", ["title", "slug", "lang", "description", "author", "tags"])

  posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map((item: OstDocument) => {
      feed.addItem({
        title: item.title,
        link: `${host}${item.lang}/blog/${item.slug}`,
        description: item.description,
        date: new Date(item.publishedAt),
        published: new Date(item.publishedAt),
        author: [item.author ?? {}],
      })
    })

  return new Response(feed.json1(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
}
