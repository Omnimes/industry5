import {
  Briefcase,
  Globe,
  Heart,
  MapPinCheckInside,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"

export function FeaturesStrategy() {
  const t = useTranslations("Strategy")
  const features = [
    {
      title: t("list1"),
      description: t("list1_desc"),
      icon: <Users />,
    },
    {
      title: t("list4"),
      description: t("list4_desc"),
      icon: <Heart />,
    },
    {
      title: t("list2"),
      description: t("list2_desc"),
      icon: <Target />,
    },
    {
      title: t("list3"),
      description: t("list3_desc"),
      icon: <MapPinCheckInside />,
    },
    {
      title: t("list5"),
      description: t("list5_desc"),
      icon: <Briefcase />,
    },
    {
      title: t("list6"),
      description: t("list6_desc"),
      icon: <ShieldCheck />,
    },
    {
      title: t("list7"),
      description: t("list7_desc"),
      icon: <Globe />,
    },
  ]
  return (
    <div className="relative z-10 mx-auto grid  max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

export function FeaturesIndustry() {
  const t = useTranslations("Industry")
  const features = [
    {
      title: t("strong5"),
      description: t("list5"),
      icon: <Users />,
    },
    {
      title: t("strong6"),
      description: t("list6"),
      icon: <Heart />,
    },
    {
      title: t("strong7"),
      description: t("list7"),
      icon: <Target />,
    },
    {
      title: t("strong8"),
      description: t("list8"),
      icon: <MapPinCheckInside />,
    },
    {
      title: t("strong9"),
      description: t("list9"),
      icon: <Briefcase />,
    },
    {
      title: t("strong10"),
      description: t("list10"),
      icon: <ShieldCheck />,
    },
    {
      title: t("strong11"),
      description: t("list11"),
      icon: <Globe />,
    },
    {
      title: t("strong12"),
      description: t("list12"),
      icon: <Globe />,
    },
    // {
    //   title: t("strong13"),
    //   description: t("list13"),
    //   icon: <Globe />,
    // },
  ]
  return (
    <div className="relative z-10 mx-auto grid  max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="text-muted-foreground relative z-10 mb-4 text-balance px-6 group-hover/feature:text-purple-500">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-6 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-purple-500 dark:bg-neutral-700" />
        <span className="inline-block text-black transition duration-200 group-hover/feature:translate-x-2 dark:text-white">
          {title}
        </span>
      </div>
      <p className="text-muted-foreground relative z-10 text-balance px-6 text-sm md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  )
}
