import { DotPattern } from "./dot-pattern"

export function DynamicSquareBackground({
  title,
  description,
}: Readonly<{
  title: string
  description: string
}>) {
  return (
    <>
      <style>
        {`
        @keyframes tiles {
          0%, 40%, 80% {
            opacity: 0;
          }
          20%, 60% {
            opacity: 1;
          }
        }
      `}
      </style>
      <div className="relative flex w-full flex-col gap-8 overflow-hidden rounded-xl border border-neutral-400/20 px-8 py-4 shadow-sm dark:shadow-black">
        <DotPattern />
        <div className="z-20">
          <div className="">
            <h3 className="text-balck inline text-xl font-semibold dark:text-white">{title}</h3>
          </div>
          <p className="mt-1 text-base text-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  )
}

// const DecorativeTilesBackground = () => {
//   const rows = 40
//   const columns = 40
//   const animationDuration = 14 // seconds

//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 z-10 flex select-none flex-wrap"
//     >
//       {Array.from({ length: rows }).map((_, rowIndex) => {
//         return (
//           <div
//             className="flex h-[16px] w-full border-b border-dashed border-neutral-500/20"
//             // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//             key={`line-${rowIndex}`}
//           >
//             {Array.from({ length: columns }).map((_, colIndex) => {
//               const delay = Math.random() * animationDuration

//               return (
//                 <div
//                   className="relative h-[16px] w-[15px] border-r border-dashed border-neutral-500/20"
//                   // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//                   key={`tile-${colIndex}`}
//                 >
//                   <div
//                     className=" inset-0 h-[16px] w-[15px] bg-fuchsia-600/10 dark:bg-fuchsia-400/15"
//                     style={{
//                       opacity: 0, // Start with opacity 0
//                       animationName: "tiles",
//                       animationIterationCount: "infinite",
//                       animationTimingFunction: "ease",
//                       animationDelay: `${delay}s`,
//                       animationDuration: `${animationDuration}s`,
//                     }}
//                   />
//                 </div>
//               )
//             })}
//           </div>
//         )
//       })}
//     </div>
//   )
// }
