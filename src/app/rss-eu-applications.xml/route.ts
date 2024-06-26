import { getDocuments } from 'outstatic/server';
import { siteConfig } from '@/data/config/site';
import RSS from "rss";
const host = siteConfig.siteUrl;

export async function GET() {
  const feedOptions = {
    id: host,
    title: "Industry5 - Eu-Applications",
    favicon: `${host}/favicon.ico`,
    description: "Latest updates and news from Eu Applications - Industry5.",
    site_url: host,
    feed_url: `${host}/rss-eu-applications.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    generator: 'Feed for Node.js',
  };

  const feed = new RSS(feedOptions);
  const euapplications = getDocuments('euapplications', ['title', 'slug', 'lang', 'description', 'author'])

  const pathMappingNews: { [key: string]: string } = {
    en: 'eu-applications',
    pl: 'wnioski-unijne',
  };

  euapplications.map((post) => {
    const lang = (post.lang ?? 'pl') as 'en' | 'pl'; 

    feed.item({
      title: post.title,
      guid: `${host}${post.lang}/${pathMappingNews[lang]}/${post.slug}`,
      url: `${host}${post.lang}/${pathMappingNews[lang]}/${post.slug}`,
      date: new Date(post.publishedAt),
      description: post.description ?? "",
      author: post.author?.name,
      });
  });
   
   return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}