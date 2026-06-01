const experiences = [
  {
    period: "Feb 2024 — Present",
    role: "Software Engineer",
    company: "EITBIZ – Extrovert Information Technology",
    location: "New Delhi, IN",
    description:
      "I work on 5–6 client projects at EITBIZ, covering different industries. My work goes from writing UI components and wiring up APIs to setting up payments, auth, and fixing things when they break in production.",
    technologies: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Socket.IO",
      "Redis",
      "Docker",
      "Stripe",
      "Razorpay",
      "JWT",
      "Supabase",
      "Firebase",
    ],
    current: true,
    highlights: [
      <>Refactored React.js rendering and data-fetching for a high-traffic infinite-scroll feed; <strong>load time dropped from 600ms to under 20ms with a 20% lift in user engagement</strong>.</>,
      <>Built a shared component library in React.js, Next.js, Tailwind CSS, and SCSS used across multiple client projects; <strong>cut per-project frontend setup time and removed duplicate UI code</strong>.</>,
      <>Integrated Stripe, Razorpay, PayPal, Google Pay, and Apple Pay into checkout flows across 5+ apps; <strong>zero critical billing incidents</strong> after go-live.</>,
      <>Wrote Node.js/Express APIs and designed schemas in PostgreSQL and MongoDB; used compound indexes, aggregation pipelines, and PostGIS to <strong>speed up location-based queries</strong>.</>,
      <>Added Redis caching and rate limiting to reduce DB pressure under traffic spikes; containerized services with Docker and automated deploys through GitHub Actions.</>,
      <>Built Socket.IO real-time features and implemented JWT, OAuth 2.0, and Firebase Auth with role-based access control across production apps.</>,
      <>Debugged API failures, slow queries, and frontend regressions in live projects; kept deployments stable with no major incidents.</>,
    ],
  },
  {
    period: "Jun 2023 — Feb 2024",
    role: "Software Developer",
    company: "FABTRIP",
    location: "New Delhi, IN",
    description:
      "Built a custom travel booking platform and AI trip planner from scratch, focusing on highly responsive user interfaces and performance optimization across the checkout funnel.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux Toolkit",
      "REST APIs",
    ],
    current: false,
    highlights: [
      <>Built the customer-facing travel booking platform from scratch; shipped destination discovery, curated trip listings, and the full checkout flow to production.</>,
      <>Owned the AI trip planner UI and destination pages end-to-end; introduced reusable responsive components that <strong>cut build time for new pages significantly</strong>.</>,
      <>Identified and fixed performance bottlenecks and JS bugs across the booking funnel; <strong>load reliability improved and drop-off at checkout reduced</strong>.</>,
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Where I've worked, what I've built, and the tech I've used to get it done.
          </p>
        </div>

        {/* Single Experience - Centered */}
        <div className="max-w-3xl mx-auto animate-fade-in animation-delay-300">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Top dot */}
              <div className="flex justify-center mb-6">
                <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-background relative">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
              </div>

              <div className="glass p-8 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                {/* Period & Current badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/15 text-primary border border-primary/30">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-primary/80 font-medium text-sm">
                  {exp.company}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {exp.location}
                </p>

                <p className="text-sm text-muted-foreground mb-5">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};