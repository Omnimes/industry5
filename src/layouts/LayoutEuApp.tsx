'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image"
import { useTranslations } from 'next-intl';
import CustomLink from '@/components/mdx/custom-link';
import { Recruitment } from '@/components/ui/recruitment';
import { MyLink } from '@/components/ui/link';
import { ExtendedOstDocument } from '@/app/[locale]/(marketing)/eu-applications/page';

interface PaginationProps {
    totalPages: number
    currentPage: number
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
    const t = useTranslations('Pagination');
    const pathname = usePathname();
    const basePath = pathname?.split('/')[2];
    const prevPage = currentPage - 1 > 0;
    const nextPage = currentPage + 1 <= totalPages;

    return (
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
                        {t('prev')}
                    </button>
                )}
                {prevPage && (
                    <CustomLink
                        href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
                        rel="prev"
                    >
                        {t('prev')}
                    </CustomLink>
                )}
                <span>
                    {currentPage} {t('of')} {totalPages}
                </span>
                {!nextPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
                        {t('next')}
                    </button>
                )}
                {nextPage && (
                    <CustomLink href={`/${basePath}/page/${currentPage + 1}`} rel="next">
                        {t('next')}
                    </CustomLink>
                )}
            </nav>
        </div>
    )
}

export const LayoutEuApp = ({ posts, pagination }: { posts: ExtendedOstDocument[], pagination?: PaginationProps }) => {
    const pathname = usePathname();
    const basePath = pathname.split('/')[2];
    const t = useTranslations("EuApplicationsPage")

    return (
        <>
            {posts?.length ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => {
                  return (
                    <div
                      key={post.title}
                      className="group relative flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800"
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        {post.coverImage &&
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={1000}
                            height={667}
                            className="bg-muted w-full rounded-md border object-cover object-top transition duration-500 group-hover:scale-105"
                            priority={index <= 1}
                          />
                        }
                        <Recruitment dateFrom={post.dateFrom} dateTo={post.dateTo} />
                      </div>
                      <div className="relative mt-6">
                        <h3 className="text-2xl font-semibold text-gray-800 md:min-h-[64px] dark:text-white">
                          {post.title}
                        </h3>
                        <p className="mb-8 mt-6 line-clamp-3 text-gray-600 dark:text-gray-300">
                          {post.description}
                        </p>
                      </div>
                      <MyLink href={`/${basePath}/${post.slug}`} text={"Czytaj więcej"} className="mt-auto dark:text-gray-300 hover:dark:text-white" />
                    </div>
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