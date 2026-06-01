import { ArrowUpRight } from "lucide-react";

const personalProjects = [
  {
    title: "The Dry Factory",
    subtitle: "E-Commerce Store",
    badge: "SOLO DEVELOPER",
    iconColor: "bg-emerald-500",
    description:
      "Online store for a freeze-dried fruit brand. Customers can browse products, add to cart, and pay via Razorpay. Built a separate admin panel for managing products, stock, and orders. Also set up Google Analytics and GTM to track how users land on the site.",
    image: "/projects/thedryfactory.png",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    link: "#",
  }
];

const professionalProjects = [
  {
    title: "FENFO",
    subtitle: "Fence Estimation & Business Management",
    badge: "SOLO DEVELOPER",
    iconColor: "bg-blue-500",
    description:
      "Contractors draw fence layouts directly on Google Maps and the app automatically calculates dimensions, materials, and cost from the geometry in real time. Integrated Sentry for real-time error tracking and performance monitoring across the frontend and backend to catch and resolve issues faster. Built the billing systems using Stripe and PayPal.",
    image: "/projects/fenfo.png",
    tags: ["React", "Node.js", "Google Maps", "Stripe", "PayPal", "Sentry"],
    link: "https://fenfo.com",
  },
  {
    title: "Complex.so",
    subtitle: "Team Task & Collaboration Tool",
    badge: "SOLO DEVELOPER",
    iconColor: "bg-amber-500",
    description:
      "A workspace where small teams can manage tasks, write docs, store files, and chat — all in one place. I built the backend with Koa.js, PostgreSQL, and Redis, handled state with Vue and Vuex, and connected Google Calendar so deadlines show up there automatically.",
    image: "/projects/complexso.png",
    tags: ["Vue.js", "Koa.js", "PostgreSQL", "Redis"],
    link: "https://complex.so",
  },
  {
    title: "Mifab",
    subtitle: "Commercial Plumbing Products Catalog",
    badge: "SOLO DEVELOPER",
    iconColor: "bg-cyan-500",
    description:
      "Product catalog and ordering site for a plumbing manufacturer. Everything — products, categories, pricing, and content — is managed by the admin without touching code. Also added Google Translate so it works in multiple languages.",
    image: "/projects/mifab.png",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    link: "http://mifab.ourappdemo.com",
  },
  {
    title: "Medentum",
    subtitle: "Health Platform — Admin & Mobile App",
    badge: "TEAM PROJECT",
    iconColor: "bg-teal-500",
    description:
      "Built the admin panel and cross-platform app for a health diagnostics company. Admin side handles patient records, connected devices, and provider accounts. Also worked on the mobile app for home-based health monitoring.",
    image: "/projects/meduntum.png",
    tags: ["React", "Node.js", "Cross-Platform", "PostgreSQL"],
    link: "https://medentum.com",
  },
  {
    title: "Seven Dates",
    subtitle: "Dating App",
    badge: "TEAM PROJECT",
    iconColor: "bg-pink-500",
    description:
      "Joined to fix crashes and get the app stable. Once that was done, added Google AdSense and Stripe subscriptions through Supabase Edge Functions, built the user matching logic, and added in-app chat.",
    image: "/projects/Seven_dates.png",
    tags: ["Supabase", "TypeScript", "Stripe"],
    link: null,
  },
  {
    title: "Zembora",
    subtitle: "Ride & Rescue — Admin Panel & Cross-Platform App",
    badge: "SOLO DEVELOPER",
    iconColor: "bg-purple-500",
    description:
      "Backend for a ride and rescue platform. Regular ride bookings and SOS vehicle rescue both run through the same system — rescues get flagged to admin immediately. Driver location updates live and riders can share a tracking link.",
    image: "/projects/zembora.png",
    tags: ["Node.js", "Express", "Firebase", "PostgreSQL"],
    link: null,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Professional Projects Section */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block animate-fade-in">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in animation-delay-100">
              Professional Projects
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent animate-fade-in animation-delay-200" />
            <p className="text-muted-foreground mt-6 max-w-xl animate-fade-in animation-delay-200">
              Standalone apps built from scratch — shipped end-to-end for clients and businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((project, idx) => (
              <SmallProjectCard key={project.title} project={project} delay={(idx + 1) * 100} />
            ))}
          </div>
        </div>

        {/* Personal Projects Section */}
        <div>
          <div className="mb-12">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block animate-fade-in">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in animation-delay-100">
              Personal Projects
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent animate-fade-in animation-delay-200" />
            <p className="text-muted-foreground mt-6 animate-fade-in animation-delay-200">
              Projects I built for my own use or to explore new technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, idx) => (
              <SmallProjectCard key={project.title} project={project} delay={(idx + 1) * 100} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const SmallProjectCard = ({ project, delay }) => (
  <div 
    className="group rounded-3xl bg-[#13151A] border border-white/5 p-6 flex flex-col hover:bg-[#1A1C23] transition-colors duration-300 animate-fade-in relative"
    style={{ animationDelay: `${delay}ms` }}
  >
    {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10 bg-black/40 p-2.5 rounded-full backdrop-blur-md"
        >
            <ArrowUpRight className="w-4 h-4" />
        </a>
    )}

    {/* Image (Compact) */}
    {project.image && (
      <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden border border-white/5 bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    )}

    {/* Header: Icon (if no image) */}
    {!project.image && (
      <div className="flex justify-between items-start mb-6 pr-10">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
          <div className={`w-3 h-3 rounded-full ${project.iconColor || 'bg-primary'}`} />
        </div>
      </div>
    )}
    
    <div className="mb-4 flex items-center gap-3">
        {project.image && (
          <div className={`w-2.5 h-2.5 rounded-full ${project.iconColor || 'bg-primary'}`} />
        )}
        <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-bold tracking-wider uppercase text-white/60">
          {project.badge || "SOLO DEVELOPER"}
        </div>
    </div>

    {/* Text */}
    <div className="mb-8 flex-1">
      <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map((tag, idx) => (
        <span 
          key={idx}
          className="px-3 py-1.5 rounded-full bg-white/5 text-white/60 text-xs border border-white/5 font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);