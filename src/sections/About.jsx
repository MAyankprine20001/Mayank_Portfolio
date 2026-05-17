import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building end-to-end solutions from responsive UIs to scalable backend architectures and optimized APIs.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing database queries, reducing API load, and delivering fast, cross-browser compatible interfaces.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients and teams across dashboards, e-commerce, and real-time applications.",
  },
  {
    icon: Lightbulb,
    title: "Real-World Impact",
    description:
      "Shipping production-grade platforms with payment integrations, real-time features, and live deployments.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Software Engineer at EITBIZ (Extrovert Information
                Technology), where I build scalable full-stack web applications
                for clients across industries. My work spans responsive frontend
                UIs, robust backend systems, and seamless third-party
                integrations.
              </p>
              <p>
                I specialize in React.js, Next.js, Node.js, and TypeScript,
                crafting everything from real-time collaboration platforms to
                e-commerce flows and ride-tracking systems. I take ownership
                from architecture to deployment — including payment gateways,
                authentication, and production debugging.
              </p>
              <p>
                When I'm not shipping features, I'm exploring new tools,
                optimizing systems, and staying sharp on the latest in web
                development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build products that are reliable, performant, and
                genuinely useful — code that's clean enough for developers to
                love and fast enough for users to never notice."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};