"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackHomeButton() {
  return (
    <motion.div
      className="mt-16 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Link href="/" passHref>
        <Button variant="outline" className="flex items-center space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Retour à l&apos;accueil</span>
        </Button>
      </Link>
    </motion.div>
  );
}
