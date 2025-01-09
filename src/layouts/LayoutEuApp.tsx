"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

import { cn, isInPeriod } from "@/lib/utils"
import { MyLinkChildren } from "@/components/ui/link"
import { Recruitment } from "@/components/ui/recruitment"
import CustomLink from "@/components/mdx/custom-link"
import { ExtendedOstDocument } from "@/app/[locale]/(marketing)/eu-applications/page"

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
    <div className="space-y-2 pb-8 pt-10 md:space-y-5">
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

export const LayoutEuApp = ({
  posts,
  pagination,
}: {
  posts: ExtendedOstDocument[]
  pagination?: PaginationProps
}) => {
  const pathname = usePathname()
  const basePath = pathname.split("/")[2]
  const t = useTranslations("EuApplicationsPage")
  const taria = useTranslations("AriaLabel")
  const sortedPosts = posts.sort(
    (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
  )
  return (
    <>
      {posts?.length ? (
        <div className="flex w-full flex-col gap-8 pt-2 sm:grid md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post, index) => {
            const borderColor = isInPeriod(post.dateFrom, post.dateTo)

            return (
              <MyLinkChildren
                href={`/${basePath}/${post.slug}`}
                aria-label={taria("readMoreAria")}
                text={t("ReadMore")}
                key={post.title}
                className={cn(
                  "ring-opacity/40 flex w-full flex-col overflow-hidden rounded-lg shadow-lg ring-4 md:max-w-sm",
                  borderColor.status == "noData1" && "ring-gray-600",
                  borderColor.status == "noData2" && "ring-gray-600",
                  borderColor.status == "Started" && "ring-green-500",
                  borderColor.status == "Ended" && "ring-red-500",
                  borderColor.status == "Coming" && "ring-yellow-500"
                )}
              >
                <div className="relative">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={1000}
                      height={667}
                      className="bg-muted w-full rounded-md border object-cover object-top transition duration-500 group-hover:scale-105"
                      priority={index <= 1}
                    />
                  )}
                  <Recruitment dateFrom={post.dateFrom} dateTo={post.dateTo} />
                </div>
                <div className="relative mt-6 p-4">
                  <h3 className="mb-2 text-lg font-bold text-gray-800 md:min-h-[64px] md:text-xl dark:text-white">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-gray-600 md:text-base dark:text-gray-300">
                    {post.description}
                  </p>
                </div>
                <span className="mt-auto w-full px-4 pb-4 dark:text-gray-300 hover:dark:text-white">
                  {t("ReadMore")} &rarr;
                </span>
              </MyLinkChildren>
            )
          })}
        </div>
      ) : (
        <article className="mx-auto max-w-screen-lg px-4 text-center md:px-0">
          <p>{t("info")}</p>
        </article>
      )}
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
