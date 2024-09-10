"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import BackHomeButton from "@/components/ui/BackHomeButton";
import imageMeteoApp from "@/public/meteo-app-screen.png";

const projects = [
  {
    title: "App Météo",
    description: "Appel API pour afficher la météo partout en France.",
    image: imageMeteoApp,
    link: "https://meteo-app-do.vercel.app",
  },
  {
    title: "Projet 2",
    description: "Une brève description du projet 2.",
    image: imageMeteoApp,
    link: "https://meteo-app-do.vercel.app",
  },
  {
    title: "Projet 3",
    description: "Une brève description du projet 3.",
    image: imageMeteoApp,
    link: "https://meteo-app-do.vercel.app",
  },
  // Ajoutez d'autres projets ici
];

export default function Projects() {
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-2xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <BackHomeButton />
      </motion.div>
    </div>
  );
}
