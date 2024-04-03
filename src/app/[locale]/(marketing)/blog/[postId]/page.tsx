import { notFound } from "next/navigation"
import "@/styles/mdx.css"
import Image from "next/image"
import Link from "next/link"
import { cn, getFormattedDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { getPostByName, getPosts } from "@/lib/posts"
import { getLocalePrimaryDialects } from "@/lib/locales"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { siteConfig } from "@/data/config/site"
import { LucideChevronLeft } from "lucide-react"

export const revalidate = 900;
type Props = {
    params: {
        postId: string;
        locale: string;
    };
};

export async function generateStaticParams({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const posts = await getPosts(locale);

    if (!posts) return [];

    return posts.map((post) => ({
        postId: post.id,
        locale: locale,
    }));
}

export async function generateMetadata({ params: { postId, locale } }: Props) {
    const t = await getTranslations({ locale, namespace: "Metadata" });
    const post = await getPostByName(`${postId}.mdx`, locale);
    if (!post) {
        return {
            title: t("postNotFound"),
        };
    }

    let imageList = [siteConfig.socialBanner];

    const ogImages = imageList.map((img) => {
        return {
            url: img.includes("http") ? img : siteConfig.siteUrl + img,
        };
    });

    const { title, description, date, authors } = post.meta;

    const stringAuthor = authors.map(item => {
        return item
    })

    return {
        title,
        description: description,
        openGraph: {
            title,
            description: description,
            siteName: siteConfig.title,
            locale: getLocalePrimaryDialects(locale),
            type: "article",
            publishedTime: new Date(date).toISOString(),
            url: siteConfig.siteUrl + "/" + locale + "/blog/" + postId,
            images: ogImages,
            authors: stringAuthor.join(', ')
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: imageList,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export default async function PostPage({ params: { postId, locale } }: Props) {
    const post = await getPostByName(`${postId}.mdx`, locale);
    if (!post) notFound();
    const { meta, content } = post;
    unstable_setRequestLocale(locale);
    const t = await getTranslations('PostLayout');

    return (
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <Link
                href="/blog"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-[-200px] top-14 hidden xl:inline-flex"
                )}
            >
                <LucideChevronLeft className="mr-2 size-4" />
                {t("allPost")}
            </Link>
            <div>
                {meta.date && (
                    <time
                        dateTime={meta.date}
                        className="text-muted-foreground block text-sm"
                    >
                        {t("publish")} {getFormattedDate(meta.date, locale)}
                    </time>
                )}
                <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
                    {meta.title}
                </h1>
                {meta.authors?.length ? (
                    <div className="mt-4 flex space-x-4">
                        {meta.authors.map((author) =>
                            author ? (
                                <Link
                                    key={author.meta.name}
                                    href={`${author.meta.linkedin}`}
                                    className="flex items-center space-x-2 text-sm"
                                >
                                    <Image
                                        src={author.meta.avatar}
                                        alt={author.meta.name}
                                        width={42}
                                        height={42}
                                        className="rounded-full bg-white"
                                    />
                                    <div className="flex-1 text-left leading-tight">
                                        <p className="font-medium">{author.meta.name}</p>
                                        <p className="text-muted-foreground text-[12px]">
                                            <strong>
                                                <small>
                                                    {author.meta.occupation}
                                                </small>
                                            </strong>
                                        </p>
                                    </div>
                                </Link>
                            ) : null
                        )}
                    </div>
                ) : null}
            </div>
            {meta.image && (
                <Image
                    src={meta.image}
                    alt={meta.title}
                    width={720}
                    height={405}
                    className="bg-muted my-8 rounded-md border transition-colors"
                    priority
                />
            )}
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
                <div className="prose dark:prose-invert max-w-none pb-8 pt-10">{content}</div>
            </div>
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
                    <LucideChevronLeft className="mr-2 size-4" />
                    {t("allPost")}
                </Link>
            </div>
        </article>
    )
}