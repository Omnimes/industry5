import { genPageMetadata } from "@/app/seo";
import { LayoutPosts } from "@/layouts/LayoutPosts";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { getPosts } from "@/lib/posts";
import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from "next-intl/server";

export const revalidate = 900;
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
  const meta = genPageMetadata(obj)

  return meta
}

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Blog');
  const posts = await getPosts(locale);

  return (
    <div className="container max-w-screen-lg px-4 py-6 lg:px-0 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="font-heading inline-block text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-muted-foreground text-xl">
            {t("desc")}
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <LayoutPosts posts={posts} />
    </div>
  );
}