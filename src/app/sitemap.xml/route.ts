import { pathnames } from '@/config';
import { getDocuments, getCollections } from 'outstatic/server';
import { siteConfig } from '@/data/config/site';
import { defaultLocale, excludePaths } from '@/middleware';
import { URLObject, transformPaths, generateURLObjects, generateXML, generateURLObjectsBlog, generateURLObjectsWnioski } from '@/lib/generateSitemapXML';

const host = siteConfig.siteUrl;

export async function GET() {
  const collections = getCollections();
  const prepareUrls: URLObject[] = [];
  collections.forEach(collection => {
      const date = getDocuments(collection, ['slug', 'lang', 'tags']).filter(entry => entry.status == 'published');
      if(collection == 'posts') {
        const results = generateURLObjectsBlog(date, host);
        prepareUrls.push(...results);
      } else if (collection == 'euapplications') {
        const results = generateURLObjectsWnioski(date, host);
        prepareUrls.push(...results);
      } 
  });


  const paths = transformPaths(pathnames, excludePaths);
  const urlObjects = generateURLObjects(paths, defaultLocale, host);
  const arrUrlObjects = [...urlObjects, ...prepareUrls];
  const xml = generateXML(arrUrlObjects);

  return new Response(xml, {
    headers: {
      "content-type": "application/xml;charset=UTF-8",
    },
  });
}