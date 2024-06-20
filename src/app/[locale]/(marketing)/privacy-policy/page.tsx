import { genPageMetadata } from '@/app/seo';
import { ContainerPage } from '@/components/layout/ContainerPage'
import { getLocalePrimaryDialects } from '@/lib/locales';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "PrivacyMeta" });
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

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  return (
    <ContainerPage>
          Polityka Prywatności
    </ContainerPage>
  )
}
