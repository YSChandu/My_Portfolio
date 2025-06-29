"use client"

import { useEffect, useState } from "react"

export function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Generate particles only on client side
    const generatedParticles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 4}s`,
    }))
    setParticles(generatedParticles)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const socialLinks = [
    { name: "GitHub", icon: "🔗", url: "https://github.com/YSChandu" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/yarrapothu-sai-chandu-ab45b4244/" }
  ]

  return (
    <footer className="relative bg-black text-white py-20 px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {isClient && (
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-900/50 to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              John Doe
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Creating digital experiences that inspire, engage, and deliver results. Let's build something amazing
              together.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="group relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{link.icon}</span>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Portfolio", "Contact"].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {["Web Development", "UI/UX Design", "Mobile Apps", "Consulting"].map((item, index) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 John Doe. All rights reserved.</p>

          {/* Floating elements */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {isClient && particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-30"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
