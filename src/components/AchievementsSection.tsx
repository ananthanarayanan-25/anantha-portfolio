import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Globe, ShieldCheck } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "Visteon Scholar for academic excellence" },
  { icon: Award, text: "2nd Prize – Science Expo 2024 for Lip Reading Model" },
];

const certifications = [
  "Cisco CCNA – Networking Fundamentals",
  "Microsoft Azure Fundamentals (2025)",
  "AWS Cloud Essentials (2025)",
  "Python Programming for Beginners",
];

const languages = [
  { lang: "Telugu", level: "Native" },
  { lang: "Tamil", level: "Fluent" },
  { lang: "English", level: "Fluent" },
  { lang: "Japanese", level: "Basic" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">Recognition</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Achieve<span className="text-gradient italic">ments</span>
        </h2>
        <div className="divider mb-12" />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Awards */}
          <div>
            <h3 className="text-xs font-mono text-primary/70 uppercase tracking-[0.2em] mb-5">Awards</h3>
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated p-4 flex gap-3"
                >
                  <item.icon className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono text-primary/70 uppercase tracking-[0.2em] mb-5">Certifications</h3>
            <div className="space-y-2">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated p-3.5 flex gap-3 items-center"
                >
                  <ShieldCheck className="text-accent flex-shrink-0" size={15} />
                  <p className="text-sm text-muted-foreground">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Programming */}
        <div className="card-elevated p-6">
          <h3 className="text-xs font-mono text-primary/70 uppercase tracking-[0.2em] mb-4">Competitive Programming</h3>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="text-primary" size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground mb-3">Solved 398+ problems on LeetCode across Easy, Medium, and Hard categories.</p>
              <p className="text-xs text-muted-foreground mb-3">Focus areas include:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Data Structures", "Algorithms", "Dynamic Programming", "Graph Problems", "Sliding Window Techniques"].map((area) => (
                  <span key={area} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border">
                    {area}
                  </span>
                ))}
              </div>
              <a 
                href="https://leetcode.com/u/saiananthu123/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
              >
                View LeetCode Profile →
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Languages */}
          <div>
            <h3 className="text-xs font-mono text-primary/70 uppercase tracking-[0.2em] mb-5">Languages</h3>
            <div className="space-y-2">
              {languages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated p-3.5 flex justify-between items-center"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="text-primary/60" size={14} />
                    <span className="text-sm text-foreground">{item.lang}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{item.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
