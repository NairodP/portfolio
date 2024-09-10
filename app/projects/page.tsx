// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Link as LinkIcon } from "lucide-react";
// import { motion } from "framer-motion";
// import BackHomeButton from "@/components/ui/BackHomeButton";
// import imageMeteoApp from "@/public/meteo-app-screen.png";

// const projects = [
//   {
//     title: "App Météo",
//     description: "Appel API pour afficher la météo partout en France.",
//     image: imageMeteoApp,
//     link: "https://meteo-app-do.vercel.app",
//   },
//   {
//     title: "Projet 2",
//     description: "Une brève description du projet 2.",
//     image: imageMeteoApp,
//     link: "https://meteo-app-do.vercel.app",
//   },
//   {
//     title: "Projet 3",
//     description: "Une brève description du projet 3.",
//     image: imageMeteoApp,
//     link: "https://meteo-app-do.vercel.app",
//   },
//   // Ajoutez d'autres projets ici
// ];

// export default function Projects() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <motion.div
//         className="max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-4xl font-bold mb-10 text-center">Mes Projets</h1>
//         <p className="text-xl text-muted-foreground mb-12 text-center">
//           Voici une sélection de projets que j&apos;ai réalisés. Chacun
//           d&apos;eux représente un défi unique et une opportunité
//           d&apos;apprentissage.
//         </p>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <CardHeader className="p-0">
//                   <div className="relative h-48 w-full overflow-hidden">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       style={{ objectFit: "cover" }}
//                       priority
//                       className="absolute inset-0 transition-transform duration-300 group-hover:scale-110 h-full"
//                     />
//                   </div>
//                 </CardHeader>
//                 <CardContent className="p-6">
//                   <CardTitle className="mb-2 text-2xl font-semibold">
//                     {project.title}
//                   </CardTitle>
//                   <CardDescription className="mb-4">
//                     {project.description}
//                   </CardDescription>
//                   <Button variant="outline" asChild className="w-full">
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center space-x-2"
//                     >
//                       <span>Voir le projet</span>
//                       <LinkIcon className="h-4 w-4" />
//                     </a>
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <BackHomeButton />
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link as LinkIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BackHomeButton from "@/components/ui/BackHomeButton";
import imageMeteoApp from "@/public/meteo-app-screen.png";

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

const projects: Project[] = [
  {
    title: "App Météo",
    description: "Appel API pour afficher la météo partout en France. Cette application utilise l'API OpenWeatherMap pour fournir des informations météorologiques précises et à jour. Elle offre une interface utilisateur intuitive et responsive, permettant aux utilisateurs de rechercher facilement la météo de n'importe quelle ville en France.",
    image: imageMeteoApp,
    link: "https://meteo-app-do.vercel.app",
  },
  {
    title: "Projet 2",
    description: "Une brève description du projet 2. Ce projet innovant combine les dernières technologies pour créer une solution unique à un problème courant. Il démontre l'utilisation avancée de React et Next.js, ainsi que l'intégration de plusieurs API externes.",
    image: imageMeteoApp,
    link: "https://meteo-app-do.vercel.app",
  },
  {
    title: "Projet 3",
    description: "Une brève description du projet 3. Ce projet ambitieux repousse les limites de ce qui est possible avec le développement web moderne. Il intègre des fonctionnalités de machine learning et offre une expérience utilisateur personnalisée basée sur le comportement de l'utilisateur.",
    image: imageMeteoApp,
    link: "https://meteo-app-do.vercel.app",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  setScrollLocked: (locked: boolean) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, setScrollLocked }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const maxLength = 100;

  const truncatedDescription = project.description.length > maxLength
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
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              style={{ objectFit: "cover" }}
              priority
              className="absolute inset-0 transition-transform duration-300 group-hover:scale-110 h-full"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col flex-grow">
          <CardTitle className="mb-2 text-2xl font-semibold">
            {project.title}
          </CardTitle>
          <CardDescription className="mb-4 flex-grow">
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
          <Button variant="outline" asChild className="w-full mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2"
            >
              <span>Voir le projet</span>
              <LinkIcon className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card p-6 rounded-lg max-w-lg w-full"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <Button variant="outline" asChild className="w-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Voir le projet</span>
                  <LinkIcon className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Projects() {
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
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
          Voici une sélection de projets que j&apos;ai réalisés. Chacun
          d&apos;eux représente un défi unique et une opportunité
          d&apos;apprentissage.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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