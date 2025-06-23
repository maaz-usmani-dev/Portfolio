"use client"

import { CONTACT_INFO } from "@/data/constants"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ContactSection() {
  useIntersectionObserver()

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-5">
          Let's Work Together
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 animate-on-scroll opacity-0 transform translate-y-3 max-w-2xl mx-auto leading-relaxed">
          Ready to bring your Shopify store to life? Let's create something amazing together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 stagger-children">
          {CONTACT_INFO.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                className="stagger-item bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 sm:p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all group transform hover:scale-105 backdrop-blur-sm opacity-0 translate-y-5 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center relative overflow-hidden"
                rel="noreferrer"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-orange-500/40 group-hover:to-red-500/40 group-hover:scale-105 transition-all flex-shrink-0 relative z-10">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-200 relative z-10">
                  {contact.title}
                </h3>
                <p
                  className="text-orange-400 group-hover:text-orange-300 transition-colors duration-200 text-sm sm:text-base relative z-10"
                  style={{
                    wordBreak: "keep-all",
                    overflowWrap: "anywhere",
                    hyphens: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {contact.info}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
