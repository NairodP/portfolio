import React, { ForwardRefRenderFunction } from "react";
import { motion } from "framer-motion";

type SkillsSectionProps = {
  isLargeScreen: boolean;
  tabAndBehindScreen?: boolean;
};

const SkillsSection: ForwardRefRenderFunction<HTMLDivElement, SkillsSectionProps> = (
  { isLargeScreen, tabAndBehindScreen },
  ref
) => {
  const softSkills = ["Travail d'équipe", "Adaptabilité", "Créativité"];
  const competences = ["Intelligence Artificielle", "Git", "Méthode Agile"];

  const titleClasses = isLargeScreen ? "text-xl" : "text-lg";
  const gridSkills = tabAndBehindScreen ? "grid-cols-2" : "grid-cols-1";

  return (
    <motion.div
      ref={ref}
      className="mt-12 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className={`grid grid-cols-1 gap-x-2 gap-y-8 , ${gridSkills}`}>
        <div>
          <h3 className={`font-semibold mb-3 text-muted-foreground flex justify-center ${titleClasses}`}>
            Compétences Techniques
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {competences.map((competence, index) => (
              <motion.span
                key={competence}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="px-2 py-1 bg-secondary/30 text-secondary-foreground rounded-md cursor-default
                           transition-colors duration-200 ease-in-out
                           hover:bg-secondary/50 hover:text-secondary-foreground/90 text-xs lg:text-sm"
              >
                {competence}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`font-semibold mb-3 text-muted-foreground flex justify-center ${titleClasses}`}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="px-2 py-1 bg-secondary/30 text-secondary-foreground rounded-md cursor-default
                           transition-colors duration-200 ease-in-out
                           hover:bg-secondary/50 hover:text-secondary-foreground/90 text-xs lg:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.forwardRef<HTMLDivElement, SkillsSectionProps>(SkillsSection);
