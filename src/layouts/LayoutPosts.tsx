'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import { formatDate, getFormattedDate } from "@/lib/utils";
import { useLocale, useTranslations } from 'next-intl';
import { Meta } from '../../types';

type Props = {
    posts: Meta[]
}
export const LayoutPosts = ({ posts }: Props) => {

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
                            key={post.id}
                            className="group relative flex flex-col space-y-2"
                        >
                            {post.image && (
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={804}
                                    height={452}
                                    className="bg-muted rounded-md border transition-colors"
                                    priority={index <= 1}
                                />
                            )}
                            <h2 className="text-2xl font-extrabold">{post.title}</h2>
                            {post.description && (
                                <p className="text-muted-foreground">{post.description}</p>
                            )}
                            {post.date && (
                                <p className="text-muted-foreground text-sm">
                                    {getFormattedDate(post.date, lang)}
                                </p>
                            )}
                            <Link
                                href={`/${basePath}/${post.id}`}
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