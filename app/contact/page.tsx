"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import CopyButton from "@/components/CopyButton";
import BackHomeButton from "@/components/ui/BackHomeButton";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "dorianpernot@gmail.com";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-10 text-center">
            Restons en Contact
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Je suis toujours ouvert à discuter de nouvelles opportunités ou
            collaborations. N&apos;hésitez pas à me contacter via les canaux
            suivants.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex justify-between items-center">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <a
                  href={`mailto:${email}`}
                  className="text-lg font-medium hover:underline hover:text-primary"
                >
                  {email}
                </a>
              </div>

              <CopyButton textToCopy={email} />
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-4">
                <Linkedin className="h-6 w-6 text-primary" />
                <a
                  href="https://www.linkedin.com/in/dorian-pernot-513173185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline hover:text-primary pt-1"
                >
                  LinkedIn/Dorian
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <BackHomeButton />
      </div>
    </div>
  );
}
