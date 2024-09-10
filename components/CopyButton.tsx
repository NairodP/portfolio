"use client"; // Assure que ce composant est un composant client

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type CopyButtonProps = {
  textToCopy: string;
};

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Réinitialise l'état après 2 secondes
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-accent rounded-lg p-2 inline-flex items-center justify-center"
    >
      {copied ? (
        <Check className="h-5 w-5 text-white" />
      ) : (
        <Copy className="h-5 w-5" />
      )}
    </button>
  );
}
