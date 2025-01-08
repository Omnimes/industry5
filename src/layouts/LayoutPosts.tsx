"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { OstDocument } from "outstatic"

import { getFormattedDate } from "@/lib/utils"
import CustomLink from "@/components/mdx/custom-link"

interface PaginationProps {
  totalPages: number
  currentPage: number
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const t = useTranslations("Pagination")
  const pathname = usePathname()
  const basePath = pathname?.split("/")[2]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            {t("prev")}
          </button>
        )}
        {prevPage && (
          <CustomLink
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            {t("prev")}
          </CustomLink>
        )}
        <span>
          {currentPage} {t("of")} {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            {t("next")}
          </button>
        )}
        {nextPage && (
          <CustomLink href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            {t("next")}
          </CustomLink>
        )}
      </nav>
    </div>
  )
}

export const LayoutPosts = ({
  posts,
  pagination,
}: {
  posts: OstDocument[]
  pagination?: PaginationProps
}) => {
  const pathname = usePathname()
  const basePath = pathname.split("/")[2]
  const lang = useLocale()
  const t = useTranslations("Blog")
  const taria = useTranslations("AriaLabel")
  return (
    <>
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.title} className="group relative flex flex-col space-y-2">
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="mb-4 rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="line-clamp-3 text-balance text-muted-foreground">
                  {post.description}
                </p>
              )}
              {post.publishedAt && (
                <p className="text-sm text-muted-foreground">
                  {getFormattedDate(post.publishedAt, lang)}
                </p>
              )}
              <Link
                aria-label={taria("readMoreAria")}
                rel="noreferrer noopener"
                href={`/${basePath}/${post.slug}`}
                className="absolute inset-0"
              >
                <span className="sr-only">{t("ReadMore")}</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>{t("NotFound")}</p>
      )}

      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
