import { genPageMetadata } from "@/app/seo";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { load } from "outstatic/server";
import { OstDocument } from "outstatic";
import { LayoutEuApp } from "@/layouts/LayoutEuApp";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export const revalidate = 3600;
const POSTS_PER_PAGE = 20;
export type ExtendedOstDocument = OstDocument & { dateFrom: string, dateTo: string };

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "EuApplicationsPage" });
  const title = t('title');
  const description = t('desc');
  const keywords = t('keywords');
  const localeShort = getLocalePrimaryDialects(locale);
  const obj = {
    title,
    description,
    keywords,
    localeShort,
  }
  const meta = genPageMetadata(obj)
  return meta
}

async function getData(locale: string) {
  const db = await load();
  const allPosts = await db
    .find<ExtendedOstDocument>({ collection: 'euapplications', status: 'published', lang: locale }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'dateFrom',
      'dateTo'
    ])
    .sort({ publishedAt: -1 })
    .limit(POSTS_PER_PAGE)
    .toArray()

    const allPostsLength = await db
    .find<ExtendedOstDocument>({ collection: 'euapplications', status: 'published', lang: locale })
    .toArray()
    
    const length = allPostsLength.length

  return {
    allPosts,
    length
  }
}

export default async function EuApplicationsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('EuApplicationsPage');
  const { allPosts, length } = await getData(locale);

  const pageNumber = 1
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(length / POSTS_PER_PAGE),
  }

  return (
      <div className="m-auto px-4 py-6 text-gray-600 xl:container md:px-12 lg:px-0 lg:py-10 xl:px-6">
        <TextRevealCard
          text={t('title')}
          desc={t('desc')}
        />
        <LayoutEuApp posts={allPosts} pagination={pagination} />
      </div>
  );
}