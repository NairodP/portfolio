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

  const techWords = [
    { text: "Next.js" },
    { text: "Tailwind CSS" },
    { text: "TypeScript" },
    { text: "Shadcn UI" },
    { text: "Aceternity UI" },
    { text: "Framer Motion" },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)] px-4 py-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4 w-full">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xs sm:text-sm text-muted-foreground mt-8"
        >
          <p className="mb-2 text-center">Créé avec les technologies suivantes :</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {techWords.map((tech, index) => (
              <motion.span
                key={tech.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="px-2 py-1 sm:px-3 sm:py-1 bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {tech.text}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
