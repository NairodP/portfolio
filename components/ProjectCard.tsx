// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Link as LinkIcon } from "lucide-react";
// import ExpandedProjectCard from "./ExpandedProjectCard";
// import { Project } from "@/types/project";

// type ProjectCardProps = {
//   project: Project;
//   index: number;
//   setScrollLocked: (locked: boolean) => void;
// };

// export default function ProjectCard({
//   project,
//   index,
//   setScrollLocked,
// }: ProjectCardProps) {
//   const [isExpanded, setIsExpanded] = useState<boolean>(false);
//   const maxLength = 100;

//   const truncatedDescription =
//     project.description.length > maxLength
//       ? `${project.description.substring(0, maxLength)}...`
//       : project.description;

//   const handleExpand = () => {
//     setIsExpanded(true);
//     setScrollLocked(true);
//   };

//   const handleClose = () => {
//     setIsExpanded(false);
//     setScrollLocked(false);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
//         <CardHeader className="p-0">
//           <div className="relative h-48 w-full overflow-hidden">
//             <Image
//               src={project.image}
//               alt={project.title}
//               style={{ objectFit: "cover" }}
//               priority
//               className="absolute inset-0 transition-transform duration-300 group-hover:scale-110 h-full"
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="p-6 flex flex-col flex-grow">
//           <CardTitle className="mb-2 text-2xl font-semibold">
//             {project.title}
//           </CardTitle>
//           <CardDescription className="mb-4 flex-grow md:text-justify">
//             {truncatedDescription}
//             {project.description.length > maxLength && (
//               <Button
//                 variant="link"
//                 onClick={handleExpand}
//                 className="ml-2 p-0 h-auto font-normal text-blue-500 hover:text-blue-700"
//               >
//                 Voir plus
//               </Button>
//             )}
//           </CardDescription>
//           <Button variant="outline" asChild className="w-full mt-auto">
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center space-x-2"
//             >
//               <span>Voir le projet</span>
//               <LinkIcon className="h-4 w-4" />
//             </a>
//           </Button>
//         </CardContent>
//       </Card>

//       <AnimatePresence>
//         {isExpanded && (
//           <ExpandedProjectCard project={project} onClose={handleClose} />
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link as LinkIcon } from "lucide-react";
import ExpandedProjectCard from "./ExpandedProjectCard";
import { Project } from "@/types/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const maxLength = 100;

  const truncatedDescription =
    project.description.length > maxLength
      ? `${project.description.substring(0, maxLength)}...`
      : project.description;

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
      <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <CardHeader className="p-0">
          {project.isHosted ? (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                priority
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ) : (
            <Carousel className="w-full h-48">
              <CarouselContent>
                {project.carouselImages?.map((image, imageIndex) => (
                  <CarouselItem key={imageIndex}>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${imageIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </CardHeader>
        <CardContent className="p-6 flex flex-col flex-grow">
          <CardTitle className="mb-2 text-2xl font-semibold">
            {project.title}
          </CardTitle>
          <CardDescription className="mb-4 flex-grow md:text-justify">
            {truncatedDescription}
            {project.description.length > maxLength && (
              <Button
                variant="link"
                onClick={handleExpand}
                className="ml-2 p-0 h-auto font-normal text-blue-500 hover:text-blue-700"
              >
                Voir plus
              </Button>
            )}
          </CardDescription>
          <Button
            variant="outline"
            onClick={handleExpand}
            className="w-full mt-auto"
          >
            {project.isHosted ? "Voir le projet" : "Voir les détails"}
          </Button>
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