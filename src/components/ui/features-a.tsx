import { cn } from "@/lib/utils";
import {
   Users, Target, Heart, Briefcase, ShieldCheck, Globe, MapPinCheckInside
} from "lucide-react";

export function FeaturesStrategy() {
  const features = [
    {
      title: "Wykorzystanie różnic indywidualnych jako siły organizacyjnej.",
      description:
        "Docenianie indywidualnych różnic pracowników i wykorzystywanie ich talentów oraz unikalnych perspektyw jako fundamentu dla innowacyjności i rozwoju organizacji.",
      icon: <Users />,
    },
    {
        title: "Uwzględnienie w priorytetach biznesowych zapewnienia zdrowia, bezpieczeństwa i dobrego samopoczucia pracowników.",
        description: "Priorytetowe traktowanie zdrowia fizycznego i psychicznego pracowników, co przekłada się na ich satysfakcję oraz efektywność pracy.",
        icon: <Heart />,
      },
    {
      title: "Zapewnienie użyteczności i dostępności strategicznych celów biznesowych.",
      description:
        "Formułowanie celów biznesowych w sposób zrozumiały i dostępny dla wszystkich, co umożliwia ich skuteczną realizację i zaangażowanie całego zespołu.",
      icon: <Target />,
    },
    {
      title: "Przyjęcie podejścia systemowego.",
      description:
        "Uwzględnianie powiązań między różnymi elementami organizacji, aby osiągnąć spójność działań i efektywnie reagować na zmieniające się warunki.",
      icon: <MapPinCheckInside />,
    },
    {
      title: "Docenianie pracowników i tworzenie sensownego środowiska pracy.",
      description: "Budowanie środowiska, w którym pracownicy czują się doceniani, a ich praca ma dla nich osobiste znaczenie, co zwiększa motywację i zaangażowanie.",
      icon: <Briefcase />,
    },
    {
      title: "Wprowadzenie zasady bycia otwartym i godnym zaufania.",
      description:
        "Promowanie transparentności w działaniu organizacji, co buduje zaufanie wśród pracowników i interesariuszy oraz sprzyja współpracy.",
      icon: <ShieldCheck />,
    },
    {
      title: "Działanie w sposób społecznie odpowiedzialny.",
      description:
        "Realizowanie działań zgodnych z zasadami etyki i odpowiedzialności wobec społeczeństwa, środowiska oraz przyszłych pokoleń.",
      icon: <Globe />,
    },
  ];
  return (
    <div className="relative z-10 mx-auto grid  max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
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
  );
};
