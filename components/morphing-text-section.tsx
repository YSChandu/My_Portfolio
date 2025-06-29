"use client"

import { useEffect, useState } from "react"

const morphingTexts = ["AI & ML Engineer","Django Developer","Full Stack Developer", "App Developer"]

export function MorphingTextSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Generate particles only on client side
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 3}s`,
    }))
    setParticles(generatedParticles)

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % morphingTexts.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">I am a</h2>

          {/* Morphing text container */}
          <div className="relative h-32 md:h-auto flex items-center justify-center overflow-hidden">
            <div
              className={`text-6xl md:text-8xl p-8 font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent transition-all duration-500 ${
                isAnimating ? "scale-110 blur-sm opacity-50" : "scale-100 blur-0 opacity-100"
              }`}
              style={{
                transform: isAnimating ? "rotateX(90deg)" : "rotateX(0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {morphingTexts[currentIndex]}
            </div>

            {/* Liquid morphing effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ${
                    isAnimating ? "scale-150 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${40 + Math.sin(i) * 20}%`,
                    animationDelay: `${i * 100}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        
        <div className="relative">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From building intelligent AI & ML solutions, robust Django backends, and full stack web apps to crafting seamless mobile experiences—every project is a blend of creativity, engineering, and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
