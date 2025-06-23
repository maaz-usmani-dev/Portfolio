"use client"

import { useState, useEffect, useMemo } from "react"
import { ShoppingBag, Code } from "lucide-react"
import { shopifyProjects, frontendProjects } from "@/data/projects"
import { ProjectCard } from "./project-card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("shopify")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useIntersectionObserver()

  const categories = useMemo(() => {
    const currentProjects = activeTab === "shopify" ? shopifyProjects : frontendProjects
    const cats = ["all", ...new Set(currentProjects.map((p) => p.category))]
    return cats
  }, [activeTab])

  const filteredProjects = useMemo(() => {
    const currentProjects = activeTab === "shopify" ? shopifyProjects : frontendProjects
    if (selectedCategory === "all") return currentProjects
    return currentProjects.filter((p) => p.category === selectedCategory)
  }, [activeTab, selectedCategory])

  useEffect(() => {
    const resetProjectAnimations = () => {
      const staggerItems = document.querySelectorAll(".projects-grid .stagger-item")
      staggerItems.forEach((item, index) => {
        const element = item as HTMLElement
        element.style.opacity = "0"
        element.style.transform = "translateY(15px)"

        setTimeout(() => {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }, index * 50)
      })
    }

    const timer = setTimeout(resetProjectAnimations, 25)
    return () => clearTimeout(timer)
  }, [activeTab, selectedCategory])

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-5">
          My Projects
        </h2>

        <div className="flex justify-center mb-6 sm:mb-8 animate-on-scroll opacity-0 transform translate-y-3">
          <div className="flex bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-full p-1 border border-orange-500/30 backdrop-blur-sm w-full max-w-md sm:max-w-none sm:w-auto">
            <button
              onClick={() => {
                setActiveTab("shopify")
                setSelectedCategory("all")
              }}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px] group ${
                activeTab === "shopify"
                  ? "bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-orange-500/10"
              }`}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Shopify Projects</span>
              <span className="sm:hidden">Shopify</span>
              <span className="ml-1 text-xs bg-orange-500/20 px-1.5 py-0.5 rounded-full">{shopifyProjects.length}</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("frontend")
                setSelectedCategory("all")
              }}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px] group ${
                activeTab === "frontend"
                  ? "bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-orange-500/10"
              }`}
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Frontend Projects</span>
              <span className="sm:hidden">Frontend</span>
              <span className="ml-1 text-xs bg-orange-500/20 px-1.5 py-0.5 rounded-full">
                {frontendProjects.length}
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-8 sm:mb-10 animate-on-scroll opacity-0 transform translate-y-3">
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500/30 to-red-500/30 text-orange-400 border border-orange-500/50"
                    : "bg-gray-800/40 text-gray-400 border border-gray-700/50 hover:text-orange-400 hover:border-orange-500/30"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="stagger-item opacity-0 transform translate-y-3 transition-all duration-300 ease-out"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Showing {filteredProjects.length} of {(activeTab === "shopify" ? shopifyProjects : frontendProjects).length}{" "}
            projects
          </p>
        </div>
      </div>
    </section>
  )
}
