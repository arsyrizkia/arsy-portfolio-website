export interface ProjectSection {
  title: string;
  description: string;
  highlights?: string[];
  image?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  cardTitle?: string; // Short title for card display on homepage
  description: string;
  image: string;
  heroImage?: string;
  gallery?: string[];
  sections?: ProjectSection[];
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
    slug: "rehat",
    title: "Rehat - Rest Easy Manage Smarter",
    cardTitle: "Rest Easy Manage Smarter",
    description: "A full-stack property management system featuring KMM mobile apps for iOS and Android, real-time chat, automated billing, booking management, WhatsApp Business API integration, and AI agent automation with n8n for seamless tenant-landlord communication.",
    image: "/projects/rehat.png",
    heroImage: "/projects/rehat-hero.png",
    gallery: [
      "/projects/rehat/6.png",
      "/projects/rehat/Slice 4.png",
      "/projects/rehat/Slice 5.png",
    ],
    sections: [
      {
        title: "The Problem",
        description: "Managing a kost (Indonesian boarding house) is chaos. Property owners juggle WhatsApp messages from dozens of tenants, manually track payments in spreadsheets, and spend hours answering the same questions about room availability. I wanted to build something that would let them rest easy — hence the name Rehat.",
        image: "/projects/rehat/Slice 1.png"
      },
      {
        title: "Building the Mobile Apps",
        description: "I chose Kotlin Multiplatform to build native apps for both iOS and Android from a single codebase. The business logic — handling bookings, payments, chat — lives in shared Kotlin code. But the UI? That's where each platform shines. SwiftUI for iOS users who expect that Apple polish. Jetpack Compose for Android's Material Design. One brain, two beautiful faces.",
        image: "/projects/rehat/8.png"
      },
      {
        title: "The Backend That Powers It All",
        description: "Behind every smooth swipe is a Node.js backend talking to Supabase. PostgreSQL handles the data, real-time subscriptions keep everyone in sync, and MinIO stores all those room photos. When a tenant pays their rent through Xendit, the system automatically updates their status, generates an invoice, and notifies the landlord. No spreadsheets. No manual tracking.",
        image: "/projects/rehat/Slice 3.png"
      },
      {
        title: "Teaching an AI to Be a Property Manager",
        description: "Here's where it gets interesting. I built an AI agent using n8n and Gemini that actually understands property management. When someone messages asking 'ada kamar kosong?' (any rooms available?), the AI doesn't just reply — it checks the backend, looks at current availability, pulls pricing info, and responds with accurate, real-time data. It's like having a 24/7 assistant who never sleeps.",
        image: "/projects/rehat/ai-agent.png"
      },
      {
        title: "Meeting Tenants Where They Are",
        description: "In Indonesia, everyone uses WhatsApp. So instead of forcing users to download another app, I integrated WhatsApp Business API directly. Billing reminders go out automatically. Booking confirmations arrive instantly. And that AI agent? It lives right in WhatsApp, answering questions before the property owner even wakes up. I even built a mini app for the WhatsApp Business signup flow.",
        image: "/projects/rehat/whatsapp.png"
      }
    ],
    tags: ["LLM", "Kotlin", "Swift", "Node.js", "Supabase", "WhatsApp API", "n8n"],
    liveUrl: "https://rehat.co",
  },
  {
    id: 2,
    slug: "spatia",
    title: "Spatia - Design your space effortlessly",
    cardTitle: "Design your space effortlessly",
    description: "An iOS/iPadOS room design app that lets users scan spaces with LiDAR and plan layouts in interactive 2D and 3D views. Built with RoomPlan, SceneKit, and SpriteKit, featuring smart furniture arrangement with simulated annealing.",
    image: "/projects/spatia/cover card.png",
    heroImage: "/projects/spatia/heroproject.png",
    gallery: [
      "/projects/spatia/roomplaningui.png",
      "/projects/spatia/buy product.png",
    ],
    sections: [
      {
        title: "The Problem",
        description: "\"What if creating a comfortable, functional space was as easy as scanning a room and dragging furniture into place?\" As urbanization accelerates, millions face the challenge of designing functional living spaces within smaller, multifunctional areas. Spatia simplifies this by offering an iOS and iPadOS solution that helps users visualize and plan their room layouts effortlessly.",
        image: "/projects/spatia/onboadringui.png"
      },
      {
        title: "Wearing Two Hats",
        description: "As both iOS Developer and Product Manager, I ran the entire project. Created detailed PRD, roadmap timeline, and night report system using FigJam Board. Managed the App Store submission process while simultaneously building the core features. Being an architecture graduate helped me understand what users actually need when designing their spaces.",
        image: "/projects/spatia/techstackand overview project.png"
      },
      {
        title: "Capturing Spaces with LiDAR",
        description: "Measuring rooms manually is tedious and often leads to inaccuracies. I implemented Apple's RoomPlan framework for seamless scanning, converting spatial data into 2D and 3D layouts with SwiftData. For devices without LiDAR support, I built room templates as a fallback — ensuring everyone can use the app regardless of their hardware.",
        image: "/projects/spatia/scanningroomusingroomplan.png"
      },
      {
        title: "Interactive 2D and 3D Planning",
        description: "Built drag-and-drop, resizing, and rotating functionality with SpriteKit for 2D views. Then extended the same logic to SceneKit for 3D manipulation with seamless transitions between views. Added real-time measurements, snapping guides for precise placement, and even integrated simulated annealing for smart furniture arrangement suggestions.",
        image: "/projects/spatia/inteactive 2d and 3d.png"
      },
      {
        title: "The Results",
        description: "First month on the App Store: 1.28K impressions, 24.6% conversion rate, 178 downloads, and 20 reviews. \"Developing Spatia was a journey of integrating advanced 2D and 3D tools with seamless space planning — and my architecture background helped me understand what users actually need when designing their spaces.\"",
        image: "/projects/spatia/appstorematric.png"
      }
    ],
    tags: ["AI", "Simulated Annealing", "SwiftUI", "RoomPlan", "SceneKit", "SpriteKit", "LiDAR", "Product Management"],
    liveUrl: "https://apps.apple.com/us/app/spatia/id6720712186",
  },
  {
    id: 3,
    slug: "moleculemastery",
    title: "Molecule Mastery - Learning Chemistry More Fun",
    cardTitle: "Learning Chemistry More Fun",
    description: "An AR-powered educational game that helps 10th-grade students understand covalent bonding through interactive molecular visualization. Features real-time AR bonding, 1v1 multiplayer battles, and gamified learning with RealityKit.",
    image: "/projects/moleculemastery/card cover.png",
    heroImage: "/projects/moleculemastery/hero.png",
    gallery: [
      "/projects/moleculemastery/ameplay on iphone 3.png",
      "/projects/moleculemastery/gamplay on iphone 2.png",
      "/projects/moleculemastery/gameplay screenshoot on iphone.png",
    ],
    sections: [
      {
        title: "The Problem",
        description: "Chemistry is often considered difficult, especially when learning abstract topics like covalent bonding. Many 10th graders struggle to visualize how atoms share electrons and form bonds. Static textbook visuals fail to engage or accurately depict the complexity of molecular interactions. I wanted to create a tool that simplifies these ideas using a gamified approach through AR.",
        image: "/projects/moleculemastery/cardofmolecule.png"
      },
      {
        title: "Wearing Multiple Hats",
        description: "As iOS Developer, Game Designer, and Brand Designer, I wore many hats on this project. I conducted user research with students and educators to understand challenges in learning chemistry. Defined a brand identity that balanced playfulness with educational credibility. Led the creation of the Game Design Document (GDD) detailing core gameplay mechanics, rules, and educational objectives.",
        image: "/projects/moleculemastery/team-graphic-designed.png"
      },
      {
        title: "Dynamic AR Molecular Bonding",
        description: "I developed the AR game logic for creating and visualizing molecular bonds in real time using RealityKit. Programmatically generated atoms, electron orbitals, and bond types (single, double, triple) with scientifically accurate animations for electron movement and bond formation. The result is an immersive experience where students can literally see chemistry come to life.",
        image: "/projects/moleculemastery/mockupipad.png"
      },
      {
        title: "Gamified Learning Experience",
        description: "Turning a complex subject like chemistry into something approachable while maintaining scientific accuracy was the challenge. I designed a 1v1 multiplayer battle system that balances competition with learning. Authored a comprehensive GDD detailing scoring mechanics and progression systems. Collaborated with developers and designers to ensure seamless implementation of game features.",
        image: "/projects/moleculemastery/gameplay screenshoot on iphone.png"
      },
      {
        title: "The Results",
        description: "First month on the App Store: 2.3K impressions, 4.8% conversion rate, and 75 downloads. \"Developing Molecule Mastery was a journey of blending advanced AR technology with educational gamification. Creating dynamic, real-time molecular simulations that simplify complex chemistry concepts was both challenging and fulfilling.\"",
        image: "/projects/moleculemastery/appstoremetric.png"
      }
    ],
    tags: ["AR", "RealityKit", "SwiftUI", "Game Design", "EdTech", "Product Management"],
    liveUrl: "https://apps.apple.com/us/app/moleculemastery/id6627338118",
  },
  {
    id: 4,
    slug: "posegraphy",
    title: "Posegraphy - Pose with Confidence",
    cardTitle: "Pose with Confidence",
    description: "An iOS app that helps users overcome camera awkwardness with on-screen pose guides. Features AI-generated pose outlines, Firebase integration, and launched on the App Store with 1.5K impressions.",
    image: "/projects/posegraphy.jpg",
    heroImage: "/projects/posegraphy-hero.png",
    gallery: [],
    sections: [
      {
        title: "The Awkward Truth",
        description: "88% of young adults use social media, but here's the thing — most of them freeze up the moment a camera points at them. 'How do I pose?' 'Where do I put my hands?' We've all been there. I wanted to build something that turns that awkward moment into confidence.",
        image: "/projects/posegraphy/awkward-pose.avif"
      },
      {
        title: "The Solution",
        description: "Posegraphy shows translucent pose outlines right on your camera screen. Just align yourself with the guide, and you've got the perfect pose. No more overthinking, no more awkward trial-and-error. Just strike the pose and shoot.",
        image: "/projects/posegraphy/outlining proccess.png"
      },
      {
        title: "Building 200+ Poses with AI",
        description: "Here's where it gets creative. I generated over 200 unique poses using MidJourney, then transformed each one into clean outline styles that work as camera overlays. Every pose was carefully prompted, refined, and uploaded to Firebase with metadata for dynamic delivery.",
        image: "/projects/posegraphy/midjourney creation proccess.png"
      },
      {
        title: "SwiftUI + Firebase",
        description: "I built the entire frontend in SwiftUI using MVVM architecture — clean, responsive, and native iOS feel. Firebase Firestore handles the pose library, fetching guides dynamically so users always get fresh content. I also implemented image caching to keep everything snappy.",
        image: "/projects/posegraphy/screenshot UI.png"
      },
      {
        title: "From Notion to App Store",
        description: "As Product Manager, I ran the entire show — backlog in Notion, sprint planning, coordinating with designers, and navigating Apple's App Store submission process. The result? ~1.5K impressions, 7.7% conversion rate, and 71 downloads in the first release. Not bad for a camera app that teaches you how to pose.",
        image: "/projects/posegraphy/appstore matric.png"
      }
    ],
    tags: ["SwiftUI", "Firebase", "MVVM", "MidJourney", "Product Management"],
    liveUrl: "https://apps.apple.com/us/app/posegraphy/id6504901912",
  },
  {
    id: 5,
    slug: "dilatih",
    title: "Dilatih.co - Customer Web Apps",
    cardTitle: "Customer Web Apps for Training Platform",
    description: "A customer-facing web platform for an adaptive, case study-based training provider. Features automated certification system, blog platform using Next.js with Notion database, and UX design focused on accessibility for both tech-savvy and older users.",
    image: "/projects/dilatih/cover image.png",
    heroImage: "/projects/dilatih/hero.webp",
    gallery: [
      "/projects/dilatih/mockup laptop 2 on landing page.png",
      "/projects/dilatih/mockup 3 laptop on courses list.png",
      "/projects/dilatih/courses page mockup laptop.png",
    ],
    sections: [
      {
        title: "Project Overview",
        description: "Dilatih.co is a provider of adaptive and case study-based training materials for individuals and businesses. As Co-Founder, I led the development of the customer web app that offers training and certification preparation across various fields including IT, management, and finance. With a focus on practical application, the platform helps customers apply concepts learned in real-world situations.",
        image: "/projects/dilatih/mockup1.png"
      },
      {
        title: "The Challenge",
        description: "Building for diverse users was the core challenge. We needed intuitive UX for older users who may not be tech-savvy, robust data management for tracking study progress and certifications, security for sensitive user data, seamless integration with existing systems, and scalability for growing user base. Each required careful consideration in the design process.",
        image: "/projects/dilatih/indonesian laid off.png"
      },
      {
        title: "Design Thinking Approach",
        description: "I implemented a Design Thinking framework for the entire project. Started with quantitative research — 1,351 survey responses in a month from events we held. Discovered 65% were university students aged 21-25, with 25% being over 30. Conducted competitive analysis against Revolution Mind, Ebizmark, Dibimbing, and Belajarlagi. Found gaps: no interest-picking options during onboarding, limited progress tracking, and manual systems.",
        image: "/projects/dilatih/strategies to keep our job.png"
      },
      {
        title: "Building the Platform",
        description: "Created detailed user flows and information architecture. Went through paper sketches, wireframes with variations, to final designs. Built an automated certification system that generates and delivers certificates without manual intervention. Also developed a separate blog system called 'Jendela Wawasan' (Window of Insights) — a Next.js blog platform using Notion API as the database, allowing non-technical team members to publish articles about finance, data science, and training directly from Notion.",
        image: "/projects/dilatih/Screenshot 2025-12-12 at 16.45.09.png"
      },
      {
        title: "Takeaways",
        description: "This project taught me the power of design thinking frameworks and sprint design. I learned to create better visuals following material design guidelines while building a component library. The experience of conducting user research with 1,351 respondents and translating insights into product decisions was invaluable for my growth as both a designer and developer."
      }
    ],
    tags: ["Next.js", "Notion API", "UX Design", "Design Thinking", "Automation"],
    liveUrl: "https://dilatih.co",
  },
  {
    id: 6,
    slug: "mealminder",
    title: "MealMinder - Healthy Habits Through Gamification",
    cardTitle: "Healthy Habits Through Gamification",
    description: "A gamified iOS app helping GERD patients build healthy eating habits through an interactive pet duck character. Features mission system, Rive animations, and engaging feedback mechanisms to encourage consistent dietary management.",
    image: "/projects/mealminder/cover card.png",
    heroImage: "/projects/mealminder/hero.png",
    gallery: [
      "/projects/mealminder/gamified 1.png",
      "/projects/mealminder/gamified 3.png",
    ],
    sections: [
      {
        title: "The Problem",
        description: "60% of GERD patients struggle to follow dietary recommendations due to forgetfulness or lack of motivation. This often leads to worsening symptoms and a lower quality of life. Building habits is hard enough for healthy people — imagine how challenging it is for someone who needs to consistently manage their diet just to avoid discomfort or pain.",
        image: "/projects/mealminder/project overview.png"
      },
      {
        title: "Challenge-Based Approach",
        description: "The development began with identifying key challenges faced by individuals with GERD regarding their dietary habits. Through interviews, surveys, and collaborative brainstorming sessions, we gathered insights and developed a deep understanding of the problem. This informed the ideation and development phases, ensuring the final product closely aligned with the needs of our target audience.",
        image: "/projects/mealminder/more screenshoot.png"
      },
      {
        title: "Gamified Solution",
        description: "MealMinder features a character pet (duck) that users must take care of by completing missions related to healthy eating habits. If users fail to complete these missions, the character shows signs of distress, creating an engaging and interactive way to encourage users to follow their dietary recommendations. The mission system guides users through their dietary goals with immediate feedback.",
        image: "/projects/mealminder/gamified 2.png"
      },
      {
        title: "My Role",
        description: "I was responsible for creating the user flow in Figma, developing a mid-fidelity prototype to hand over to other designers, animating the duck character using Rive animation, and coding the mission page flow. This included implementing the timer, duck animation states, and success/fail logic that drives the gamification experience.",
        image: "/projects/mealminder/gerd animation.png"
      },
      {
        title: "Final Product",
        description: "MealMinder isn't just an app — it's a health companion that empowers GERD patients to live better lives. With every reminder, every mission completed, and every healthier meal, users are not only helping their pet duck thrive but also taking control of their health. The app is available on TestFlight with the source code publicly available on GitHub."
      }
    ],
    tags: ["SwiftUI", "Rive Animation", "Gamification", "HealthTech", "UX Design"],
    githubUrl: "https://github.com/ZINO-ADA/MealMinder",
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Founder & Full-Stack Developer",
    company: "Rehat.co",
    period: "Dec 2024 - Present",
    description: "Building an integrated property management app (Swift & Kotlin) to streamline boarding house operations in Indonesia through intelligent automation and WhatsApp integration.",
    technologies: ["Swift", "Kotlin", "Node.js", "Supabase", "WhatsApp API", "n8n"],
  },
  {
    id: 2,
    role: "Learning Facilitator",
    company: "PT Media Edutama Indonesia",
    period: "Jan 2025 - Present",
    description: "Business Intelligence Facilitator teaching Power BI to companies like PT Komatsu and PT Pemuka Sakti. Python programming trainer for PT Bank Sulselbar. Delivered AI-Powered Work Optimization workshops for Pertamina, Bank Indonesia, PT Pengelolaan Aset, and BNSP data analysis certifications.",
    technologies: ["Power BI", "Python", "AI Automation", "Data Analysis"],
  },
  {
    id: 3,
    role: "IT Product Manager",
    company: "BondLink Finance",
    period: "Jan 2025 - Jul 2025",
    description: "Led product planning for USDb protocol DeFi investment solutions. Defined per-epoch APY smart-contract requirements and coordinated cross-functional teams to deliver real-time yield dashboards, boosting pilot-user satisfaction by 30%.",
    technologies: ["Web3", "Smart Contracts", "DeFi", "API Integration"],
  },
  {
    id: 4,
    role: "Product Manager",
    company: "Good Games Guild",
    period: "Aug 2023 - Jan 2025",
    description: "Revamped GGPlay.id v2 NFT gaming marketplace within 2-month deadline. Led ticketing system development generating ~2 billion IDR revenue in first month while ensuring seamless Web3 gaming ecosystem integration.",
    technologies: ["Web3", "NFT", "Blockchain", "Product Strategy"],
  },
  {
    id: 5,
    role: "Head of Creative",
    company: "Good Games Guild",
    period: "Jul 2021 - Aug 2023",
    description: "Established brand identity for 5+ Web3 gaming products. Increased customer engagement by 30% through marketing campaigns. Assisted CEO in $3.5M fundraising by developing comprehensive pitch deck.",
    technologies: ["Photoshop", "Illustrator", "Premiere Pro", "Brand Design"],
  },
  {
    id: 6,
    role: "Developer Intern",
    company: "Apple Developer Academy",
    period: "Feb 2024 - Dec 2024",
    description: "Created MealMinder, Posegraphy, MoleculeMaster, and Spatia iOS apps. Led as Product Manager and iOS Developer, achieving combined 5K+ App Store impressions and 300+ downloads across all projects.",
    technologies: ["SwiftUI", "RealityKit", "RoomPlan", "SpriteKit", "SceneKit"],
  },
  {
    id: 7,
    role: "Co-Founder & Product Manager",
    company: "Dilatih.co",
    period: "Feb 2022 - Present",
    description: "Acquired 25+ B2B clients and 35,000+ users for training platform. Secured BUMN (Pelindo) collaboration driving 20% monthly revenue increase. Built automated certification system and blog platform using Next.js with Notion API.",
    technologies: ["Next.js", "Notion API", "UX Design", "Product Strategy"],
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
    url: "mailto:arsyrizkiaruslan@gmail.com",
    icon: "mail",
  },
];

export const skills = {
  "Product & Management": ["SDLC", "Agile", "Jira", "Trello", "Stakeholder Management", "Product Development"],
  "Programming": ["Swift", "Kotlin", "JavaScript", "React", "Python", "HTML/CSS", "Node.js", "SQL", "PostgreSQL"],
  "Frameworks": ["SwiftUI", "Jetpack Compose", "RealityKit", "RoomPlan", "SceneKit", "SpriteKit", "Web3"],
  "Tools": ["Firebase", "Supabase", "Xendit", "MinIO", "Postman", "Docker", "Git", "n8n", "Power BI"],
  "Design": ["Figma", "Photoshop", "Illustrator", "Premiere Pro", "UX/UI Design"],
};
