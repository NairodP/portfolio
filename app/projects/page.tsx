"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackHomeButton from "@/components/BackHomeButton";
import ProjectCard from "@/components/ProjectCard";
import ContactMeButton from "@/components/ContactMeButton";
import { projects } from "@/data/projects";
import { MessageCircle } from "lucide-react";

export default function Projects() {
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [scrollLocked]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-10 text-center">Mes Projets</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Voici une sélection de projets simples que j&apos;ai réalisés. Chacun
          d&apos;eux représente une opportunité d&apos;apprentissage.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xlMinus:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              setScrollLocked={setScrollLocked}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <ContactMeButton 
            variant="outline"
            size="default"
            className="flex items-center space-x-2"
            icon={<MessageCircle className="h-4 w-4" />}
            showMotionDiv={true}
            containerClassName="mt-6"
            animationProps={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.5, delay: 0.5 }
            }}
          />
          <BackHomeButton />
        </div>
      </motion.div>
    </div>
  );
}