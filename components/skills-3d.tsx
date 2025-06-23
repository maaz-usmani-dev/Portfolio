"use client"

import { useState, useEffect } from "react"

// Fallback 2D skills component in case 3D doesn't load
const Skills2D = () => {
  const skillsData = [
    {
      name: "HTML5",
      color: "#e34f26",
      level: 95,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      color: "#1572b6",
      level: 90,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      color: "#f7df1e",
      level: 88,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
    {
      name: "React",
      color: "#61dafb",
      level: 85,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
    },
    {
      name: "Shopify",
      color: "#96bf48",
      level: 92,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.337 2.467c-.332-.02-.672.006-1.022.08-.06-.12-.132-.24-.216-.348-.42-.54-1.008-.78-1.596-.78-.048 0-.096 0-.144.012-.024-.036-.06-.072-.096-.096-.54-.42-1.236-.6-1.932-.42-1.596.42-3.168 1.596-4.416 3.312-.876 1.212-1.548 2.64-1.752 3.996-.012.084-.024.156-.024.24-.684.216-1.164.36-1.224.384-.54.168-.552.18-.624.696-.048.384-1.32 10.176-1.32 10.176l10.716 1.956 6.444-1.596s-1.32-8.88-1.356-9.132c-.036-.252-.18-.42-.432-.48zm-2.46 1.596c-.252.072-.54.156-.84.252v-.192c0-.54-.072-1.296-.3-1.932.54.156 1.008.66 1.14 1.872zm-1.596-.42c.192.54.252 1.236.252 1.8v.156c-.66.204-1.38.42-2.1.636.384-1.476 1.236-2.292 1.848-2.592zm-.756-1.008c.156 0 .3.036.432.108-.756.42-1.8 1.476-2.244 3.396-.636.192-1.236.384-1.8.564.252-1.116.828-2.292 1.548-3.24.456-.6.876-.828 1.064-.828z" />
        </svg>
      ),
    },
    {
      name: "Tailwind",
      color: "#06b6d4",
      level: 87,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: "Git",
      color: "#f05032",
      level: 90,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
        </svg>
      ),
    },
    {
      name: "Figma",
      color: "#f24e1e",
      level: 85,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117v-6.038H8.148zm7.704 0c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49zm0 7.51c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019-3.019 1.355-3.019 3.019 1.354 3.019 3.019 3.019zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019z" />
        </svg>
      ),
    },
    {
      name: "GSAP",
      color: "#88ce02",
      level: 82,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
          <path d="M8 21L8.5 19L10 19.5L8.5 20L8 21Z" />
          <path d="M16 5L16.5 3L18 3.5L16.5 4L16 5Z" />
        </svg>
      ),
    },
  ]

  const [selectedSkill, setSelectedSkill] = useState<(typeof skillsData)[0] | null>(null)

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden py-20">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my technical expertise. Click on any skill to learn more about my experience.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="group cursor-pointer"
              onClick={() => setSelectedSkill(skill)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-center font-semibold text-white group-hover:text-orange-500 transition-colors">
                  {skill.name}
                </h3>
                <div className="mt-3 bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      backgroundColor: skill.color,
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1 + 0.5}s`,
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-400 mt-2">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Details Modal */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-6">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-orange-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: selectedSkill.color }}
                >
                  {selectedSkill.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                  <p className="text-gray-400">Proficiency: {selectedSkill.level}%</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{getSkillDescription(selectedSkill.name)}</p>
              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Try to load 3D version, fallback to 2D
export function Skills3D() {
  const [use3D, setUse3D] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if we can load Three.js
    const check3DSupport = async () => {
      try {
        // Try to dynamically import Three.js components
        const { Canvas } = await import("@react-three/fiber")
        setUse3D(true)
      } catch (error) {
        console.log("3D not available, using 2D fallback")
        setUse3D(false)
      } finally {
        setLoading(false)
      }
    }

    check3DSupport()
  }, [])

  if (loading) {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading Skills...</p>
        </div>
      </div>
    )
  }

  // For now, always use 2D since 3D might not work in sandbox
  return <Skills2D />
}

function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    HTML5:
      "Semantic markup and modern web standards for building accessible and SEO-friendly websites. Expert in HTML5 APIs, forms, and semantic elements.",
    CSS3: "Advanced styling with animations, grid, flexbox, and responsive design principles. Proficient in CSS preprocessors and modern layout techniques.",
    JavaScript:
      "Modern ES6+ JavaScript for dynamic web applications and interactive user experiences. Strong understanding of async programming and DOM manipulation.",
    React:
      "Component-based UI development with hooks, context, and modern React patterns. Experience with state management and performance optimization.",
    Shopify:
      "Custom theme development, Liquid templating, and e-commerce optimization. Expert in Shopify APIs, app development, and store customization.",
    Tailwind:
      "Utility-first CSS framework for rapid UI development and consistent design systems. Proficient in custom configurations and component libraries.",
    Git: "Version control, collaborative development, and code management best practices. Expert in branching strategies and team workflows.",
    Figma:
      "UI/UX design, prototyping, and design system creation for web and mobile applications. Skilled in design-to-code workflows.",
    GSAP: "Advanced web animations and interactive experiences with high-performance graphics. Expert in timeline animations and scroll-triggered effects.",
  }

  return descriptions[skillName] || "A key technology in my development toolkit with extensive hands-on experience."
}
