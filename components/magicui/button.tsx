"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative cursor-pointer rounded-lg px-6 py-2 font-medium backdrop-blur-xl border transition-all duration-300 ease-in-out hover:shadow-lg overflow-hidden group",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 block text-sm uppercase tracking-wide">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </button>
  );
});

ShinyButton.displayName = "ShinyButton"; 