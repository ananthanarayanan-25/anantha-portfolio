import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.03)_0%,transparent_50%)]" />

      {/* Fine grid lines */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="w-full px-6 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-mono text-primary/80 text-xs tracking-[0.3em] uppercase mb-8"
          >
            AI & Machine Learning Developer
          </motion.p>

          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-display font-bold leading-[0.9] tracking-tight mb-8">
            <span className="text-foreground">Anantha</span>
            <br />
            <span className="text-gradient italic">Narayanan</span>
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-base leading-relaxed font-light">
            Building intelligent systems at the intersection of artificial intelligence, 
            computer vision, and software engineering.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              View Work
            </a>
            <a
              href="/anantha-portfolio/Anantha_Narayanan_AI_ML_Resume.pdf"
              download
              className="px-7 py-3.5 rounded-full border border-border text-foreground text-sm hover:border-primary/40 transition-all duration-300 flex items-center gap-2"
              title="Download my latest AI & Machine Learning resume"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-border text-foreground text-sm hover:border-primary/40 transition-all duration-300"
            >
              Get in Touch
            </a>
            <div className="flex gap-2 ml-2">
              <a
                href="https://github.com/ananthanarayanan-25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/anantha-narayanan-ankam-balaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="text-muted-foreground/40" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
