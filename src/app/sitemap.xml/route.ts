import { pathnames } from "@/config"
import { siteConfig } from "@/data/config/site"
import { defaultLocale, excludePaths } from "@/middleware"
import { getCollections, getDocuments } from "outstatic/server"

import {
  generateURLObjects,
  generateURLObjectsBlog,
  generateURLObjectsWnioski,
  generateXML,
  transformPaths,
  URLObject,
} from "@/lib/generateSitemapXML"

const host = siteConfig.siteUrl

export async function GET() {
  const collections = getCollections()
  const prepareUrls: URLObject[] = []
  collections.forEach((collection) => {
    const date = getDocuments(collection, ["slug", "lang", "tags"]).filter(
      (entry) => entry.status == "published"
    )
    if (collection == "posts") {
      const results = generateURLObjectsBlog(date, host)
      prepareUrls.push(...results)
    } else if (collection == "euapplications") {
      const results = generateURLObjectsWnioski(date, host)
      prepareUrls.push(...results)
    }
  })
  const xmlFiles = [
    "feed-eu-applications.xml",
    "feed.xml",
    "eu-applications.json",
    "posts.json",
    "rss-eu-applications.xml",
    "rss.xml",
  ]
  const xmlFilesUrls: URLObject[] = []
  xmlFiles.forEach((item) => {
    xmlFilesUrls.push({
      url: `${host}${item}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    } as URLObject)
  })

  const paths = transformPaths(pathnames, excludePaths)
  const urlObjects = generateURLObjects(paths, defaultLocale, host)
  const arrUrlObjects = [...urlObjects, ...prepareUrls, ...xmlFilesUrls]
  const xml = generateXML(arrUrlObjects)
  return new Response(xml)
}
