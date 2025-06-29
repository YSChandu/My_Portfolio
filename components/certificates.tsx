"use client";
import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle,
  Star,
  Trophy,
  Medal,
  Crown,
} from "lucide-react";
import { useState } from "react";

export function Certificates() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certificates = [
    {
      title: "Artificial Intelligence A-Z 2024: Build 7 AI + LLM & ChatGPT",
      issuer: "Udemy",
      platform: "Udemy",
      date: "2024",
      credentialId: "N/A",
      skills: [
        "Q-Learning",
        "Deep-Q-Learning",
        "LLM fine tuning",
        "A3C Algorithm",
        "Hugging Face",
        "LLM Fine-Tuning",
      ],
      icon: Trophy,
      color: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      verified: true,
      rating: 5,
      link: "https://drive.google.com/file/d/1uIpno6m21K_JJS_BsQ3O1OK9_WN8l3OF/view",
    },
    {
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize",
      issuer: "Udemy",
      platform: "Udemy",
      date: "2024",
      credentialId: "N/A",
      skills: [
        "Machine Learning",
        "Python",
        "Fine tuning",
        "Hyper-parameter tuning",
        "NLP",
        "Deep Learning",
      ],
      icon: Crown,
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      verified: true,
      rating: 5,
      link: "https://drive.google.com/file/d/1XYBisLvvz1MFjlUbe850J2ojEcXSQGjp/view",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      platform: "LinkedIn",
      date: "2024",
      credentialId: "N/A",
      skills: [
        "Generative AI",
        "AI Automation",
        "LLMs",
        "Current trends in AI",
      ],
      icon: Medal,
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      verified: true,
      rating: 4,
      link: "https://drive.google.com/file/d/14Qzrecxh28EKY4KbqbnBJoXWsDYGTgXk/view",
    },
    {
      title: "RINL Trainee",
      issuer: "Rashtriya Ispat Nigam Limited (RINL)",
      platform: "RINL",
      date: "2024",
      credentialId: "N/A",
      skills: [
        "Django",
        "Machine Learning",
        "Backend Development",
        "html",
        "css",
      ],
      icon: Award,
      color: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      verified: true,
      rating: 5,
      link: "https://drive.google.com/file/d/1uR91SCZkXJmPjXQ4jVGUOuuBUx49ZzdC/view",
    },
  ];

  return (
    <div className="w-full py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 mb-6 tracking-tight">
              Certificates
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-transparent to-gray-200 blur-2xl opacity-30 -z-10" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional certifications and achievements that validate my
            expertise across various technologies
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gray-400" />
            <Trophy className="w-6 h-6 text-gray-500" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gray-400" />
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
              onMouseEnter={() => setHoveredCert(idx)}
              onMouseLeave={() => setHoveredCert(null)}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-gray-100/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200" />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500`}
                      />
                      <div
                        className={`relative bg-gradient-to-br ${cert.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{cert.issuer}</p>
                    </div>
                  </div>

                  {cert.verified && (
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Platform:</span>
                    <span>{cert.platform}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-medium text-gray-700">
                    Course Rating:
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-all duration-300 delay-${
                          i * 100
                        } ${
                          i < cert.rating
                            ? hoveredCert === idx
                              ? "text-yellow-400 fill-yellow-400 scale-110"
                              : "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => {
                      let colorClass = "bg-gray-100 text-gray-700";
                      if (skill.toLowerCase().includes("python"))
                        colorClass = "bg-green-100 text-green-800";
                      else if (skill.toLowerCase().includes("machine"))
                        colorClass = "bg-blue-100 text-blue-800";
                      else if (skill.toLowerCase().includes("deep"))
                        colorClass = "bg-indigo-100 text-indigo-800";
                      else if (skill.toLowerCase().includes("llm"))
                        colorClass = "bg-yellow-100 text-yellow-900";
                      else if (skill.toLowerCase().includes("hugging"))
                        colorClass = "bg-pink-100 text-pink-800";
                      else if (skill.toLowerCase().includes("django"))
                        colorClass = "bg-green-200 text-green-900";
                      else if (skill.toLowerCase().includes("nlp"))
                        colorClass = "bg-purple-100 text-purple-800";
                      else if (skill.toLowerCase().includes("a3c"))
                        colorClass = "bg-orange-100 text-orange-800";
                      else if (skill.toLowerCase().includes("backend"))
                        colorClass = "bg-blue-50 text-blue-700";
                      else if (skill.toLowerCase().includes("html"))
                        colorClass = "bg-orange-50 text-orange-700";
                      else if (skill.toLowerCase().includes("css"))
                        colorClass = "bg-blue-100 text-blue-700";
                      return (
                        <span
                          key={i}
                          className={`border border-gray-200 text-xs px-3 py-1.5 rounded-full font-medium ${colorClass}`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-xs text-gray-500 mb-1">
                    Credential ID
                  </div>
                  <div className="font-mono text-sm text-gray-800">
                    {cert.credentialId}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                </a>

                {/* Progress Bar */}
                <div className="mt-6 relative h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      cert.color
                    } rounded-full transition-all duration-1000 ease-out ${
                      hoveredCert === idx
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Certificates", value: "4+", icon: Award },
            { label: "Platforms", value: "3", icon: Trophy },
            { label: "Skills", value: "15+", icon: Star },
            { label: "Hours", value: "200+", icon: Medal },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-black text-2xl text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
