import { ContainerPage } from '@/components/layout/ContainerPage'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  return (
    <ContainerPage>
          Polityka Prywatności
    </ContainerPage>
  )
}
