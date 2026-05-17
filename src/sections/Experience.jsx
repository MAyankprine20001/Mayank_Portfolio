const experiences = [
  {
    period: "Feb 2024 — Present",
    role: "Software Engineer",
    company: "EITBIZ – Extrovert Information Technology",
    location: "New Delhi, IN",
    description:
      "Building full-stack web applications for multiple client projects — from responsive dashboards and e-commerce flows to real-time platforms and ride-tracking systems. Handling everything from UI architecture and REST API design to payment integrations, authentication, and production deployments.",
    technologies: [
      "React.js",
      "Next.js",
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
      "Developed reusable UI components across multiple client projects",
      "Integrated Stripe, Razorpay, Google Pay, Apple Pay & PayPal",
      "Built real-time features using Socket.IO and Redis",
      "Designed backend architecture with Node.js, Express & PostgreSQL",
      "Handled production debugging, API optimization & deployments",
    ],
  },
  {
    period: "2023 — Feb 2024",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Delhi, IN",
    description:
      "Delivered custom web solutions for clients before joining EITBIZ. Built and deployed full-stack applications handling everything from UI design to backend architecture and third-party integrations.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    current: false,
    highlights: [
      "Built and shipped client projects end-to-end",
      "Managed client communication and project timelines",
      "Handled design, development, and deployment independently",
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
            A timeline of my professional growth — from freelance projects to
            building real-world production applications across multiple
            industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    {/* Period & Location */}
                    <div
                      className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary/15 text-primary border border-primary/30">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary/80 font-medium text-sm">
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {exp.location}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul
                      className={`mt-4 space-y-1.5 ${idx % 2 === 0 ? "md:text-right" : ""
                        }`}
                    >
                      {exp.highlights.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                          style={{
                            flexDirection:
                              idx % 2 === 0 ? "row-reverse" : "row",
                          }}
                        >
                          <span className="mt-1 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};