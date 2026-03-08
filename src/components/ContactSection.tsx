import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-7xl mx-auto"
      >
        <span className="section-label">Connect</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Let's <span className="text-gradient italic">Talk</span>
        </h2>
        <div className="divider mb-10 mx-auto" />

        <p className="text-muted-foreground mb-12 leading-relaxed">
          Open to opportunities, collaborations, and conversations about AI, engineering, and building cool things.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            href="mailto:saiananthu123@gmail.com"
            className="card-elevated p-5 flex items-center gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="text-primary" size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Email</p>
              <p className="text-sm text-foreground">saiananthu123@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+919342412496"
            className="card-elevated p-5 flex items-center gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary" size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
              <p className="text-sm text-foreground">+91 93424 12496</p>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/anantha-narayanan-ankam-balaji"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/ananthanarayanan-25"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground/60 font-mono tracking-wider">
          © 2024–Present Anantha Narayanan A B
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
