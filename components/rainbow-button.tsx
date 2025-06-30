"use client"

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function RainbowButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      type="submit"
      className="relative flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold border-2 border-gray-200 rounded-full px-6 py-3 overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      <ArrowUpRight className="relative z-10 w-5 h-5 text-gray-800 group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -bottom-2 -left-2 -right-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Background fill effect */}
      <div className="absolute inset-0 bg-black rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </button>
  )
}
