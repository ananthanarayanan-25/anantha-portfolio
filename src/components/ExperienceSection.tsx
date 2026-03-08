import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">Career</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Work <span className="text-gradient italic">Experience</span>
        </h2>
        <div className="divider mb-12" />

        <div className="card-elevated p-8">
          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={22} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                <h3 className="font-semibold text-foreground text-lg">Web Development Intern</h3>
                <span className="text-xs font-mono text-primary/70">Jan – Mar 2024</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                InternPe · Bharat Intern · CodSoft · OctaNet
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary/60 mt-1 flex-shrink-0">—</span>
                  Developed web applications using HTML, CSS, JavaScript, and SQL with focus on responsive design.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary/60 mt-1 flex-shrink-0">—</span>
                  Built end-to-end features including front-end interfaces and backend API integration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
