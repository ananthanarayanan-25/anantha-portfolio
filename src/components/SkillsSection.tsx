import { motion } from "framer-motion";

const skillGroups = [
  { category: "Languages", skills: ["Java", "Python", "C", "C++", "SQL", "JavaScript"] },
  { category: "ML & Vision", skills: ["TensorFlow", "OpenCV", "YOLOv8", "MediaPipe"] },
  { category: "Developer Tools", skills: ["Git", "GitHub", "VS Code", "Google Colab", "Kaggle"] },
  { category: "Cloud", skills: ["AWS", "Microsoft Azure"] },
  { category: "Embedded", skills: ["Arduino Uno", "Sensors", "Microcontrollers"] },
  { category: "Fundamentals", skills: ["DSA", "OS", "Networks", "OOP"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">Expertise</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Tech <span className="text-gradient italic">Stack</span>
        </h2>
        <div className="divider mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-elevated p-6"
            >
              <h3 className="text-xs font-mono text-primary/70 uppercase tracking-[0.2em] mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
