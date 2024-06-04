import { ContactForm } from "@/components/Form";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-wrap-reverse">
      <section className="mx-auto w-full max-w-[500px] py-10 md:px-0">
        <ContactForm />
      </section>
      <section className="mx-auto max-w-[500px] px-4 py-10 md:px-0">
        <h4></h4>
        <div className="text-center text-gray-500 dark:text-gray-400">
              <Image className="mx-auto mb-4 size-36 rounded-full" src="/images/ceo.jfif" alt="Helene Avatar" width={144} height={144} />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">dr inż. Grzegorz Góral</a>
              </h3>
              <p>ggoral@multiprojekt.pl</p>
          </div>
      </section>
    </main>
  );
}