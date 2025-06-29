"use client";
import {
  Building2,
  Calendar,
  MapPin,
  Award,
  Users,
  Code,
  Factory,
  Rocket,
  ArrowRight,
  Star,
  Briefcase,
} from "lucide-react";
import { useState, useEffect } from "react";

export function Experience() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      company: "Vizag Steel Plant",
      role: "Technical Intern",
      duration: "June 2023 - August 2023",
      location: "Visakhapatnam, Andhra Pradesh",
      type: "Industrial Internship",
      description:
        "Gained hands-on experience in steel manufacturing processes, quality control, and industrial automation systems. Worked closely with engineering teams to understand production workflows and safety protocols.",
      responsibilities: [
        "Analyzed steel production processes and quality control measures",
        "Assisted in monitoring automated systems and equipment",
        "Participated in safety training and industrial best practices",
        "Collaborated with cross-functional teams on process optimization",
      ],
      skills: [
        "Industrial Automation",
        "Quality Control",
        "Process Analysis",
        "Safety Protocols",
      ],
      icon: Factory,
      companyType: "Public Sector Enterprise",
      color: "from-slate-600 to-slate-800",
      bgPattern:
        "opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]",
    },
    {
      company: "Startrit",
      role: "Software Development Intern",
      duration: "January 2024 - April 2024",
      location: "Remote / Hybrid",
      type: "Tech Internship",
      description:
        "Contributed to software development projects focusing on web applications and modern development practices. Gained experience in full-stack development and agile methodologies.",
      responsibilities: [
        "Developed and maintained web applications using modern frameworks",
        "Collaborated with development team on feature implementation",
        "Participated in code reviews and testing processes",
        "Contributed to documentation and project planning",
      ],
      skills: ["Web Development", "React", "JavaScript", "Agile Methodology"],
      icon: Rocket,
      companyType: "Technology Startup",
      color: "from-gray-700 to-black",
      bgPattern:
        "opacity-5 bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.1),transparent_50%)]",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-300 to-gray-400 rounded-full blur-3xl opacity-15"
          style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 mb-6 tracking-tight">
              Experience
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-transparent to-gray-200 blur-2xl opacity-30 -z-10" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            My professional journey through diverse industries, from heavy
            manufacturing to cutting-edge technology
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gray-400" />
            <Briefcase className="w-6 h-6 text-gray-500" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gray-400" />
          </div>
        </div>

        {/* Experience Cards with Clean Layout */}
        <div className="relative">
          {/* Subtle connecting line - removed the problematic dots */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2 hidden lg:block opacity-50" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative w-full mb-16 lg:mb-24">
              {/* Timeline Connector - always on the center line */}
              <div
                className="absolute left-1/2 top-8 z-20 hidden lg:block"
                style={{ transform: "translateX(-50%)" }}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-white border-2 border-gray-300 shadow-sm transition-all duration-500 ${
                    activeCard === idx
                      ? "scale-150 border-gray-500 shadow-lg"
                      : "scale-100"
                  }`}
                />
              </div>

              {/* Experience Card, floated left or right */}
              <div
                className={`relative group ${
                  idx % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:ml-auto"
                } lg:w-1/2`}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  animationDelay: `${idx * 300}ms`,
                }}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${exp.bgPattern}`} />

                {/* Elegant Border Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-all duration-700 ${
                    activeCard === idx
                      ? "bg-gradient-to-r from-gray-100/30 via-gray-200/30 to-gray-100/30 p-[1px]"
                      : "bg-transparent p-0"
                  }`}
                >
                  {activeCard === idx && (
                    <div className="w-full h-full bg-white rounded-3xl" />
                  )}
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8 lg:p-10">
                  {/* Header Section */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative group/icon">
                      <div
                        className={`absolute inset-0 bg-white rounded-2xl shadow-lg`}
                      />
                      <div
                        className={`relative p-4 rounded-2xl flex items-center justify-center`}
                      >
                        {/* Icon with color */}
                        <exp.icon
                          className="w-8 h-8"
                          style={{
                            color:
                              exp.company === "Vizag Steel Plant"
                                ? "#e65100" // deep orange for Factory
                                : exp.company === "Startrit"
                                ? "#1976d2" // blue for Rocket
                                : "#222",
                            background: "white",
                            borderRadius: "0.75rem",
                            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
                            padding: "0.25rem",
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`bg-gradient-to-r ${
                            exp.color
                          } text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm transition-all duration-300 ${
                            activeCard === idx ? "scale-105" : ""
                          }`}
                        >
                          {exp.companyType}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 transition-all duration-300 delay-${
                                i * 100
                              } ${
                                activeCard === idx
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <h2
                        className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-2 transition-all duration-300 ${
                          activeCard === idx ? "text-black" : ""
                        }`}
                      >
                        {exp.role}
                      </h2>
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        {exp.company}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2 group/meta">
                          <Calendar
                            className={`w-4 h-4 transition-all duration-300 ${
                              activeCard === idx
                                ? "text-blue-700 scale-110"
                                : "text-blue-500"
                            }`}
                          />
                          <span
                            className={`transition-colors duration-300 font-semibold ${
                              activeCard === idx
                                ? "text-blue-700"
                                : "text-blue-600"
                            }`}
                          >
                            {exp.duration}
                            {/* Add months if not present */}
                            {exp.duration &&
                            !/\b(month|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/i.test(
                              exp.duration
                            )
                              ? " (3 months)"
                              : ""}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 group/meta">
                          <MapPin
                            className={`w-4 h-4 transition-all duration-300 ${
                              activeCard === idx
                                ? "text-green-700 scale-110"
                                : "text-green-600"
                            }`}
                          />
                          <span
                            className={`transition-colors duration-300 font-semibold ${
                              activeCard === idx
                                ? "text-green-700"
                                : "text-green-600"
                            }`}
                          >
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p
                      className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                        activeCard === idx
                          ? "text-gray-700 text-lg"
                          : "text-base"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4
                      className={`font-bold text-gray-800 mb-4 flex items-center gap-3 transition-all duration-300 ${
                        activeCard === idx ? "text-black text-lg" : "text-base"
                      }`}
                    >
                      <Users
                        className={`w-5 h-5 transition-all duration-300 ${
                          activeCard === idx ? "scale-110" : ""
                        }`}
                      />
                      Key Responsibilities
                    </h4>
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 group/resp transition-all duration-300 delay-${
                            i * 100
                          } ${
                            activeCard === idx ? "transform translate-x-2" : ""
                          }`}
                        >
                          <ArrowRight
                            className={`w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0 transition-all duration-300 ${
                              activeCard === idx
                                ? "text-gray-600 scale-110"
                                : "group-hover/resp:text-gray-600"
                            }`}
                          />
                          <span
                            className={`text-gray-600 transition-all duration-300 ${
                              activeCard === idx
                                ? "text-gray-700"
                                : "group-hover/resp:text-gray-700"
                            }`}
                          >
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h4
                      className={`font-bold text-gray-800 mb-4 flex items-center gap-3 transition-all duration-300 ${
                        activeCard === idx ? "text-black text-lg" : "text-base"
                      }`}
                    >
                      <Code
                        className={`w-5 h-5 transition-all duration-300 ${
                          activeCard === idx ? "scale-110" : ""
                        }`}
                      />
                      Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, i) => {
                        let colorClass = "bg-gray-100 text-gray-700";
                        if (skill.toLowerCase().includes("git"))
                          colorClass = "bg-yellow-100 text-yellow-800";
                        else if (skill.toLowerCase().includes("docker"))
                          colorClass = "bg-blue-100 text-blue-800";
                        else if (skill.toLowerCase().includes("react"))
                          colorClass = "bg-cyan-100 text-cyan-800";
                        else if (skill.toLowerCase().includes("python"))
                          colorClass = "bg-green-100 text-green-800";
                        else if (skill.toLowerCase().includes("mongodb"))
                          colorClass = "bg-green-200 text-green-900";
                        else if (skill.toLowerCase().includes("javascript"))
                          colorClass = "bg-yellow-200 text-yellow-900";
                        else if (skill.toLowerCase().includes("web"))
                          colorClass = "bg-blue-50 text-blue-700";
                        else if (skill.toLowerCase().includes("automation"))
                          colorClass = "bg-purple-100 text-purple-800";
                        else if (skill.toLowerCase().includes("quality"))
                          colorClass = "bg-pink-100 text-pink-800";
                        else if (skill.toLowerCase().includes("process"))
                          colorClass = "bg-orange-100 text-orange-800";
                        else if (skill.toLowerCase().includes("agile"))
                          colorClass = "bg-green-50 text-green-800";
                        else if (skill.toLowerCase().includes("control"))
                          colorClass = "bg-red-100 text-red-800";
                        else if (skill.toLowerCase().includes("analysis"))
                          colorClass = "bg-indigo-100 text-indigo-800";
                        else if (skill.toLowerCase().includes("safety"))
                          colorClass = "bg-gray-200 text-gray-800";
                        return (
                          <span
                            key={i}
                            className={`border border-gray-200 text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 delay-${
                              i * 50
                            } ${colorClass} ${
                              activeCard === idx
                                ? "scale-105 shadow-sm"
                                : "hover:bg-gray-200 hover:scale-105 hover:shadow-sm"
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        exp.color
                      } rounded-full transition-all duration-1000 ease-out ${
                        activeCard === idx
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                  </div>
                </div>

                {/* Subtle Floating Elements */}
                <div
                  className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-gray-50/40 to-transparent rounded-full transition-all duration-700 ${
                    activeCard === idx
                      ? "opacity-100 scale-110"
                      : "opacity-0 scale-100"
                  }`}
                />
                <div
                  className={`absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tl from-gray-50/30 to-transparent rounded-full transition-all duration-700 delay-200 ${
                    activeCard === idx
                      ? "opacity-100 scale-110"
                      : "opacity-0 scale-100"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Summary Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              value: "2",
              label: "Internships Completed",
              color: "from-slate-600 to-slate-800",
            },
            {
              icon: Building2,
              value: "2",
              label: "Different Industries",
              color: "from-gray-700 to-black",
            },
            {
              icon: Users,
              value: "8+",
              label: "Skills Acquired",
              color: "from-gray-600 to-gray-800",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 text-center p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-black text-4xl text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
