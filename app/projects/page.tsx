"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackHomeButton from "@/components/ui/BackHomeButton";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

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

        <BackHomeButton />
      </motion.div>
    </div>
  );
}
