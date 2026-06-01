import { Quote, Linkedin } from "lucide-react";

const testimonials = [
  {
    quote:
      "Mayank has shown great enthusiasm and commitment in their work. Their positive attitude and willingness to learn make them a strong asset to any team.",
    author: "Durgesh Sharma",
    role: "Sr. Engineer – UI/UX at Spalba",
    relationship: "Senior to Mayank at EITBIZ",
    avatar: "https://ui-avatars.com/api/?name=Durgesh+Sharma&background=20B2A6&color=fff&size=100",
    linkedin: "https://www.linkedin.com/in/mayank-pandey-8a513b1b2/details/recommendations/",
  },
  {
    quote:
      "I had the pleasure of working with Mayank on a project where he worked as a React Developer and I handled the QA side. He is an extremely talented developer with strong technical knowledge and a great understanding of frontend development. His ability to create responsive, user-friendly, and high-quality applications was truly impressive. He pays attention to details, writes clean code, and always ensures the work is completed on time.",
    author: "Ritika Gupta",
    role: "Software Quality Assurance Engineer at EitBiz - Extrovert Information Technology",
    relationship: "Managed Mayank directly at EITBIZ",
    avatar: "https://ui-avatars.com/api/?name=Ritika+Gupta&background=FF5733&color=fff&size=100",
    linkedin: "https://www.linkedin.com/in/mayank-pandey-8a513b1b2/details/recommendations/",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in animation-delay-200">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative glass p-8 md:p-10 rounded-3xl glow-border flex flex-col justify-between">
              <div>
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* LinkedIn Badge */}
                <div className="absolute -top-4 right-8">
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-[10px] text-primary border border-primary/30 hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    Verified on LinkedIn
                  </a>
                </div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg font-medium leading-relaxed mb-8 pt-6 text-foreground">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-primary/80 leading-normal">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    {t.relationship}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to LinkedIn */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Want to leave a recommendation?{" "}
          <a
            href="https://www.linkedin.com/in/mayank-pandey-8a513b1b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Connect on LinkedIn
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
};