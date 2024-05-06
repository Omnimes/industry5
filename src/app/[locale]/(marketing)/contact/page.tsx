import { ContactForm } from "@/components/Form";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main>
      <section className="mx-auto max-w-[500px] px-3 py-10 md:px-0">
        <ContactForm />
      </section>
    </main>
  );
}