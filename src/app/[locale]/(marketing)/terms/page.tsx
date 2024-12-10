import { genPageMetadata } from '@/app/seo';
import { ContainerPage } from '@/components/layout/ContainerPage'
import { getLocalePrimaryDialects } from '@/lib/locales';
import { getTranslations, setRequestLocale } from 'next-intl/server'
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "TermsMeta" });
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
  return genPageMetadata(obj)
}
export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return (
    <ContainerPage>
          Regulamin
    </ContainerPage>
  )
}
