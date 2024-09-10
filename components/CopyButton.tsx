import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 sm:ml-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-accent rounded-lg p-1 sm:p-2 inline-flex items-center justify-center"
      aria-label={copied ? "Copié" : "Copier"}
    >
      {copied ? (
        <Check className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-green-500" />
      ) : (
        <Copy className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      )}
    </button>
  );
}