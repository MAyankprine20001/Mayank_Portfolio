import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  MapPin,
  Mail,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Socket.IO",
  "Docker",
  "Tailwind CSS",
  "Shadcn",
  "Vue.js",
  "Nest.js",
  "Supabase",
  "Firebase",
  "GitHub Actions",
  "Stripe",
  "Razorpay",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Full-Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">scalable</span>
                <br />
                products with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Mayank Pandey — a full-stack software engineer
                specializing in React.js, Next.js, Node.js, and TypeScript. I
                build performant, real-world web applications from UI to
                deployment.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="/Mayank_Resume.pdf" download="Mayank_Pandey_CV.pdf">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/MAyankprine20001",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/mayank-pandey-8a513b1b2",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="animate-fade-in animation-delay-300 flex flex-col gap-4 max-w-sm mx-auto w-full">
            {/* Profile Card */}
            <div className="relative glass rounded-[2rem] p-8 border border-white/5 flex flex-col items-center text-center shadow-2xl">
              <img
                src="/MayankPhoto.png"
                alt="Mayank Pandey"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top border-2 border-white/10 shadow-xl mb-5 grayscale hover:grayscale-0 transition-all duration-500"
              />

              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                Mayank Pandey
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Full-Stack Software Engineer
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { name: "React", color: "text-[#61DAFB]" },
                  { name: "Next.js", color: "text-white" },
                  { name: "JavaScript", color: "text-[#F7DF1E]" },
                  { name: "Node.js", color: "text-[#339933]" },
                  { name: "TypeScript", color: "text-[#3178C6]" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full border border-white/10 bg-background/50 ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-5 hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-pink-500 fill-pink-500/20" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Location
                </div>
                <div className="text-sm font-medium text-white">
                  New Delhi, India
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-5 hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-200 fill-purple-200/20" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Email
                </div>
                <div className="text-sm font-medium text-white">
                  mayankpandeyji2001@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
              bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
              bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
