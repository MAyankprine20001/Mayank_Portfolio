import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MAyankprine20001",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/mayank-pandey-8a513b1b2",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:mayankpandeyji2001@gmail.com",
    label: "Email",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              MP<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Mayank Pandey — Full-Stack Software Engineer
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              © {currentYear} Mayank Pandey. All rights reserved.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};