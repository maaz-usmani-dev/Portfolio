"use client"

import { useEffect } from "react"
import { Rocket, Heart } from "lucide-react"
import { FLOATING_CODE_SNIPPETS, HERO_NAME_CHARS } from "@/data/constants"
import { useMobile } from "@/hooks/use-mobile"

export function HeroSection() {
  const isMobile = useMobile()

  useEffect(() => {
    const chars = document.querySelectorAll(".hero-name .char")
    chars.forEach((char, index) => {
      const element = char as HTMLElement
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = `all 0.5s ease ${index * 0.02}s`

      setTimeout(() => {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }, 50)
    })
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.1)_0%,transparent_70%)]" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 15 : 30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse parallax"
            data-speed={0.2}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random()}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FLOATING_CODE_SNIPPETS.slice(0, isMobile ? 4 : 6).map((code, index) => (
          <div
            key={index}
            className="absolute bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-orange-400 font-mono text-xs sm:text-sm backdrop-blur-sm animate-float parallax"
            data-speed={0.1}
            style={{
              left: `${15 + ((index * 15) % 70)}%`,
              top: `${20 + ((index * 10) % 60)}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + (index % 2)}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="text-center z-10 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="hero-name text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          {HERO_NAME_CHARS.map((char, index) => (
            <span
              key={index}
              className={`char inline-block bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer ${
                char === " " ? "w-4 sm:w-6" : ""
              }`}
              style={{
                whiteSpace: char === " " ? "normal" : "nowrap",
                wordBreak: "keep-all",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
          Shopify Theme Developer & Frontend Engineer
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full font-semibold hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 transition-all transform hover:scale-105 text-sm sm:text-base min-h-[48px] flex items-center justify-center group"
          >
            <span className="group-hover:mr-2 transition-all">View My Work</span>
            <Rocket className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 sm:px-8 py-3 border-2 border-orange-500 rounded-full font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:border-transparent transition-all transform hover:scale-105 text-sm sm:text-base min-h-[48px] flex items-center justify-center group"
          >
            <span className="group-hover:mr-2 transition-all">Get In Touch</span>
            <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
