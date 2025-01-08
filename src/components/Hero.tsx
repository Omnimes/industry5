import { HeroHighlightDemo } from "./HeroHighlight"

export const Hero = () => {
  return (
    <section className="relative mt-[-65px] flex h-screen flex-col items-center justify-center px-3 py-0 text-center text-white">
      <div className="absolute left-0 top-0 size-full overflow-hidden">
        <video
          className="absolute min-h-full min-w-full object-cover"
          src="/video/hero.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute z-[1] size-full bg-black/65" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-60 w-full bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>
      <div className="z-[2] space-y-2">
        <div className="mx-auto max-w-screen-xl text-center">
          <HeroHighlightDemo />
        </div>
      </div>
    </section>
  )
}
