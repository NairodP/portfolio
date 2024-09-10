"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "transition-colors duration-300 relative",
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
      )}
    >
      {children}
      {isActive && (
        <motion.span
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
          layoutId="underline"
          initial={false}
        />
      )}
    </Link>
  );
};

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset || window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset || window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const navControls = useAnimation();
  const separatorControls = useAnimation();

  useEffect(() => {
    if (scrollDirection === "down") {
      navControls.start({ y: "-100%", opacity: 0 });
      separatorControls.start({ scaleX: 0, transition: { duration: 0.2 }});
    } else {
      navControls.start({ y: 0, opacity: 1 });
      separatorControls.start({
        scaleX: 0.9,
        transition: { duration: 0.8, delay: 0.6 },
      });
    }
  }, [scrollDirection, navControls, separatorControls]);

  const navItems = [
    { href: "/about", label: "À propos de moi" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={navControls}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="sticky top-16 md:top-20 z-40 bg-background/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-12 md:h-16">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={separatorControls}
        className="my-2"
        style={{ transformOrigin: 'center' }}
      >
        <Separator />
      </motion.div>
      </motion.nav>

    </>
  );
}