"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  Zap,
  Palette,
  Rocket,
  Mail,
  Github,
  Linkedin,
  ShoppingBag,
  Code,
  User,
  ExternalLink,
  Menu,
  X,
  Star,
  Heart,
  Eye,
  TrendingUp,
} from "lucide-react";

// Lazy load Skills3D component for better performance
const Skills3D = dynamic(
  () => import("./skills-3d").then((mod) => ({ default: mod.Skills3D })),
  {
    loading: () => (
      <div className="w-full h-64 bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-gray-400 text-sm">Loading Skills...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);

// Project data
const shopifyProjects = [
  {
    id: 1,
    title: "Eizer Ecommerce",
    description:
      "A fully custom Shopify theme built from scratch featuring advanced product filtering, wishlist functionality, and seamless user experience with modern design patterns.",
    technologies: [
      "Shopify Liquid",
      "Tailwind CSS",
      "Search & Discovery App",
      "JavaScript",
    ],
    liveUrl: "https://eizer-1.myshopify.com",
    codeUrl: "https://github.com/maaz-usmani-dev/EizerTheme",
    hasLiveDemo: true,
    hasCode: true,
    category: "Theme Development",
    featured: true,
  },
  {
    id: 2,
    title: "Platform Migration Solution",
    description:
      "Successfully migrated complete e-commerce data including products, customers, and order history from legacy platform to Shopify with zero data loss.",
    technologies: [
      "Matrixify App",
      "Data Migration",
      "Shopify Admin API",
      "CSV Processing",
    ],
    liveUrl: "#",
    codeUrl: "#",
    hasLiveDemo: false,
    hasCode: false,
    category: "Data Migration",
    featured: false,
  },
  {
    id: 3,
    title: "Multi-Platform Reviews System",
    description:
      "Implemented comprehensive product review systems using multiple review platforms, enabling verified customer reviews, photo uploads, and advanced review management.",
    technologies: [
      "Doran App",
      "Okendo App",
      "Judge.me App",
      "Shopify Dawn Theme",
      "Liquid Templates",
    ],
    liveUrl: "#",
    codeUrl: "#",
    hasLiveDemo: false,
    hasCode: false,
    category: "App Integration",
    featured: true,
  },
  {
    id: 4,
    title: "Checkout Upsell Extension",
    description:
      "Developed a smart checkout extension that recommends similar products during the checkout process, increasing average order value by 25%.",
    technologies: [
      "Shopify Liquid",
      "React.js",
      "GraphQL",
      "Checkout Extensions API",
    ],
    liveUrl: "#",
    codeUrl: "https://github.com/maaz-usmani-dev/checkout-upsell",
    hasLiveDemo: false,
    hasCode: true,
    category: "Conversion Optimization",
    featured: false,
  },
  {
    id: 5,
    title: "Dynamic Mega Menu",
    description:
      "Created a fully dynamic and customizable mega menu system for Dawn theme with backend-driven content management and mobile-responsive design.",
    technologies: [
      "Shopify Dawn Theme",
      "Liquid Templates",
      "Theme Customizer",
      "JavaScript",
    ],
    liveUrl: "#",
    codeUrl: "#",
    hasLiveDemo: false,
    hasCode: false,
    category: "Navigation",
    featured: false,
  },
  {
    id: 6,
    title: "Email Marketing Automation",
    description:
      "Built comprehensive email marketing campaigns with automated flows, customer segmentation, and A/B testing to boost customer retention and sales.",
    technologies: [
      "Klaviyo App",
      "Mailchimp App",
      "Shopify Flow",
      "Email Templates",
      "Customer Analytics",
    ],
    liveUrl: "#",
    codeUrl: "#",
    hasLiveDemo: false,
    hasCode: false,
    category: "Marketing Automation",
    featured: true,
  },
  {
    id: 7,
    title: "Product Bundles & Upsells",
    description:
      "Implemented intelligent product bundling system with dynamic pricing, cross-sell recommendations, and discount management to increase average order value.",
    technologies: [
      "Bundler App",
      "Honey Comb Upsell App",
      "Shopify Scripts",
      "Liquid Logic",
    ],
    liveUrl: "#",
    codeUrl: "#",
    hasLiveDemo: false,
    hasCode: false,
    category: "Sales Optimization",
    featured: true,
  },
  {
    id: 8,
    title: "Advanced Product Options",
    description:
      "Created flexible product customization system allowing customers to personalize products with various options, add-ons, and conditional pricing.",
    technologies: [
      "Easify Product Options App",
      "Custom JavaScript",
      "Shopify Variants API",
      "Dynamic Pricing",
    ],
    liveUrl: "#",
    codeUrl: "#",
    hasLiveDemo: false,
    hasCode: false,
    category: "Product Customization",
    featured: false,
  },
  {
    id: 9,
    title: "Wix to Shopify Migration",
    description:
      "Complete migration of products, customer data, and reviews from Wix platform to Shopify, preserving SEO rankings and implementing enhanced review system with Judge.me integration.",
    technologies: [
      "Matrixify App",
      "Judge.me App",
      "Wix Export Tools",
      "SEO Migration",
      "Review Migration",
    ],
    liveUrl: "#",
    codeUrl: "#",
    hasLiveDemo: false,
    hasCode: false,
    category: "Platform Migration",
    featured: true,
  },
];

const frontendProjects = [
  {
    id: 10,
    title: "Netflix UI Clone",
    description:
      "A pixel-perfect, responsive recreation of Netflix's user interface showcasing modern CSS techniques and interactive components.",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox/Grid"],
    liveUrl: "https://netflix-ui-clone-nu-ashy.vercel.app/",
    codeUrl: "https://github.com/maaz-usmani-dev/Netflix-UI-Clone",
    hasLiveDemo: true,
    hasCode: true,
    category: "UI Clone",
    featured: true,
  },
  {
    id: 11,
    title: "Noble Hawk Campaign",
    description:
      "A sophisticated multi-page responsive website featuring smooth GSAP animations, modern React architecture, and optimized performance.",
    technologies: ["React.js", "React Router DOM", "Tailwind CSS", "GSAP"],
    liveUrl: "https://nhc-gamma.vercel.app/",
    codeUrl: "https://github.com/maaz-usmani-dev/NHC",
    hasLiveDemo: true,
    hasCode: true,
    category: "Web Application",
    featured: true,
  },
];

// Constants
const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];
const FLOATING_CODE_SNIPPETS = [
  '<div className="hero">',
  'const dev = "Maaz";',
  "{% liquid %}",
  "useEffect(() => {",
  ".hero { flex }",
  "{{ product }}",
];

const HERO_NAME_CHARS = [
  "M",
  "u",
  "h",
  "a",
  "m",
  "m",
  "a",
  "d",
  " ",
  "M",
  "a",
  "a",
  "z",
  " ",
  "U",
  "s",
  "m",
  "a",
  "n",
  "i",
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("shopify");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Memoized data
  const aboutFeatures = useMemo(
    () => [
      {
        icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
        text: "Performance Optimization Expert",
      },
      {
        icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
        text: "UI/UX Focused Development",
      },
      {
        icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />,
        text: "Modern Web Technologies",
      },
    ],
    []
  );

  const contactInfo = useMemo(
    () => [
      {
        icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: "Email",
        info: "maaziftikhar1510@gmail.com",
        href: "mailto:maaziftikhar1510@gmail.com",
      },
      {
        icon: <Github className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: "GitHub",
        info: "maaz-usmani-dev",
        href: "https://github.com/maaz-usmani-dev",
      },
      {
        icon: <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: "LinkedIn",
        info: "usmani-maaz",
        href: "https://www.linkedin.com/in/usmani-maaz/",
      },
    ],
    []
  );

  const categories = useMemo(() => {
    const currentProjects =
      activeTab === "shopify" ? shopifyProjects : frontendProjects;
    const cats = ["all", ...new Set(currentProjects.map((p) => p.category))];
    return cats;
  }, [activeTab]);

  const filteredProjects = useMemo(() => {
    const currentProjects =
      activeTab === "shopify" ? shopifyProjects : frontendProjects;
    if (selectedCategory === "all") return currentProjects;
    return currentProjects.filter((p) => p.category === selectedCategory);
  }, [activeTab, selectedCategory]);

  // Mobile detection
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Scroll handler
  const handleScroll = useCallback(() => {
    if (!isMobile) {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax");

      requestAnimationFrame(() => {
        parallaxElements.forEach((element) => {
          const el = element as HTMLElement;
          const speed = Number.parseFloat(el.dataset.speed || "0.2");
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });
    }
  }, [isMobile]);

  // Navigation handler
  const handleNavClick = useCallback(
    (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = target.getAttribute("href")?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            const offsetTop = element.offsetTop - (isMobile ? 60 : 80);
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
            setMobileMenuOpen(false);
          }
        }
      }
    },
    [isMobile]
  );

  useEffect(() => {
    setIsLoaded(true);
    checkMobile();

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("resize", checkMobile, { passive: true });
    document.addEventListener("click", handleNavClick, { passive: false });
    window.addEventListener("scroll", throttledScroll, { passive: true });

    // Initialize animations
    const initAnimations = () => {
      const chars = document.querySelectorAll(".hero-name .char");
      chars.forEach((char, index) => {
        const element = char as HTMLElement;
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = `all 0.5s ease ${index * 0.02}s`;

        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, 50);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;

              if (element.classList.contains("animate-on-scroll")) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
              }

              if (element.classList.contains("stagger-children")) {
                const children = element.querySelectorAll(".stagger-item");
                children.forEach((child, index) => {
                  const childEl = child as HTMLElement;
                  setTimeout(() => {
                    childEl.style.opacity = "1";
                    childEl.style.transform = "translateY(0)";
                  }, index * 50);
                });
              }

              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );

      document
        .querySelectorAll(".animate-on-scroll, .stagger-children")
        .forEach((el) => {
          observer.observe(el);
        });
    };

    const animationTimer = setTimeout(initAnimations, 50);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("click", handleNavClick);
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(animationTimer);
    };
  }, [checkMobile, handleNavClick, handleScroll]);

  // Reset project animations when tab changes
  useEffect(() => {
    const resetProjectAnimations = () => {
      const staggerItems = document.querySelectorAll(
        ".projects-grid .stagger-item"
      );
      staggerItems.forEach((item, index) => {
        const element = item as HTMLElement;
        element.style.opacity = "0";
        element.style.transform = "translateY(15px)";

        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 50);
      });
    };

    const timer = setTimeout(resetProjectAnimations, 25);
    return () => clearTimeout(timer);
  }, [activeTab, selectedCategory]);

  // Project Card Component
  const ProjectCard = useCallback(
    ({
      project,
    }: {
      project: (typeof shopifyProjects)[0] | (typeof frontendProjects)[0];
    }) => (
      <div
        className="project-card bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group backdrop-blur-sm w-full h-[400px]"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {project.featured && (
          <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}

        <div className="h-32 sm:h-36 bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center relative">
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

        <div className="p-4 sm:p-5 h-[calc(100%-128px)] flex flex-col justify-between">
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
                <div className="relative flex-1 group">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-center py-2 px-3 rounded-lg text-sm font-semibold hover:from-orange-700 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-white"
                    rel="noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  {project.id === 1 && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black border border-orange-400 text-orange-300 text-xs px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                      Use Password: <span className="font-semibold">lakreu</span>
                    </div>
                  )}
                </div>
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
    ),
    [hoveredProject]
  );

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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
                className={`hover:text-orange-500 transition-colors duration-200 relative py-2 text-sm lg:text-base ${
                  activeTab === item.toLowerCase() ? "" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/20 border border-orange-500/30 hover:bg-orange-500/30 transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-orange-500" />
            ) : (
              <Menu className="w-5 h-5 text-orange-500" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-4 py-4 bg-gray-900/90 backdrop-blur-md border-t border-orange-500/20">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
          {FLOATING_CODE_SNIPPETS.slice(0, isMobile ? 4 : 6).map(
            (code, index) => {
              // Calculate positions to avoid overlap with name
              const nameWidth = 300; // Approximate width of the name in pixels
              const nameHeight = 100; // Approximate height of the name in pixels
              const nameLeft = 50 - nameWidth / 2; // Centered horizontally
              const nameTop = 50 - nameHeight / 2; // Centered vertically

              let left = 25 + ((index * 20) % 60);
              let top = 30 + ((index * 15) % 50);

              // Adjust position to avoid overlapping with name
              if (
                left > nameLeft &&
                left < nameLeft + nameWidth &&
                top > nameTop &&
                top < nameTop + nameHeight
              ) {
                left = left > 50 ? 10 : 90; // Move to left or right edge
                top = top > 50 ? 10 : 90; // Move to top or bottom edge
              }

              return (
                <div
                  key={index}
                  className="absolute bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-orange-400 font-mono text-xs sm:text-sm backdrop-blur-sm animate-float parallax"
                  data-speed={0.1}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${3 + (index % 2)}s`,
                  }}
                >
                  {code}
                </div>
              );
            }
          )}
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
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full font-semibold hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 transition-all transform hover:scale-105 text-sm sm:text-base min-h-[48px] flex items-center justify-center group"
            >
              <span className="group-hover:mr-2 transition-all">View My Work</span>
              <Rocket className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 border-2 border-orange-500 rounded-full font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:border-transparent transition-all transform hover:scale-105 text-sm sm:text-base min-h-[48px] flex items-center justify-center group"
            >
              <span className="group-hover:mr-2 transition-all">Get In Touch</span>
              <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-5">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-on-scroll opacity-0 transform translate-y-5 order-2 lg:order-1">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a passionate Shopify Theme Developer and Frontend Engineer
                creating stunning, high-performance e-commerce solutions. I
                specialize in building custom Shopify themes that drive
                conversions and provide exceptional user experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                My expertise spans modern frontend technologies including React,
                JavaScript, HTML5, CSS3, and Shopify Liquid. I'm dedicated to
                writing clean, maintainable code and staying current with web
                development trends.
              </p>
              <div className="space-y-3 sm:space-y-4 stagger-children">
                {aboutFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="stagger-item flex items-center gap-3 group opacity-0 transform translate-y-3 hover:bg-orange-500/5 p-3 rounded-lg transition-all cursor-pointer"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-red-500/30 group-hover:scale-105 transition-all duration-200 flex-shrink-0">
                      <span className="text-orange-500">{item.icon}</span>
                    </div>
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-200 text-sm sm:text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
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

      {/* Skills Section */}
      <section id="skills">
        <Skills3D />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-5">
            My Projects
          </h2>

          <div className="flex justify-center mb-6 sm:mb-8 animate-on-scroll opacity-0 transform translate-y-3">
            <div className="flex bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-full p-1 border border-orange-500/30 backdrop-blur-sm w-full max-w-md sm:max-w-none sm:w-auto">
              <button
                onClick={() => {
                  setActiveTab("shopify");
                  setSelectedCategory("all");
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
                <span className="ml-1 text-xs bg-orange-500/20 px-1.5 py-0.5 rounded-full">
                  {shopifyProjects.length}
                </span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("frontend");
                  setSelectedCategory("all");
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
              Showing {filteredProjects.length} of{" "}
              {
                (activeTab === "shopify" ? shopifyProjects : frontendProjects)
                  .length
              }{" "}
              projects
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-5">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 animate-on-scroll opacity-0 transform translate-y-3 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your Shopify store to life? Let's create something
            amazing together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 stagger-children">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                className="stagger-item bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 sm:p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all group transform hover:scale-105 backdrop-blur-sm opacity-0 translate-y-5 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center relative overflow-hidden"
                rel="noreferrer"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-orange-500/40 group-hover:to-red-500/40 group-hover:scale-105 transition-all flex-shrink-0 relative z-10">
                  <span className="text-orange-500">{contact.icon}</span>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}