"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import profilePicture from "@/public/profilPicture.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import ContactMe from "@/components/ContactMe";
import DownloadCV from "@/components/DownloadCV";

export default function About() {
  const softSkills = ["Travail d'équipe", "Adaptabilité", "Créativité"];

  const hobbies = ["Escalade", "Randonnée", "Bivouac"];

  const competences = ["Intelligence Artificielle", "Git", "Méthode Agile"];

  const softSkillsRef = useRef<HTMLDivElement>(null);

  const scrollToSoftSkills = () => {
    softSkillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ClickableSoftSkill = ({ children }: { children: React.ReactNode }) => (
    <button
      onClick={scrollToSoftSkills}
      className="inline-flex items-center px-0.5 py-0.5 rounded-sm font-medium bg-secondary/30 text-primary-800 hover:bg-primary-200 transition-colors duration-200"
    >
      {children}
    </button>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between gap-8">
        <motion.div
          className="order-2 lg:order-1 w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
            Dorian PERNOT
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center lg:text-left">
            Développeur Web React / Next.js basé en région Parisienne
          </p>
          <div className="space-y-8">
            <p className="text-sm md:text-base text-justify hyphens-auto">
              Diplômé en développement web avec une spécialisation en React,
              j&apos;ai approfondi mes compétences en Next.js de manière
              autodidacte. Ma passion réside dans la création d&apos;interfaces
              utilisateur à la fois esthétiques et fonctionnelles pour une
              expérience utilisateur intuitive.
            </p>
            <p className="text-sm md:text-base text-justify hyphens-auto">
              Animé par une <ClickableSoftSkill>curiosité</ClickableSoftSkill>{" "}
              insatiable pour les technologies émergentes, je porte un intérêt
              particulier à l&apos;
              <ClickableSoftSkill>intelligence artificielle</ClickableSoftSkill>{" "}
              et au développement UI innovant. Je m&apos;adapte aux besoins en
              utilisant la{" "}
              <ClickableSoftSkill>méthode agile</ClickableSoftSkill> pour mener
              à bien mes projets. Ma maîtrise d&apos;outils tels que{" "}
              <ClickableSoftSkill>Git</ClickableSoftSkill> me permet de
              collaborer efficacement en équipe et de proposer des solutions
              fiables et bien structurées.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <ContactMe />

            <DownloadCV />

            <Card className="col-span-1 sm:col-span-2 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <Link
                  href="/projects"
                  className="group flex items-center justify-between"
                >
                  <span className="text-sm md:text-base">
                    Découvrez mes derniers projets
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-end"
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 flex cursor-pointer items-center overflow-hidden rounded-full p-[1.5px] h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#b39e9e_20deg,transparent_120deg)]"></div>
            <div className="relative z-20 flex h-full w-full rounded-full overflow-hidden bg-background">
              <Image
                src={profilePicture}
                alt="Dorian PERNOT - Photo de profil"
                className="object-cover cursor-default"
                fill
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
          <motion.div
            className="mt-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-x-2 gap-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-muted-foreground flex justify-center">
                  Compétences
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {competences.map((competence, index) => (
                    <motion.span
                      key={competence}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="text-sm px-2 py-1 bg-secondary/30 text-secondary-foreground rounded-md cursor-default
                             transition-colors duration-200 ease-in-out
                             hover:bg-secondary/50 hover:text-secondary-foreground/90"
                    >
                      {competence}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div ref={softSkillsRef}>
                <h3 className="text-lg font-semibold mb-3 text-muted-foreground flex justify-center">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {softSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="text-sm px-2 py-1 bg-secondary/30 text-secondary-foreground rounded-md cursor-default
                             transition-colors duration-200 ease-in-out
                             hover:bg-secondary/50 hover:text-secondary-foreground/90"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* <div>
                <h3 className="text-lg font-semibold mb-3 text-muted-foreground flex justify-center">
                  Hobbies
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {hobbies.map((hobby, index) => (
                    <motion.span
                      key={hobby}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="text-sm px-2 py-1 bg-secondary/30 text-secondary-foreground rounded-md cursor-default
                             transition-colors duration-200 ease-in-out
                             hover:bg-secondary/50 hover:text-secondary-foreground/90"
                    >
                      {hobby}
                    </motion.span>
                  ))}
                </div>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
