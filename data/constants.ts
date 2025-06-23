"use client"

import { Mail, Github, Linkedin, Zap, Palette, Rocket } from "lucide-react"

export const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"] as const

export const FLOATING_CODE_SNIPPETS = [
  '<div className="hero">',
  'const dev = "Maaz";',
  "{% liquid %}",
  "useEffect(() => {",
  ".hero { flex }",
  "{{ product }}",
] as const

export const ABOUT_FEATURES = [
  { icon: Zap, text: "Performance Optimization Expert" },
  { icon: Palette, text: "UI/UX Focused Development" },
  { icon: Rocket, text: "Modern Web Technologies" },
] as const

export const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    info: "maaziftikhar1510@gmail.com",
    href: "mailto:maaziftikhar1510@gmail.com",
  },
  {
    icon: Github,
    title: "GitHub",
    info: "maaz-usmani-dev",
    href: "https://github.com/maaz-usmani-dev",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    info: "usmani-maaz",
    href: "https://www.linkedin.com/in/usmani-maaz/",
  },
] as const

export const HERO_NAME_CHARS = [
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
] as const
