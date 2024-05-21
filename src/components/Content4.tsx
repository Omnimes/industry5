import Image from "next/image"
import analyse from "../../public/images/features/1.png"
import plan from "../../public/images/features/2.png"
import wdrazanie from "../../public/images/features/3.png"
import integracja from "../../public/images/features/4.png"
import adaptacja from "../../public/images/features/5.png"
import monitoring from "../../public/images/features/6.png"
import { Callout } from "./ui/callout"

export const Content4 = () => {

  //uzupełnić alt zdjęć
  return (
    // py-24
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="mx-auto w-full text-left md:w-11/12 md:text-center xl:w-9/12">
        <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
          Transformacja&nbsp;
          <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">
            Przemysłu 5.0
          </span>
        </h2>
        <p className="text-muted-foreground mb-6 px-0 text-lg md:text-xl">
          To proces, w którym przedsiębiorstwa przystosowują się do zmian wynikających z wdrażania
          nowych technologii w przemyśle. Proces ten obejmuje cyfrową transformację przemysłu 5.0,
          wdrażanie nowych technologii oraz integrację człowieka z technologią.
        </p>
        <p className="mb-6 px-0">Cyfrowa transformacja przemysłowa to proces, który obejmuje kilka etapów:</p>
      </div>
      {/* py-16 lg:py-20 */}
      <div className="mx-auto px-4  sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 ">
        <div className="row-gap-8 sm:row-gap-0 grid sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-b p-8 sm:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={analyse.src} alt={""} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Analiza</h6>
              <p className="text-muted-foreground mb-3 text-sm">
                Ocena aktualnej sytuacji firmy i identyfikacja obszarów wymagających zmian.
              </p>
            </div>
          </div>
          <div className="border-b p-8 lg:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={plan.src} alt={""} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Planowanie</h6>
              <p className="text-muted-foreground mb-3 text-sm">
                Opracowanie planu działania, uwzględniającego cele biznesowe, technologiczne i
                społeczne.
              </p>
            </div>
          </div>
          <div className="border-b p-8 sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={wdrazanie.src} alt={""} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Wdrożenie</h6>
              <p className="text-muted-foreground mb-3 text-sm">
                Implementacja innowacyjnych rozwiązań, takich jak sztuczna inteligencja, systemy
                WMS, uczenie maszynowe, „koboty”, druk 3D oraz Internet Rzeczy (IoT).
              </p>
            </div>
          </div>
          <div className="border-b p-8 lg:border-b-0 lg:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={integracja.src} alt={""} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Integracja</h6>
              <p className="text-muted-foreground mb-3 text-sm">
                Połączenie nowych technologii z istniejącymi systemami i procesami produkcyjnymi.
              </p>
            </div>
          </div>
          <div className="border-b p-8 sm:border-b-0 sm:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={adaptacja.src} alt={""} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Adaptacja</h6>
              <p className="text-muted-foreground mb-3 text-sm">
                Przygotowanie kadry do zmian poprzez szkolenia, rozwój kompetencji i współpracę z
                nowymi technologiami.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex size-32 items-center justify-center rounded-full sm:size-32">
                <Image src={monitoring.src} alt={""} height={337} width={500} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Monitorowanie</h6>
              <p className="text-muted-foreground mb-3 text-sm">
                Ciągła kontrola i ocena efektów transformacji w celu dalszej optymalizacji procesów
                produkcyjnych.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
