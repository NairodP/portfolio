"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import CopyButton from "@/components/CopyButton";
import BackHomeButton from "@/components/ui/BackHomeButton";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "dorianpernot@gmail.com";

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-10 text-center">
            Restons en Contact
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-12 text-center max-w-2xl mx-auto">
            Je suis toujours ouvert à discuter de nouvelles opportunités ou
            collaborations. N&apos;hésitez pas à me contacter via les canaux
            suivants.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-3 sm:p-4 md:p-6 flex justify-between items-center">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Mail className="hidden sm:inline-block h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-xs sm:text-sm md:text-base font-medium hover:underline hover:text-primary break-all"
                >
                  {email}
                </a>
              </div>
              <CopyButton textToCopy={email} />
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/dorian-pernot-513173185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm md:text-base font-medium hover:underline hover:text-primary"
                >
                  LinkedIn/Dorian
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-6 sm:mt-8 md:mt-12 flex justify-center">
          <BackHomeButton />
        </div>
      </div>
    </div>
  );
}