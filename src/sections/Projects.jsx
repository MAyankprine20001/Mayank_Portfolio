import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  // Row 1
  {
    title: "FENFO",
    subtitle: "Fence Estimation and Business Management",
    description:
      "Contractors draw fence layouts on a canvas over Google Maps and the app calculates material quantities, dimensions, and pricing from the drawing. Built quotation, invoice, and order management. Integrated Google Calendar so customers can book appointments directly, with full dynamic handling for availability, event creation, and updates. Payments via Stripe and PayPal subscriptions.",
    image: "/projects/fenfo.png",
    tags: ["React", "Node.js", "Google Maps API", "Canvas", "Google Calendar", "Stripe", "PayPal", "JWT"],
    link: "https://fenfo.com",
  },
  {
    title: "Complex.so",
    subtitle: "Task Management and Collaboration Platform",
    description:
      "A platform for small teams to manage tasks, write docs, store files, and communicate in one place. Built the entire backend using Koa.js, PostgreSQL, and Redis. Managed state on the frontend with Vue and Vuex. Integrated Google Calendar so tasks with due dates show up in the user calendar and stay in sync. Deployed using Docker.",
    image: "/projects/complexso.png",
    tags: ["Vue.js", "Vuex", "Koa.js", "PostgreSQL", "Redis", "Google Calendar", "Docker"],
    link: "https://complex.so",
  },
  {
    title: "Mifab",
    subtitle: "Commercial Plumbing Products Platform",
    description:
      "Built a product catalog and ordering platform for a commercial plumbing manufacturer. The admin controls everything dynamically — products, categories, pricing, content, and translations. Integrated Google Translate so the platform works across multiple languages. State managed with Redux Toolkit throughout.",
    image: "/projects/mifab.png",
    tags: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Google Translate"],
    link: "http://mifab.ourappdemo.com",
  },
  // Row 2
  {
    title: "The Dry Factory",
    subtitle: "E-Commerce Platform",
    description:
      "Online store for a freeze-dried fruit brand. Built the full shopping experience including product pages, cart, and checkout with Razorpay. Also built the admin panel for managing orders, inventory, and products.",
    image: "/projects/thedryfactory.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Razorpay", "JWT", "Vercel"],
    link: "#",
  },
  {
    title: "Medentum",
    subtitle: "Health Platform Admin and Cross-Platform App",
    description:
      "Built the admin dashboard and cross-platform app for a health diagnostics company. The admin handles patient records, device data, and provider management. Also worked on the mobile side for at-home health monitoring.",
    image: "/projects/meduntum.png",
    tags: ["React", "Node.js", "Cross-Platform", "REST API", "PostgreSQL"],
    link: "https://medentum.com",
  },
  {
    title: "Seven Dates",
    subtitle: "Dating App",
    description:
      "Fixed production crashes and stabilized the backend on Supabase. Added Google AdSense and Stripe subscriptions using Supabase Edge Functions. Built the matching logic for connecting users and added in-app chat.",
    image: "/projects/Seven_dates.png",
    tags: ["Supabase", "Edge Functions", "Stripe", "Google AdSense", "TypeScript"],
    link: "#",
  },
  {
    title: "Zembora",
    subtitle: "Ride and Rescue App",
    description:
      "Backend for a ride booking and vehicle rescue app. Supports standard rides and SOS rescue requests that go straight to the admin. Driver location is tracked live and users can share a tracking link with others.",
    image: "/projects/zembora.png",
    tags: ["Node.js", "Express", "Firebase", "Redis", "PostgreSQL"],
    link: "#",
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
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
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
      {/* Overlay - only external link */}
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