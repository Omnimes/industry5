import { genPageMetadata } from "@/app/seo";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { LayoutPosts } from "@/layouts/LayoutPosts";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from "next-intl/server";
import { getDocuments, load } from 'outstatic/server';

export const revalidate = 3600;
const POSTS_PER_PAGE = 10;

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "Blog" });
  const title = t('blog_title');
  const description = t('blog_desc');
  const keywords = t('blog_keywords');
  const localeShort = getLocalePrimaryDialects(locale);
  const obj = {
    title,
    description,
    keywords,
    localeShort,
  }
  return genPageMetadata(obj)
}

async function getData(locale: string) {
  const db = await load();
  const allPosts = await db
    .find({ collection: 'posts', status: 'published', lang: locale }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'author'
    ])
    .sort({ publishedAt: -1 })
    .limit(POSTS_PER_PAGE)
    .toArray()

  const postsLength = getDocuments('posts').length

  return {
    allPosts,
    postsLength
  }
}

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('Blog');
  const { allPosts, postsLength } = await getData(locale);

  const pageNumber = 1
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(postsLength / POSTS_PER_PAGE),
  }

  return (
    <div className="container max-w-screen-lg px-4 py-6 lg:px-0 lg:py-10">
      <TextRevealCard
          text={"Blog"}
          desc={t('desc')}
        />
      <LayoutPosts posts={allPosts} pagination={pagination} />
    </div>
  );
}