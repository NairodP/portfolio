import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadCV() {
  return (
    <a href="CV - Dorian PERNOT.pdf" download="CV - Dorian PERNOT.pdf">
      <Button
        variant="outline"
        size="sm"
        className="w-full hover:shadow-lg transition-shadow duration-300"
      >
        <Download className="mr-2 h-4 w-4" />
        Télécharger mon CV
      </Button>
    </a>
  );
}
