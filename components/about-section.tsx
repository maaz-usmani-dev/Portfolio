"use client"

import { User } from "lucide-react"
import { ABOUT_FEATURES } from "@/data/constants"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function AboutSection() {
  useIntersectionObserver()

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-5">
          About Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-on-scroll opacity-0 transform translate-y-5 order-2 lg:order-1">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate Shopify Theme Developer and Frontend Engineer creating stunning, high-performance
              e-commerce solutions. I specialize in building custom Shopify themes that drive conversions and provide
              exceptional user experiences.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              My expertise spans modern frontend technologies including React, JavaScript, HTML5, CSS3, and Shopify
              Liquid. I'm dedicated to writing clean, maintainable code and staying current with web development trends.
            </p>
            <div className="space-y-3 sm:space-y-4 stagger-children">
              {ABOUT_FEATURES.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="stagger-item flex items-center gap-3 group opacity-0 transform translate-y-3 hover:bg-orange-500/5 p-3 rounded-lg transition-all cursor-pointer"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-red-500/30 group-hover:scale-105 transition-all duration-200 flex-shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                    </div>
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-200 text-sm sm:text-base">
                      {item.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-center animate-on-scroll opacity-0 transform scale-95 order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group cursor-pointer">
              <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 animate-spin-slow group-hover:animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-900 m-0.5 sm:m-1"></div>
              </div>
              <div className="absolute inset-6 sm:inset-8 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-orange-500/40 flex items-center justify-center group-hover:border-orange-500/60 transition-all">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center animate-pulse group-hover:scale-105 transition-transform">
                  <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
