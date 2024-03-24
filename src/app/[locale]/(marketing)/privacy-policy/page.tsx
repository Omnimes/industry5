import { unstable_setRequestLocale } from 'next-intl/server'

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  return (
      <main>
          Polityka Prywatności
    </main>
  )
}
