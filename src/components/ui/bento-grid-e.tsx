"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Leaf, Lightbulb, Recycle } from 'lucide-react';

const lineWidth = 80;
const lineHeight = 2;

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center min-h-52">
      <div className="relative flex items-center">
        <div className="border dark:border-white/30 border-black/30 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <Recycle size={24} />
        </div>
        <div className="relative bg-black dark:bg-white" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-white dark:via-black to-transparent opacity-75"
            initial={{ x: '-40px' }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative border-2 dark:border-white/70 border-black/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <Leaf size={24} />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-black dark:via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-black dark:bg-white" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-white dark:via-black to-transparent opacity-75"
            initial={{ x: '40px' }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="border dark:border-white/30 border-black/30 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <Lightbulb size={24} />
        </div>
      </div>
    </div>
  );
};

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative from-muted/20 to-muted bg-gradient-to-b flex-1 rounded-xl border border-purple-500 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: 'transform' }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: '#5D2CA8',
            filter: 'blur(100px)',
            transform: 'translate(-0%, -0%)',
            zIndex: 10,
            willChange: 'transform, top, left',
          }}
        />
      )}
      {children}
    </div>
  );
};

export const BentoBox1 = () => {
  const t = useTranslations('EuropeanUnion');
  return (
    <div className="flex justify-center items-center rounded-lg mt-16">
      <div className="flex flex-col md:flex-row gap-4 w-full min-h-[800px] md:min-h-[800px] md:h-[800px]">
        <CardWithEffect>
          <div className="flex flex-col justify-between h-full p-2">
            <div className="mb-4 h-full">
              <Image
                alt=""
                loading="eager"
                priority={true}
                className="rounded w-full h-full"
                height={450}
                width={450}
                src={"/images/eu/personalisation.webp"}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="text-left pt-6 mt-4">
              <h3 className="text-2xl font-bold mb-2 dark:text-white text-black">{t("l1strong")}</h3>
              <p className="text-muted-foreground text-balance">{t("l1")}</p>
            </div>
          </div>
        </CardWithEffect>
        <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-[800px]">
          <CardWithEffect>
            <div className="flex flex-col justify-center h-full p-2">
              <div className="flex items-center justify-center min-h-52 overflow-hidden">
                <video className="object-cover" src="/images/eu/video-ai.mp4" autoPlay muted loop />
              </div>
              <div className="text-left pt-6">
                <h3 className="text-2xl font-bold mb-2 dark:text-white text-black">{t("l2strong")}</h3>
                <p className="text-muted-foreground text-balance">{t("l2")}</p>
              </div>
            </div>
          </CardWithEffect>
          <CardWithEffect>
            <div className="flex flex-col justify-center h-full p-2">
              <LogoBeam />
              <div className="text-left pt-6">
                <h3 className="text-2xl font-bold mb-2 dark:text-white text-black">{t("l3strong")}</h3>
                <p className="text-muted-foreground text-balance">{t("l3")}</p>
              </div>
            </div>
          </CardWithEffect>
        </div>
      </div>
    </div>
  );
};