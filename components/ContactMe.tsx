import Link from "next/link";
import { Button } from "./ui/button";

export default function ContactMe() {
  return (
    <Link href="/contact" className="flex">
      <Button
        variant="default"
        size="sm"
        className="w-full text-white dark:text-primary-foreground hover:shadow-lg transition-shadow duration-300"
      >
        Me contacter
      </Button>
    </Link>
  );
}
