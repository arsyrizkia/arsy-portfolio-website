export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Rehat Property Management",
    description: "Full-stack property management system with KMM mobile app for iOS and Android. Features real-time chat, booking system, and WhatsApp Business API integration.",
    image: "/projects/rehat.png",
    tags: ["Kotlin", "Swift", "Node.js", "Supabase", "WhatsApp API"],
    liveUrl: "https://rehatkost.com",
    githubUrl: "https://github.com/arsyrizkia/RehatPropertyManagement",
  },
  {
    id: 2,
    title: "WhatsApp Signup Mini App",
    description: "Next.js web application for WhatsApp Business API embedded signup flow. Enables seamless onboarding for property managers.",
    image: "/projects/wa-signup.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    githubUrl: "https://github.com/arsyrizkia/rehat-whatsapp-signup",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features smooth scroll animations and responsive design.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/arsyrizkia/portfolio",
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building end-to-end mobile and web applications for clients. Specializing in Kotlin Multiplatform for cross-platform mobile development and Node.js for backend services.",
    technologies: ["Kotlin", "Swift", "Node.js", "React", "Supabase", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Mobile Developer",
    company: "Personal Projects",
    period: "2022 - 2023",
    description: "Developed multiple mobile applications using native technologies. Focused on learning iOS development with SwiftUI and Android development with Jetpack Compose.",
    technologies: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Firebase"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/arsyrizkia",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/arsyrizkia",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:arsy.rizkia@gmail.com",
    icon: "mail",
  },
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SwiftUI", "Jetpack Compose"],
  backend: ["Node.js", "Express", "PostgreSQL", "MySQL", "Redis", "Socket.IO"],
  mobile: ["Kotlin Multiplatform", "Swift", "iOS", "Android"],
  tools: ["Git", "Docker", "Supabase", "Firebase", "MinIO", "Xendit"],
};
