"use client"
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  MessageCircle,
  ExternalLink,
  Users,
  Heart,
  Share2,
} from "lucide-react"
import { useState } from "react"

export function SocialMedia() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null)

  const socialLinks = [
    {
      name: "GitHub",
      username: "@YSChandu",
      description: "Open source projects and code repositories",
      url: "https://github.com/YSChandu",
      icon: Github,
      color: "from-gray-700 to-black",
      bgColor: "from-gray-50 to-gray-100",
      hoverColor: "hover:from-gray-800 hover:to-black",
      stats: { label: "Repositories", value: "25+" },
    },
    {
      name: "LinkedIn",
      username: "Yarrapothu Sai Chandu",
      description: "Professional network and career updates",
      url: "https://linkedin.com/in/chandu-ys",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      bgColor: "from-blue-50 to-blue-100",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      stats: { label: "Connections", value: "500+" },
    },
    {
      name: "Email",
      username: "yarrapothusaichandu@gmail.com",
      description: "Get in touch for collaborations",
      url: "mailto:yarrapothusaichandu@gmail.com",
      icon: Mail,
      color: "from-red-500 to-red-700",
      bgColor: "from-red-50 to-red-100",
      hoverColor: "hover:from-red-600 hover:to-red-800",
      stats: { label: "Response", value: "24h" },
    },
    {
      name: "Portfolio",
      username: "yarrapothusaichandu.vercel.app",
      description: "Personal website and project showcase",
      url: "https://yarrapothusaichandu.vercel.app",
      icon: Globe,
      color: "from-emerald-500 to-emerald-700",
      bgColor: "from-emerald-50 to-emerald-100",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-800",
      stats: { label: "Projects", value: "10+" },
    },
  ]

  return (
    <div className="w-full py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 mb-6 tracking-tight">
              Connect
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-transparent to-gray-200 blur-2xl opacity-30 -z-10" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Let's connect across different platforms and build something amazing together
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gray-400" />
            <Share2 className="w-6 h-6 text-gray-500" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gray-400" />
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 block"
              onMouseEnter={() => setHoveredSocial(idx)}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${social.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />

              {/* Floating Orbs */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-gray-100/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200" />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500`}
                      />
                      <div
                        className={`relative bg-gradient-to-br ${social.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                        {social.name}
                      </h3>
                      <p className="text-gray-600 font-medium">{social.username}</p>
                    </div>
                  </div>

                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {social.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-end mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{social.stats.label}:</span>
                    <span className="text-sm font-bold text-gray-800">{social.stats.value}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}
                >
                  <span>Connect</span>
                  <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Progress Bar */}
                <div className="mt-6 relative h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full transition-all duration-1000 ease-out ${
                      hoveredSocial === idx ? "translate-x-0" : "-translate-x-full"
                    }`}
                  />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
              />
            </a>
          ))}
        </div>

        

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:chandu@example.com"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Send Email</span>
              </a>
              <a
                href="https://linkedin.com/in/chandu-ys"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 group"
              >
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
