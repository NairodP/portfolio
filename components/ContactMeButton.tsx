"use client";

import Link from "next/link";
import { Button, ButtonProps } from "./ui/button";
import { motion, MotionProps } from "framer-motion";

interface ContactMeButtonProps extends ButtonProps {
  fullWidth?: boolean;
  className?: string;
  containerClassName?: string;
  icon?: React.ReactNode;
  animationProps?: MotionProps;
  showMotionDiv?: boolean;
}

export default function ContactMeButton({ 
  fullWidth = false, 
  className = "", 
  containerClassName = "",
  size = "default",
  variant = "default",
  icon,
  animationProps,
  showMotionDiv = false,
  ...props 
}: ContactMeButtonProps) {
  const ButtonComponent = (
    <Button
      variant={variant}
      size={size}
      className={`${fullWidth ? 'w-full' : ''} hover:shadow-lg transition-shadow duration-300 ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      Me contacter
    </Button>
  );

  const LinkComponent = (
    <Link href="/contact" className={`flex ${fullWidth ? 'w-full' : ''}`}>
      {ButtonComponent}
    </Link>
  );

  if (showMotionDiv) {
    return (
      <motion.div
        className={`flex justify-center ${containerClassName}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        {...animationProps}
      >
        {LinkComponent}
      </motion.div>
    );
  }

  return LinkComponent;
}