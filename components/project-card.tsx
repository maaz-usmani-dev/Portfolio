"use client"

import { useState } from "react"
import { Star, Eye, TrendingUp, ExternalLink, Code } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="project-card bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      <div className="h-32 sm:h-36 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        <span className="text-lg sm:text-xl font-bold relative z-10 text-white group-hover:scale-105 transition-transform duration-300">
          {project.title.split(" ")[0]}
        </span>

        <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Eye className="w-3 h-3 text-white" />
          </div>
          {project.featured && (
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-3">
          <span className="inline-block px-2 py-1 bg-orange-500/10 text-orange-400 rounded-md text-xs font-medium border border-orange-500/20">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-3 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {(project.hasLiveDemo || project.hasCode) && (
          <div className="flex gap-2">
            {project.hasLiveDemo && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-center py-2 px-3 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                rel="noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.hasCode && (
              <a
                href={project.codeUrl}
                target="_blank"
                className="flex-1 border border-orange-500 text-center py-2 px-3 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:border-transparent transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                rel="noreferrer"
              >
                <Code className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
