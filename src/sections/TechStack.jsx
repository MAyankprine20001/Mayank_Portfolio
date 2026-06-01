import { useState } from "react";
import { Puzzle, Shield, Database, Cloud, CreditCard, LayoutTemplate, Code2, Lock } from "lucide-react";
import { SiNextdotjs, SiStripe, SiRazorpay, SiPaypal, SiGooglepay, SiGooglemaps, SiGooglecalendar, SiGoogletranslate, SiGoogleadsense, SiSentry } from "react-icons/si";

const categoryColors = {
  "Frontend": "text-purple-400",
  "Backend": "text-green-400",
  "Database & Cloud": "text-teal-400",
  "Integrations": "text-orange-400"
};

const renderIcon = (deviconClass, FallbackIcon) => {
    if (deviconClass) {
        return <i className={`${deviconClass} text-3xl drop-shadow-sm`}></i>;
    }
    return <FallbackIcon className="w-8 h-8 text-white/90 drop-shadow-sm" />;
};

const techStack = [
    {
        category: "Frontend",
        skills: [
            { name: "React.js", icon: renderIcon("devicon-react-original colored") },
            { name: "Next.js", icon: renderIcon(null, SiNextdotjs) },
            { name: "Vue.js", icon: renderIcon("devicon-vuejs-plain colored") },
            { name: "TypeScript", icon: renderIcon("devicon-typescript-plain colored") },
            { name: "JavaScript", icon: renderIcon("devicon-javascript-plain colored") },
            { name: "Tailwind CSS", icon: renderIcon("devicon-tailwindcss-original colored") },
            { name: "SCSS", icon: renderIcon("devicon-sass-original colored") },
            { name: "Shadcn UI", icon: renderIcon(null, LayoutTemplate) },
            { name: "Redux Toolkit", icon: renderIcon("devicon-redux-original colored") },
            { name: "HTML5", icon: renderIcon("devicon-html5-plain colored") },
            { name: "CSS3", icon: renderIcon("devicon-css3-plain colored") },
            { name: "Axios", icon: renderIcon("devicon-axios-plain colored") },
            { name: "Tanstack Query", icon: renderIcon(null, Code2) },
            { name: "Zod", icon: renderIcon(null, Shield) },
            { name: "Next-auth", icon: renderIcon(null, Lock) },
            { name: "React Hook Form", icon: renderIcon(null, Code2) },
            { name: "Formik", icon: renderIcon(null, Code2) }
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: renderIcon("devicon-nodejs-plain colored") },
            { name: "Express.js", icon: renderIcon("devicon-express-original", null) },
            { name: "REST APIs", icon: renderIcon(null, Puzzle) },
            { name: "Socket.IO", icon: renderIcon("devicon-socketio-original", null) },
            { name: "JWT", icon: renderIcon("devicon-json-plain colored") },
            { name: "OAuth", icon: renderIcon("devicon-oauth-plain colored") },
            { name: "RBAC", icon: renderIcon(null, Shield) },
            { name: "Edge Functions", icon: renderIcon("devicon-supabase-plain colored") },
            { name: "Webhooks", icon: renderIcon(null, Code2) },
            { name: "Cron Jobs", icon: renderIcon(null, Code2) },
        ],
    },
    {
        category: "Database & Cloud",
        skills: [
            { name: "PostgreSQL", icon: renderIcon("devicon-postgresql-plain colored") },
            { name: "MongoDB", icon: renderIcon("devicon-mongodb-plain colored") },
            { name: "MySQL", icon: renderIcon("devicon-mysql-plain colored") },
            { name: "Redis", icon: renderIcon("devicon-redis-plain colored") },
            { name: "Supabase", icon: renderIcon("devicon-supabase-plain colored") },
            { name: "Firebase", icon: renderIcon("devicon-firebase-plain colored") },
            { name: "Docker", icon: renderIcon("devicon-docker-plain colored") },
            { name: "GitHub Actions", icon: renderIcon("devicon-githubactions-plain colored", null) },
            { name: "Vercel", icon: renderIcon("devicon-vercel-original", null) },
            { name: "Netlify", icon: renderIcon("devicon-netlify-plain colored", null) },
        ],
    },
    {
        category: "Integrations",
        skills: [
            { name: "Stripe", icon: <SiStripe className="w-8 h-8 text-[#635BFF] drop-shadow-sm" /> },
            { name: "Razorpay", icon: <SiRazorpay className="w-8 h-8 text-[#3395FF] drop-shadow-sm" /> },
            { name: "PayPal", icon: <SiPaypal className="w-8 h-8 text-[#00457C] drop-shadow-sm" /> },
            { name: "Google Pay", icon: <SiGooglepay className="w-10 h-10 text-white drop-shadow-sm" /> },
            { name: "Apple Pay", icon: renderIcon("devicon-apple-original", null) },
            { name: "Google Maps API", icon: <SiGooglemaps className="w-8 h-8 text-[#4285F4] drop-shadow-sm" /> },
            { name: "Google Calendar", icon: <SiGooglecalendar className="w-8 h-8 text-[#4285F4] drop-shadow-sm" /> },
            { name: "Google Translate", icon: <SiGoogletranslate className="w-8 h-8 text-[#4285F4] drop-shadow-sm" /> },
            { name: "Google AdSense", icon: <SiGoogleadsense className="w-8 h-8 text-[#4285F4] drop-shadow-sm" /> },
            { name: "Translate API", icon: <SiGoogletranslate className="w-8 h-8 text-[#4285F4] drop-shadow-sm" /> },
            { name: "Sentry", icon: <SiSentry className="w-8 h-8 text-[#362D59] drop-shadow-sm" /> },
            { name: "canvas", icon: renderIcon("devicon-html5-plain colored") }
        ],
    },
];

const allCategories = ["All", ...techStack.map(g => g.category)];

const allSkills = techStack.flatMap(group => 
  group.skills.map(skill => ({
    ...skill,
    category: group.category,
    colorClass: categoryColors[group.category]
  }))
);

export const TechStack = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredSkills = activeTab === "All" 
        ? allSkills 
        : allSkills.filter(skill => skill.category === activeTab);

    return (
        <section id="techstack" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-12 animate-fade-in">
                    <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                        Technical Skills
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My tech<br />stack
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent" />
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-12 animate-fade-in animation-delay-100">
                    {allCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                activeTab === cat
                                    ? "bg-white/10 text-white border-white/20"
                                    : "bg-transparent text-muted-foreground border-transparent hover:border-white/10 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3">
                    {filteredSkills.map((skill, idx) => (
                        <div 
                            key={skill.name}
                            className="bg-[#13151A] border border-white/5 rounded-xl p-4 hover:bg-[#1A1C23] transition-colors duration-300 flex flex-col justify-between h-[105px] animate-fade-in"
                            style={{ animationDelay: `${Math.min(idx * 20, 300)}ms` }}
                        >
                            <div className="mb-1">{skill.icon}</div>
                            <div>
                                <h3 className="text-white text-xs font-semibold mb-0.5 truncate">{skill.name}</h3>
                                <p className={`text-[8px] font-bold uppercase tracking-wider ${skill.colorClass}`}>
                                    {skill.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};