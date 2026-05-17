const techStack = [
    {
        category: "Frontend",
        skills: [
            "React.js",
            "Next.js",
            "Vue.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "SCSS",
            "Shadcn UI",
            "Redux Toolkit",
            "HTML5",
            "CSS3",
            "Axios",
            "Tanstack-query",
            "Redux Toolkit",
            "Zod",
            "Next-auth",
            "React-hook form",
            "Formik"


        ],
    },
    {
        category: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "Socket.IO",
            "JWT",
            "OAuth",
            "Role Based Access Control",
            "Supabase Edge Functions",
            "Webhook Integration",
            "Cron Jobs",
        ],
    },
    {
        category: "Database & Cloud",
        skills: [
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Redis",
            "Supabase",
            "Firebase",
            "Docker",
            "GitHub Actions",
            "Vercel",
            "Netlify",
        ],
    },
    {
        category: "Integrations",
        skills: [
            "Stripe",
            "Razorpay",
            "PayPal",
            "Google Pay",
            "Apple Pay",
            "Google Maps API",
            "Google Calendar",
            "Google Translate",
            "Google AdSense",
            "Google Translate API",
            "canvas"
           
        ],
    },
];

export const TechStack = () => {
    return (
        <section id="techstack" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-14 animate-fade-in">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[2px] bg-primary" />
                        <span className="text-primary text-sm font-medium tracking-widest uppercase">
                            Tech Stack
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
                        What I{" "}
                        <span className="font-serif italic font-normal text-white">
                            work with.
                        </span>
                    </h2>
                </div>

                {/* Categories */}
                <div className="space-y-10">
                    {techStack.map((group, gIdx) => (
                        <div
                            key={gIdx}
                            className="animate-fade-in"
                            style={{ animationDelay: `${(gIdx + 1) * 100}ms` }}
                        >
                            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">
                                {group.category}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                                        style={{
                                            animationDelay: `${(gIdx + 1) * 100 + sIdx * 40}ms`,
                                        }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};