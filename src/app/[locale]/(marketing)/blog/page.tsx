import { genPageMetadata } from "@/app/seo";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { LayoutPosts } from "@/layouts/LayoutPosts";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from "next-intl/server";
import { getDocuments, load } from 'outstatic/server';

export const revalidate = 3600;
const POSTS_PER_PAGE = 10;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
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
export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);
  const t = await getTranslations('Blog');
  const { allPosts, postsLength } = await getData(resolvedParams.locale);

  const pageNumber = 1
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(postsLength / POSTS_PER_PAGE),
  }

  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-12 md:py-24">
      <TextRevealCard
        text={"Blog"}
        desc={t('desc')}
      />
      <LayoutPosts posts={allPosts} pagination={pagination} />
    </main>
  );
}