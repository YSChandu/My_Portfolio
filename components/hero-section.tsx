"use client";

import { useEffect, useState } from "react";
import { ShimmerButton } from "./magicui/shimmer-button";
import { MyNavbar } from "./navbar";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20">
      {/* Navbar */}
      <MyNavbar />


      {/* Main content */}
      <div className="relative z-20 text-center flex flex-col items-center justify-center px-8 max-w-4xl mx-auto flex-1">
        <div
          className={`transition-all duration-800 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-7xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Yarrapothu Sai Chandu
          </h1>
        </div>

        <div
          className={`transition-all duration-800 ease-out delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-2xl md:text-4xl text-gray-600 mb-8 font-light">
            AI & ML Engineer
          </h2>
        </div>

        <div
          className={`transition-all duration-800 ease-out delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft digital experiences that blend beautiful design with
            powerful functionality. Specializing in modern web development and
            user-centered design.
          </p>
        </div>

        <div
          className={`transition-all duration-800 ease-out delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <ShimmerButton
            shimmerColor="black"
            background="white"
            borderRadius="100px"
            shimmerDuration="4s"
            className="text-lg text-black font-semibold "
          >
            Explore My Work
          </ShimmerButton>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gray-200 rounded-full blur-3xl opacity-40" />
      </div>
    </section>
  );
}
