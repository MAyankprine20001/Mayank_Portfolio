import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  // Row 1
  {
    title: "FENFO",
    subtitle: "Fence Estimation & Business Management",
    description:
      "Contractors draw fence layouts directly on Google Maps and the app figures out materials, dimensions, and cost from the drawing. I built the quoting, invoicing, and order side too. Added Google Calendar so clients can book site visits, and payments run through Stripe and PayPal.",
    image: "/projects/fenfo.png",
    tags: ["React", "Node.js", "Google Maps", "Google Calendar", "Stripe", "PayPal", "JWT"],
    link: "https://fenfo.com",
  },
  {
    title: "Complex.so",
    subtitle: "Team Task & Collaboration Tool",
    description:
      "A workspace where small teams can manage tasks, write docs, store files, and chat — all in one place. I built the backend with Koa.js, PostgreSQL, and Redis, handled state with Vue and Vuex, and connected Google Calendar so deadlines show up there automatically.",
    image: "/projects/complexso.png",
    tags: ["Vue.js", "Vuex", "Koa.js", "PostgreSQL", "Redis", "Google Calendar", "Docker"],
    link: "https://complex.so",
  },
  {
    title: "Mifab",
    subtitle: "Commercial Plumbing Products Catalog",
    description:
      "Product catalog and ordering site for a plumbing manufacturer. Everything — products, categories, pricing, and content — is managed by the admin without touching code. Also added Google Translate so it works in multiple languages.",
    image: "/projects/mifab.png",
    tags: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Google Translate"],
    link: "http://mifab.ourappdemo.com",
  },
  // Row 2
  {
    title: "The Dry Factory",
    subtitle: "E-Commerce Store",
    description:
      "Online store for a freeze-dried fruit brand. Customers can browse products, add to cart, and pay via Razorpay. Built a separate admin panel for managing products, stock, and orders. Also set up Google Analytics and GTM to track how users land on the site, which products they view, and how often items get added to cart.",
    image: "/projects/thedryfactory.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Razorpay", "Google Analytics", "GTM", "JWT", "Vercel"],
    link: "#",
  },
  {
    title: "Medentum",
    subtitle: "Health Platform — Admin & Mobile App",
    description:
      "Built the admin panel and cross-platform app for a health diagnostics company. Admin side handles patient records, connected devices, and provider accounts. Also worked on the mobile app for home-based health monitoring.",
    image: "/projects/meduntum.png",
    tags: ["React", "Node.js", "Cross-Platform", "REST API", "PostgreSQL"],
    link: "https://medentum.com",
  },
  {
    title: "Seven Dates",
    subtitle: "Dating App",
    description:
      "Joined to fix crashes and get the app stable. Once that was done, added Google AdSense and Stripe subscriptions through Supabase Edge Functions, built the user matching logic, and added in-app chat.",
    image: "/projects/Seven_dates.png",
    tags: ["Supabase", "Edge Functions", "Stripe", "Google AdSense", "TypeScript"],
    link: null,
  },
  {
    title: "Zembora",
    subtitle: "Ride & Rescue — Admin Panel & Cross-Platform App",
    description:
      "Backend for a ride and rescue platform. Regular ride bookings and SOS vehicle rescue both run through the same system — rescues get flagged to admin immediately. Driver location updates live and riders can share a tracking link.",
    image: "/projects/zembora.png",
    tags: ["Node.js", "Express", "Firebase", "Redis", "PostgreSQL"],
    link: null,
  },
];

export const Projects = () => {

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A mix of client work and personal projects. Each one taught me something different.
          </p>
        </div>

        {/* All Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} delay={(idx + 1) * 100} />
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, delay }) => (
  <div
    className="group glass rounded-2xl overflow-hidden animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
      {/* Overlay - only show if link exists */}
      {project.link && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      <div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-primary/70 mt-0.5">{project.subtitle}</p>
      </div>
      <p className="text-muted-foreground text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIdx) => (
          <span
            key={tagIdx}
            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);