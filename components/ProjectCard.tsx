import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExpandedProjectCard from "./ExpandedProjectCard";
import { Project } from "@/types/project";
import { ChevronRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  index: number;
  setScrollLocked: (locked: boolean) => void;
};

export default function ProjectCard({
  project,
  index,
  setScrollLocked,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpanded(true);
    setScrollLocked(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setScrollLocked(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer"
        onClick={handleExpand}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex flex-col flex-grow">
          <CardTitle className="mb-2 text-xl font-semibold">
            {project.title}
          </CardTitle>
          <div className="mb-2 flex-grow">
            <p
              className="text-sm text-muted-foreground text-justify hyphens-auto overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              {project.description}
            </p>
          </div>
          <motion.div
            className="flex items-center text-sm text-blue-500 mt-auto"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>En savoir plus</span>
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="ml-1 h-4 w-4" />
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>

      <AnimatePresence>
        {isExpanded && (
          <ExpandedProjectCard project={project} onClose={handleClose} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
