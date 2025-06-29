"use client";

import { IconCloud } from "./icon-globe";
import {
  Code2,
  Globe,
  Brain,
  Database,
  Cloud,
  GitBranch,
  Users,
} from "lucide-react";

export function IconGlobeSection() {
  // Technology icons/images for the globe
  const techIcons = [
    // You can use either SVG icons or image URLs
    // For now, I'll use placeholder images - replace with your actual tech stack
    "/images/python.jpeg",
    "/images/tensorflow.svg",
    "/images/pytorch.svg",
    "/images/opencv.svg",
    "/images/streamlit.svg",
    "/images/numpy.svg",
    "/images/pandas.svg",
    "/images/matplotlib.svg",
    "/images/jupyter.svg",
    "/images/docker.jpeg",
    "/images/aws.jpeg",
    "/images/git.jpeg",
    "/images/react.svg",
    "/images/nodejs.svg",
    "/images/mongodb.jpeg",
    "/images/postgresql.jpeg",
    "/images/kubernetes.svg",
    "/images/nginx.jpeg",
    "/images/vscode.svg",
  ];

  // Actual skills data
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript"],
      icon: Code2,
    },
    {
      category: "Frontend Development",
      items: [
        "React",
        "React-Native",
        "HTML",
        "CSS",
        "JavaScript",
        "Streamlit",
        "Gradio",
      ],
      icon: Globe,
    },
    {
      category: "Backend Development",
      items: ["Django", "FastAPI", "Express.js", "FlaskAPI"],
      icon: Code2,
    },
    {
      category: "Machine Learning & AI",
      items: [
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "PyTorch",
        "Fine-tuning llms",
        "Hugging Face",
        "Langchain",
      ],
      icon: Brain,
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLite", "Supabase", "MongoDB", "PostgresSQL"],
      icon: Database,
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Vercel"],
      icon: Cloud,
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub"],
      icon: GitBranch,
    },
    {
      category: "Soft Skills",
      items: [
        "Team Leadership",
        "Project Management",
        "Problem Solving",
        "Communication",
        "Time Management",
      ],
      icon: Users,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            My Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my technology ecosystem through this interactive 3D globe.
            Click on any technology to focus on it, or drag to rotate the view.
          </p>
        </div>

        {/* Interactive Icon Globe */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <IconCloud images={techIcons} />
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => {
                  // Assign unique colors for each skill (customize as needed)
                  let colorClass = "bg-gray-100 text-gray-700";
                  if (item.toLowerCase().includes("git"))
                    colorClass = "bg-yellow-100 text-yellow-800";
                  else if (item.toLowerCase().includes("docker"))
                    colorClass = "bg-blue-100 text-blue-800";
                  else if (item.toLowerCase().includes("vercel"))
                    colorClass = "bg-black text-white";
                  else if (item.toLowerCase().includes("react"))
                    colorClass = "bg-cyan-100 text-cyan-800";
                  else if (item.toLowerCase().includes("python"))
                    colorClass = "bg-green-100 text-green-800";
                  else if (item.toLowerCase().includes("mongodb"))
                    colorClass = "bg-green-200 text-green-900";
                  else if (item.toLowerCase().includes("postgres"))
                    colorClass = "bg-indigo-100 text-indigo-800";
                  else if (item.toLowerCase().includes("aws"))
                    colorClass = "bg-orange-100 text-orange-800";
                  else if (item.toLowerCase().includes("node"))
                    colorClass = "bg-lime-100 text-lime-800";
                  else if (item.toLowerCase().includes("keras"))
                    colorClass = "bg-red-100 text-red-800";
                  else if (item.toLowerCase().includes("tensorflow"))
                    colorClass = "bg-orange-200 text-orange-900";
                  else if (item.toLowerCase().includes("pytorch"))
                    colorClass = "bg-red-200 text-red-900";
                  else if (item.toLowerCase().includes("sqlite"))
                    colorClass = "bg-blue-50 text-blue-700";
                  else if (item.toLowerCase().includes("supabase"))
                    colorClass = "bg-emerald-100 text-emerald-800";
                  else if (item.toLowerCase().includes("html"))
                    colorClass = "bg-orange-100 text-orange-700";
                  else if (item.toLowerCase().includes("css"))
                    colorClass = "bg-blue-100 text-blue-700";
                  else if (item.toLowerCase().includes("javascript"))
                    colorClass = "bg-yellow-200 text-yellow-900";
                  else if (item.toLowerCase().includes("fastapi"))
                    colorClass = "bg-green-50 text-green-700";
                  else if (item.toLowerCase().includes("django"))
                    colorClass = "bg-green-200 text-green-900";
                  else if (item.toLowerCase().includes("flask"))
                    colorClass = "bg-gray-200 text-gray-800";
                  else if (item.toLowerCase().includes("express"))
                    colorClass = "bg-gray-100 text-gray-900";
                  else if (item.toLowerCase().includes("jupyter"))
                    colorClass = "bg-orange-50 text-orange-700";
                  else if (item.toLowerCase().includes("matplotlib"))
                    colorClass = "bg-indigo-50 text-indigo-700";
                  else if (item.toLowerCase().includes("pandas"))
                    colorClass = "bg-blue-50 text-blue-800";
                  else if (item.toLowerCase().includes("numpy"))
                    colorClass = "bg-indigo-100 text-indigo-900";
                  else if (item.toLowerCase().includes("kubernetes"))
                    colorClass = "bg-blue-200 text-blue-900";
                  else if (item.toLowerCase().includes("nginx"))
                    colorClass = "bg-green-100 text-green-900";
                  else if (item.toLowerCase().includes("vs"))
                    colorClass = "bg-indigo-200 text-indigo-900";
                  else if (item.toLowerCase().includes("hugging"))
                    colorClass = "bg-yellow-200 text-yellow-900";
                  else if (item.toLowerCase().includes("langchain"))
                    colorClass = "bg-purple-100 text-purple-900";
                  else if (item.toLowerCase().includes("gradio"))
                    colorClass = "bg-pink-100 text-pink-800";
                  else if (item.toLowerCase().includes("streamlit"))
                    colorClass = "bg-red-100 text-red-800";
                  else if (item.toLowerCase().includes("team"))
                    colorClass = "bg-blue-50 text-blue-800";
                  else if (item.toLowerCase().includes("project"))
                    colorClass = "bg-green-50 text-green-800";
                  else if (item.toLowerCase().includes("problem"))
                    colorClass = "bg-yellow-50 text-yellow-800";
                  else if (item.toLowerCase().includes("communication"))
                    colorClass = "bg-pink-50 text-pink-800";
                  else if (item.toLowerCase().includes("time"))
                    colorClass = "bg-gray-50 text-gray-800";
                  return (
                    <span
                      key={itemIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClass}`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-gray-600 mb-6">
            Ready to collaborate on your next AI project?
          </p>
          <a
            href="https://your-link-here.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-white to-yellow-400 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300 animate-pulse pointer-events-none" />
            <button className="relative px-8 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-colors duration-200 hover:shadow-xl transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">
                Let's Build Something Amazing
              </span>
              <span className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none shimmer"></span>
            </button>
            <style jsx>{`
              .shimmer {
                background: linear-gradient(
                  120deg,
                  transparent 0%,
                  rgba(255, 255, 255, 0.5) 50%,
                  transparent 100%
                );
                opacity: 0.7;
                transform: translateX(-100%);
                animation: shimmer-move 1.5s infinite;
              }
              @keyframes shimmer-move {
                100% {
                  transform: translateX(100%);
                }
              }
            `}</style>
          </a>
        </div>
      </div>
    </section>
  );
}
