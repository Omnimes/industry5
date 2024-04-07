'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import { getFormattedDate } from "@/lib/utils";
import { useLocale, useTranslations } from 'next-intl';
import { OstDocument } from "outstatic";

export const LayoutPosts = ({ posts }: { posts: OstDocument[] }) => {
    const pathname = usePathname();
    const basePath = pathname.split('/')[2];
    const lang = useLocale();
    const t = useTranslations("Blog")

    return (
        <>
            {posts?.length ? (
                <div className="grid gap-10 sm:grid-cols-2">
                    {posts.map((post, index) => (
                        <article
                            key={post.title}
                            className="group relative flex flex-col space-y-2"
                        >
                            {post.coverImage &&
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    width={804}
                                    height={452}
                                    className="bg-muted rounded-md border transition-colors"
                                    priority={index <= 1}
                                />
                            }
                            <h2 className="text-2xl font-extrabold">{post.title}</h2>
                            {post.description && (
                                <p className="text-muted-foreground">{post.description}</p>
                            )}
                            {post.publishedAt && (
                                <p className="text-muted-foreground text-sm">
                                    {getFormattedDate(post.publishedAt, lang)}
                                </p>
                            )}
                            <Link
                                href={`/${basePath}/${post.slug}`}
                                className="absolute inset-0">
                                <span className="sr-only">{t("ReadMore")}</span>
                            </Link>
                        </article>
                    ))}
                </div>
            ) : (
                <p>{t("NotFound")}</p>
            )}
        </>
    )
}