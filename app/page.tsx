"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function HomePage() {
  const words = [
    {
      text: "Bienvenue",
    },
    {
      text: "sur",
    },
    {
      text: "mon",
    },
    {
      text: "Portfolio !",
      className: "text-lightRed dark:text-lightRed",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)] px-4 py-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">
          <TypewriterEffectSmooth cursorClassName="bg-lightRed" words={words} />
        </h1>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg mb-8 text-muted-foreground "
        >
          Je suis ravi de vous accueillir ! Explorez mes projets, découvrez mon
          parcours et surtout n&apos;hésitez pas à me contacter.
        </motion.p>
      </div>
    </div>
  );
}
