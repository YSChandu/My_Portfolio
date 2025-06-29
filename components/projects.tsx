"use client";
import {
  Github,
  ExternalLink,
  Brain,
  Globe,
  Heart,
  Hand,
  Sparkles,
} from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Semantic Book Recommendation Using LLMs and Vector Search",
      description:
        "A semantic book recommendation system leveraging LLMs and vector search. Features similarity search, zero-shot classification, and a Gradio dashboard for seamless interaction.",
      tech: ["LLMs", "Vector Search", "LangChain", "Gradio"],
      github: "https://github.com/YSChandu/semantic_book_recommender",
      demo: "https://chandu24-yt-semantic-book-recommendation.hf.space/",
      icon: Brain,
    },
    {
      title: "NewsPulse",
      description:
        "Web app for news sentiment analysis and topic extraction. Summarizes news, analyzes sentiment, and converts results to Hindi audio using gTTS.",
      tech: ["Streamlit", "FastAPI", "NLP", "gTTS"],
      github: "https://github.com/YSChandu/FastAPI_User_interface",
      demo: "https://huggingface.co/spaces/Chandu24-YT/NewsPulse",
      icon: Globe,
    },
    {
      title: "MindCare – AI-Driven Mental Health Wellness Platform",
      description:
        "AI-powered platform for mental health. Features chatbot, diagnosis quizzes, and curated wellness resources like yoga and music therapy.",
      tech: ["Django", "NLP", "OpenAI", "Deep Learning"],
      github:
        "https://github.com/YSChandu/MindCare-AI-Driven-Mental-Health-Wellness-Platform",
      demo: "https://mindcare-ai-driven-mental-health.onrender.com/",
      icon: Heart,
    },
    {
      title: "Brain Tumor Classification",
      description:
        "Automated MRI brain tumor classification using ResNet, DenseNet, PCA, and Random Forest for robust results.",
      tech: ["ResNet", "DenseNet", "PCA", "Random Forest"],
      github: "",
      demo: "",
      icon: Brain,
    },
    {
      title: "Gesture-Controlled Virtual Mouse",
      description:
        "Virtual mouse using OpenCV and MediaPipe. Control cursor and system actions with hand gestures.",
      tech: ["OpenCV", "MediaPipe", "pyautogui"],
      github: "",
      demo: "",
      icon: Hand,
    },
    {
      title: "Portfolio Analytics Dashboard",
      description:
        "A dummy analytics dashboard for visualizing portfolio performance, asset allocation, and risk metrics with interactive charts.",
      tech: ["React", "Chart.js", "TailwindCSS"],
      github: "",
      demo: "",
      icon: Sparkles,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Header Section (like Experience) */}
      <div className="text-center mb-20 relative">
        <div className="inline-block relative">
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 mb-6 tracking-tight p-10">
            Projects
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-transparent to-gray-200 blur-2xl opacity-30 -z-10" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          A showcase of my work across AI, web, and data projects—each blending
          creativity, engineering, and innovation.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gray-400" />
          <Sparkles className="w-6 h-6 text-gray-500" />
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gray-400" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{
              animationDelay: `${idx * 100}ms`,
            }}
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px]">
              <div className="w-full h-full bg-white rounded-2xl" />
            </div>

            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            {/* Card content */}
            <div className="relative z-10 p-8 h-full flex flex-col">
              {/* Header with icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg" />
                  <div className="relative p-3 rounded-xl flex items-center justify-center">
                    {/* Icon with color and white background, tilt on hover */}
                    <project.icon
                      className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-12"
                      style={{
                        color: project.title.toLowerCase().includes("news")
                          ? "#8d5524"
                          : project.title.toLowerCase().includes("mindcare")
                          ? "#b71c1c"
                          : project.title.toLowerCase().includes("brain")
                          ? "#1565c0"
                          : project.title.toLowerCase().includes("gesture")
                          ? "#6d4c41"
                          : project.title.toLowerCase().includes("portfolio")
                          ? "#4e342e"
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
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-black transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 group-hover:text-gray-700 transition-colors duration-300">
                {project.description}
              </p>

              {/* Tech stack with colors */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => {
                  let colorClass = "bg-gray-100 text-gray-700";
                  if (tech.toLowerCase().includes("react"))
                    colorClass = "bg-cyan-100 text-cyan-800";
                  else if (tech.toLowerCase().includes("chart"))
                    colorClass = "bg-yellow-100 text-yellow-800";
                  else if (tech.toLowerCase().includes("tailwind"))
                    colorClass = "bg-blue-100 text-blue-800";
                  else if (tech.toLowerCase().includes("streamlit"))
                    colorClass = "bg-red-100 text-red-800";
                  else if (tech.toLowerCase().includes("fastapi"))
                    colorClass = "bg-green-50 text-green-700";
                  else if (tech.toLowerCase().includes("nlp"))
                    colorClass = "bg-purple-100 text-purple-800";
                  else if (tech.toLowerCase().includes("gtts"))
                    colorClass = "bg-orange-100 text-orange-800";
                  else if (tech.toLowerCase().includes("django"))
                    colorClass = "bg-green-200 text-green-900";
                  else if (tech.toLowerCase().includes("openai"))
                    colorClass = "bg-blue-50 text-blue-700";
                  else if (tech.toLowerCase().includes("deep"))
                    colorClass = "bg-indigo-100 text-indigo-800";
                  else if (tech.toLowerCase().includes("resnet"))
                    colorClass = "bg-blue-200 text-blue-900";
                  else if (tech.toLowerCase().includes("densenet"))
                    colorClass = "bg-green-100 text-green-800";
                  else if (tech.toLowerCase().includes("pca"))
                    colorClass = "bg-yellow-200 text-yellow-900";
                  else if (tech.toLowerCase().includes("random"))
                    colorClass = "bg-pink-100 text-pink-800";
                  else if (tech.toLowerCase().includes("opencv"))
                    colorClass = "bg-blue-100 text-blue-800";
                  else if (tech.toLowerCase().includes("mediapipe"))
                    colorClass = "bg-orange-100 text-orange-800";
                  else if (tech.toLowerCase().includes("pyautogui"))
                    colorClass = "bg-gray-200 text-gray-800";
                  else if (tech.toLowerCase().includes("llms"))
                    colorClass = "bg-yellow-100 text-yellow-900";
                  else if (tech.toLowerCase().includes("vector"))
                    colorClass = "bg-green-100 text-green-800";
                  else if (tech.toLowerCase().includes("langchain"))
                    colorClass = "bg-purple-100 text-purple-900";
                  else if (tech.toLowerCase().includes("gradio"))
                    colorClass = "bg-pink-100 text-pink-800";
                  return (
                    <span
                      key={i}
                      className={`border border-gray-200 text-xs px-3 py-1.5 rounded-full font-medium ${colorClass}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              {/* Animated progress bar */}
              <div className="relative h-1 bg-gray-100 rounded-full mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-200 hover:scale-110 hover:shadow-md"
                  >
                    <Github className="w-5 h-5 text-gray-600 group-hover/btn:text-gray-900 transition-colors duration-200" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-200" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-200 hover:scale-110 hover:shadow-md"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover/btn:text-gray-900 transition-colors duration-200" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-200" />
                  </a>
                )}
              </div>
            </div>

            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
