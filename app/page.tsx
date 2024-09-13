"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

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
    <motion.div className="flex flex-col justify-center items-center min-h-[calc(100vh-250px)] py-8 pt-0 pb-4">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <motion.div className="flex flex-col items-center justify-center w-full max-w-3xl gap-3">
        <motion.h1 initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 w-full text-center">
          <TypewriterEffectSmooth cursorClassName="bg-lightRed" words={words} />
        </motion.h1>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg mb-8 text-muted-foreground text-center px-4"
        >
          Je suis ravi de vous accueillir ! Explorez mes projets, découvrez mon
          parcours et surtout n&apos;hésitez pas à me contacter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8 flex items-center justify-center"
        >
          <Link href="/about">
            <motion.button
              initial={{ "--x": "100%", scale: 1 } as any}
              animate={{ "--x": "-100%" } as any}
              whileTap={{ scale: 0.97 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1,
                },
              }}
              className="px-6 py-2 rounded-md relative radial-gradient"
            >
              <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                En savoir plus sur moi
              </span>
              <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xs sm:text-sm text-muted-foreground"
        >
          <p className="mb-2 text-center">
            Créé avec les technologies suivantes :
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
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
      </motion.div>
    </motion.div>
  );
}
