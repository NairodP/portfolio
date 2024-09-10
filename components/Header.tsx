// "use client";

// import Link from "next/link";
// import portfolioHomeIcon from "@/public/portfolio-home-icon.jpg";
// import Image from "next/image";
// import { ToggleTheme } from "./ToggleTheme";
// import { Separator } from "@/components/ui/separator";

// export default function Header() {
//   return (
//     <>
//       <header className="relative h-[90px] flex items-center justify-between p-5 border-b border-gray-300 z-20">
//         <div className="p-0.25 flex items-center space-x-4 h-full">
//           <Link href="/">
//             <Image
//               src={portfolioHomeIcon}
//               alt="Photo de profil"
//               width={90}
//               height={90}
//               className="w-16 h-auto border-white border-2 rounded-md"
//               priority
//             />
//           </Link>
//           <Separator orientation="vertical" className="my-4" />
//         </div>
//         <div className="flex items-center gap-4 h-full">
//           <Separator orientation="vertical" className="my-4" />

//           <ToggleTheme />
//         </div>
//       </header>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ToggleTheme } from "./ToggleTheme";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import portfolioHomeIcon from "@/public/portfolio-home-icon.jpg";

export default function Header() {

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const backgroundClass = isHomePage
    ? "bg-transparent"
    : "bg-background/50 backdrop-blur-sm dark:md:bg-transparent dark:lg:bg-transparent";

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("sticky top-0 z-50 px-5", backgroundClass)}

    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={portfolioHomeIcon}
              alt="Photo de profil"
              width={40}
              height={40}
              className="rounded-full border-2 border-primary"
              priority
            />
            <span className="font-bold text-2xl hidden sm:inline font-cormorant">Dorian Pernot</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Separator orientation="vertical" className="h-8 hidden sm:block" />
            <ToggleTheme />
          </div>
        </div>
      </div>
    </motion.header>
  );
}