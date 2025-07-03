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
      role: "Team Lead & Django Developer Intern",
      duration: "09/2023 – 10/2023",
      location: "Vizag steel plant",
      type: "Industrial Internship",
      description:
        "Led a team of four to design, develop, and deploy the official RINL website using Django as the backend. Oversaw all phases of the project lifecycle, from requirements gathering to deployment, while ensuring best practices in code quality and teamwork.",
      responsibilities: [
        "Led a team of four in developing the RINL website using Django",
        "Designed and implemented backend APIs and admin interfaces",
        "Coordinated deployment and ensured website reliability",
        "Collaborated with engineering teams for requirements and feedback",
        "Managed project timelines and delegated tasks effectively",
      ],
      skills: [
        "Django",
        "Team Leadership",
        "Web Deployment",
        "Backend Development",
        "Project Management",
      ],
      certificate: {
        name: "View Internship Certificate",
        link: "https://drive.google.com/file/d/1uR91SCZkXJmPjXQ4jVGUOuuBUx49ZzdC/view",
      },
      icon: Factory,
      companyType: "Public Sector Enterprise",
      color: "from-slate-600 to-slate-800",
      bgPattern:
        "opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]",
    },
    {
      company: "Startrit",
      role: "Software Development Intern",
      duration: "Started: 23rd April 2025",
      location: "Remote",
      type: "Tech Internship",
      description:
        "Worked on AI-powered driver monitoring systems to detect drowsiness, distractions, and unauthorized access. Currently developing a fleet management website and app using React and React Native for the Tamil Nadu government.",
      responsibilities: [
        "Developed a driver monitoring system to detect drowsiness, phone usage, smoking, seat belt status, and driver authorization",
        "Implemented real-time alerts and reporting features for fleet safety",
        "Collaborated with the team to design and build a fleet management website using React",
        "Developing a cross-platform mobile app with React Native for government fleet operations",
        "Participated in agile development, code reviews, and project planning",
      ],
      skills: [
        "AI/ML",
        "Computer Vision",
        "React",
        "React Native",
        "Web & App Development",
        "Fleet Management",
      ],
      certificate: {
        name: "View Internship Certificate",
        link: "https://drive.google.com/file/d/1YydZRWm2YmmAsFrPGFQ-QDxxDkBskbsP/view?usp=sharing",
      },
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
          {/* Subtle connecting line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2 hidden lg:block opacity-50" />
          {/* Vertical line for mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent lg:hidden" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative w-full mb-12 lg:mb-24">
              {/* Timeline Connector */}
              <div
                className="absolute left-6 lg:left-1/2 top-8 z-20"
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

              {/* Experience Card */}
              <div
                className={`relative group ml-12 w-[calc(100%-3rem)] lg:w-1/2 ${
                  idx % 2 === 0 ? "lg:ml-0 lg:pr-12" : "lg:ml-auto lg:pl-12"
                }`}
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
                    <div className="w-full h-full bg-white rounded-2xl lg:rounded-3xl" />
                  )}
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6 lg:p-10">
                  {/* Header Section */}
                  <div className="flex items-start gap-4 lg:gap-6 mb-6 lg:mb-8">
                    <div className="relative group/icon">
                      <div
                        className={`absolute inset-0 bg-white rounded-xl lg:rounded-2xl shadow-lg`}
                      />
                      <div
                        className={`relative p-3 lg:p-4 rounded-xl lg:rounded-2xl flex items-center justify-center`}
                      >
                        {/* Icon with color */}
                        <exp.icon
                          className="w-6 h-6 lg:w-8 lg:h-8"
                          style={{
                            color:
                              exp.company === "Vizag Steel Plant"
                                ? "#e65100" // deep orange for Factory
                                : exp.company === "Startrit"
                                ? "#1976d2" // blue for Rocket
                                : "#222",
                            background: "white",
                            borderRadius: "0.5rem", // smaller for mobile
                            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
                            padding: "0.25rem",
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                        <span
                          className={`bg-gradient-to-r ${
                            exp.color
                          } text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm transition-all duration-300 self-start ${
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
                        className={`text-xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2 transition-all duration-300 ${
                          activeCard === idx ? "text-black" : ""
                        }`}
                      >
                        {exp.role}
                      </h2>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-3 lg:mb-4">
                        {exp.company}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 text-sm">
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
                          </span>
                        </div>
                        <div className="flex items-center gap-2 group/meta">
                          <MapPin
                            className={`w-4 h-4 transition-all duration-300 ${
                              activeCard === idx
                                ? "text-green-700 scale-110"
                                : "text-green-500"
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
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-5 h-5 text-gray-400" />
                      <h4 className="text-lg font-bold text-gray-800">
                        Key Responsibilities
                      </h4>
                    </div>
                    <ul className="space-y-3 pl-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-gray-400 mt-1.5 shrink-0" />
                          <span className="text-base text-gray-600">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="w-5 h-5 text-gray-400" />
                      <h4 className="text-lg font-bold text-gray-800">
                        Skills & Technologies
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Section */}
                  {exp.certificate && (
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-5 h-5 text-gray-400" />
                        <h4 className="text-lg font-bold text-gray-800">
                          Certificate
                        </h4>
                      </div>
                      <a
                        href={exp.certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm"
                      >
                        <span>{exp.certificate.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
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
