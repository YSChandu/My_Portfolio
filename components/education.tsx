"use client";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Star,
  Trophy,
  Target,
  MapPin,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Education() {
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, education.length);
    const handleScroll = () => {
      const newVisibleCards = cardRefs.current.map((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      });
      setVisibleCards(newVisibleCards);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const education = [
    {
      degree: "B.Tech in Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "VIT AP University",
      duration: "2021 - 2025",
      grade: "8.01",
      gradeType: "CGPA",
      location: "Amaravati, AP",
      status: "Current",
      icon: GraduationCap,
      color: "from-gray-700 to-black",
      bgGradient: "from-gray-50 to-gray-100",
      subjects: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Computer Vision",
        "Natural Language Processing",
      ],
      achievements: [
        "AI/ML Specialization Track",
        "Research Project Publication",
        "Dean's List Recognition",
        "Innovation Award Winner",
      ],
      highlights: [
        "Final Year AI Project",
        "Published Research Paper",
        "Hackathon Champion",
        "Technical Society Lead",
      ],
      verified: true,
      rating: 5,
    },
    {
      degree: "Intermediate Education",
      specialization: "Mathematics, Physics, Chemistry",
      institution: "Srichaitanya Junior College",
      duration: "2019 - 2021",
      grade: "96.7",
      gradeType: "Percentage",
      location: "Hyderabad, TS",
      status: "Completed",
      icon: BookOpen,
      color: "from-gray-600 to-gray-800",
      bgGradient: "from-gray-50 to-gray-100",
      subjects: [
        "Advanced Mathematics",
        "Physics",
        "Chemistry",
        "English Literature",
      ],
      achievements: [
        "Top 5% of Class",
        "Mathematics Excellence",
        "Science Olympiad Gold",
        "Perfect Attendance",
      ],
      highlights: [
        "State Rank Holder",
        "Subject Topper",
        "Merit Scholarship",
        "Academic Excellence",
      ],
      verified: true,
      rating: 5,
    },
    {
      degree: "Secondary Education",
      specialization: "All Subjects",
      institution: "Bhashyam High School",
      duration: "2018 - 2019",
      grade: "10.0",
      gradeType: "CGPA",
      location: "Hyderabad, TS",
      status: "Completed",
      icon: Trophy,
      color: "from-gray-800 to-black",
      bgGradient: "from-gray-50 to-gray-100",
      subjects: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Hindi",
      ],
      achievements: [
        "Perfect Score Achievement",
        "Class Topper",
        "Academic Excellence Award",
        "School Captain",
      ],
      highlights: [
        "100% Perfect Score",
        "Student Leadership",
        "Best Student Award",
        "Academic Gold Medal",
      ],
      verified: true,
      rating: 5,
    },
  ];

  return (
    <div className="w-full py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 mb-6 tracking-tight">
              Education
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-transparent to-gray-200 blur-2xl opacity-30 -z-10" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Academic excellence journey showcasing consistent performance across
            different educational levels
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gray-400" />
            <GraduationCap className="w-6 h-6 text-gray-500" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gray-400" />
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {education.map((edu, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
              onMouseEnter={() => setHoveredEdu(idx)}
              onMouseLeave={() => setHoveredEdu(null)}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
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
                        className={`absolute inset-0 bg-gradient-to-br ${edu.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500`}
                      />
                      <div
                        className={`relative bg-gradient-to-br ${edu.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <edu.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 font-medium text-sm">
                        {edu.specialization}
                      </p>
                    </div>
                  </div>

                  {edu.verified && (
                    <div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Institution */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                    {edu.institution}
                  </h4>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Status:</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200`}
                    >
                      Completed
                    </span>
                  </div>
                </div>

                {/* Grade Display */}
                <div className="mb-6 p-4 bg-gray-100 rounded-xl border border-gray-200 group-hover:bg-gray-200 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-800 mb-1">
                      {edu.grade}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {edu.gradeType}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-medium text-gray-700">
                    Academic Performance:
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-all duration-300 delay-${
                          i * 100
                        } ${
                          i < edu.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Key Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, i) => {
                      let colorClass = "bg-gray-100 text-gray-700";
                      if (subject.toLowerCase().includes("python"))
                        colorClass = "bg-green-100 text-green-800";
                      else if (subject.toLowerCase().includes("machine"))
                        colorClass = "bg-blue-100 text-blue-800";
                      else if (subject.toLowerCase().includes("deep"))
                        colorClass = "bg-indigo-100 text-indigo-800";
                      else if (subject.toLowerCase().includes("data"))
                        colorClass = "bg-yellow-100 text-yellow-800";
                      else if (subject.toLowerCase().includes("vision"))
                        colorClass = "bg-pink-100 text-pink-800";
                      else if (subject.toLowerCase().includes("natural"))
                        colorClass = "bg-purple-100 text-purple-800";
                      else if (subject.toLowerCase().includes("mathematics"))
                        colorClass = "bg-orange-100 text-orange-800";
                      else if (subject.toLowerCase().includes("physics"))
                        colorClass = "bg-blue-50 text-blue-700";
                      else if (subject.toLowerCase().includes("chemistry"))
                        colorClass = "bg-red-100 text-red-800";
                      else if (subject.toLowerCase().includes("english"))
                        colorClass = "bg-gray-200 text-gray-800";
                      else if (subject.toLowerCase().includes("social"))
                        colorClass = "bg-green-50 text-green-800";
                      else if (subject.toLowerCase().includes("hindi"))
                        colorClass = "bg-yellow-50 text-yellow-800";
                      return (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`}
                        >
                          {subject}
                        </span>
                      );
                    })}
                  </div>
                </div>

               

                {/* Progress Bar */}
                <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      edu.color
                    } rounded-full transition-all duration-1000 ease-out ${
                      hoveredEdu === idx ? "translate-x-0" : "-translate-x-full"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
