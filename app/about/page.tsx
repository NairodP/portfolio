// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, Download } from "lucide-react";
// import profilePicture from "@/public/profilPicture.png";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
//         <motion.div
//           className="space-y-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl font-bold">Dorian PERNOT</h1>
//           <p className="text-xl text-muted-foreground">
//             Développeur Web React / Next.js basé en région Parisienne
//           </p>
//           <div className="space-y-4">
//             <p>
//               Je viens de terminer mes études en développement web React et
//               j&apos;ai appris Next.js en autodidacte. Ma passion réside dans la
//               création d&apos;interfaces utilisateur belles et fonctionnelles.
//             </p>
//             <p>
//               Avec un vif intérêt pour le design et le développement UI, je suis
//               toujours enthousiaste à l&apos;idée de relever de nouveaux défis
//               et de contribuer à des projets innovants.
//             </p>
//           </div>
//           <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
//             <Link href="/contact" className="flex">
//               <Button
//                 variant="default"
//                 size="sm"
//                 className="w-full text-white dark:text-primary-foreground hover:shadow-lg transition-shadow duration-300"
//               >
//                 Me contacter
//               </Button>
//             </Link>

//             <a href="CV - Dorian PERNOT.pdf" download="CV - Dorian PERNOT.pdf">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="w-full hover:shadow-lg transition-shadow duration-300"
//               >
//                 <Download className="mr-2 h-4 w-4" />
//                 Télécharger mon CV
//               </Button>
//             </a>

//             <Card className="col-span-1 md:col-span-2 hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-4">
//                 <Link
//                   href="/projets"
//                   className="group flex items-center justify-between"
//                 >
//                   <span>Découvrez mes derniers projets</span>
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Link>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.div>
//         <motion.div
//           className="mx-auto flex w-full max-w-lg items-center justify-center"
//           initial={{ opacity: 0, y: +20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="relative z-10 flex cursor-pointer items-center overflow-hidden rounded-full p-[1.5px] h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
//             <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#b39e9e_20deg,transparent_120deg)]"></div>
//             <div className="relative z-20 flex h-full w-full rounded-full overflow-hidden bg-background">
//               <Image
//                 src={profilePicture}
//                 alt="Dorian PERNOT - Photo de profil"
//                 className="object-cover"
//                 fill
//                 priority
//                 sizes="(100vw, 100vh)"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";
import profilePicture from "@/public/profilPicture.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between gap-8">
        <motion.div
          className="order-2 lg:order-1 w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">Dorian PERNOT</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center lg:text-left">
            Développeur Web React / Next.js basé en région Parisienne
          </p>
          <div className="space-y-4">
            <p className="text-sm md:text-base">
              Je viens de terminer mes études en développement web React et
              j&apos;ai appris Next.js en autodidacte. Ma passion réside dans la
              création d&apos;interfaces utilisateur belles et fonctionnelles.
            </p>
            <p className="text-sm md:text-base">
              Avec un vif intérêt pour le design et le développement UI, je suis
              toujours enthousiaste à l&apos;idée de relever de nouveaux défis
              et de contribuer à des projets innovants.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <Link href="/contact" className="flex">
              <Button
                variant="default"
                size="sm"
                className="w-full text-white dark:text-primary-foreground hover:shadow-lg transition-shadow duration-300"
              >
                Me contacter
              </Button>
            </Link>

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

            <Card className="col-span-1 sm:col-span-2 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <Link
                  href="/projets"
                  className="group flex items-center justify-between"
                >
                  <span className="text-sm md:text-base">Découvrez mes derniers projets</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-end"
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
                className="object-cover"
                fill
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}