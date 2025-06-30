"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import me from "../public/images/mee.jpg"

export function BentoSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate progress based on when section enters viewport
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate transform values based on scroll progress
  const rotateX = -90 + scrollProgress * 90 // From -90deg to 0deg
  const translateY = 50 - scrollProgress * 50 // From 50px to 0px
  const opacity = 0.8 + scrollProgress * 0.2 // From 0.8 to 1

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 3D Bento Box Image */}
        <div
          className="mb-12 perspective-1000"
          style={{
            transform: `translateY(${translateY}px)`,
            opacity,
            transition: "none", // Smooth scroll-driven animation
          }}
        >
          <div
            style={{
              transform: `rotateX(${rotateX}deg)`,
              transformStyle: "preserve-3d",
              transition: "none",
              willChange: "transform",
            }}
          >
            <Image
              src={me}
              alt="3D Bento Box Features"
              width={400}
              height={300}
              className="mx-auto rounded-full shadow-2xl"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
                transform: "translateZ(0)", // GPU acceleration
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-600 ease-out ${
            scrollProgress > 0.5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I am a passionate AI and Machine Learning Engineer with a strong foundation in full-stack web development. My expertise lies in building intelligent applications using technologies like Python, TensorFlow, and PyTorch, coupled with modern frontend frameworks like React. I thrive on solving complex problems and creating seamless, user-centric experiences by bridging the gap between advanced AI and intuitive design.
          </p>
        </div>
      </div>
    </section>
  )
}
