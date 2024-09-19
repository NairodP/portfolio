import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, X } from "lucide-react";
import { Project } from "@/types/project";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useWindowSize } from "@/hooks/useWindowsSize";
import { useToast } from "@/hooks/use-toast";

type ExpandedProjectCardProps = {
  project: Project;
  onClose: () => void;
};

export default function ExpandedProjectCard({
  project,
  onClose,
}: ExpandedProjectCardProps) {
  const { width } = useWindowSize();
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width ? width < 768 : false);
  }, [width]);

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!project.isResponsive && isMobile) {
      e.preventDefault();
      toast({
        variant: "destructive",
        title: "Site non disponible en version mobile",
        description: "Ce projet n'est pas optimisé pour les appareils mobiles.",
        duration: 3000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        {!project.isHosted && project.carouselImages && (
          <Carousel className="w-full mb-4 relative">
            <CarouselContent>
              {project.carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div
                    className="relative w-full"
                    style={{ height: "calc(100vh - 300px)" }}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        )}
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify hyphens-auto">
          {project.description}
        </p>
        {project.isHosted && project.link && (
          <Button variant="outline" asChild className="w-full">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2"
              onClick={handleProjectClick}
            >
              <span>Voir le projet</span>
              <LinkIcon className="h-4 w-4" />
            </a>
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
}
