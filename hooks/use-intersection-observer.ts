"use client"

import { useEffect, useRef } from "react"

export function useIntersectionObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement

            if (element.classList.contains("animate-on-scroll")) {
              element.style.opacity = "1"
              element.style.transform = "translateY(0)"
            }

            if (element.classList.contains("stagger-children")) {
              const children = element.querySelectorAll(".stagger-item")
              children.forEach((child, index) => {
                const childEl = child as HTMLElement
                setTimeout(() => {
                  childEl.style.opacity = "1"
                  childEl.style.transform = "translateY(0)"
                }, index * 50)
              })
            }

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
    )

    observerRef.current = observer

    // Observe elements
    document.querySelectorAll(".animate-on-scroll, .stagger-children").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return observerRef
}
