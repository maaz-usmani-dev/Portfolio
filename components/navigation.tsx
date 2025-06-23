"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_ITEMS } from "@/data/constants"
import { useMobile } from "@/hooks/use-mobile"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement
    if (target.getAttribute("href")?.startsWith("#")) {
      e.preventDefault()
      const targetId = target.getAttribute("href")?.substring(1)
      if (targetId) {
        const element = document.getElementById(targetId)
        if (element) {
          const offsetTop = element.offsetTop - (isMobile ? 60 : 80)
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
          setMobileMenuOpen(false)
        }
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-orange-500/20 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Maaz
        </div>

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="hover:text-orange-500 transition-colors duration-200 relative group py-2 text-sm lg:text-base"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/20 border border-orange-500/30 hover:bg-orange-500/30 transition-all duration-200"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-orange-500" /> : <Menu className="w-5 h-5 text-orange-500" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-gray-900/90 backdrop-blur-md border-t border-orange-500/20">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="block py-3 px-4 text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
