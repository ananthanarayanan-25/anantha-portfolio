import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E Computer Science and Engineering (AI & ML)",
    school: "Sri Krishna College of Technology, Coimbatore",
    period: "2023 – 2027",
    score: "CGPA: 8.22",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Notre Dame of Holy Cross School, Salem",
    period: "",
    score: "Percentage: 80%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">Background</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Edu<span className="text-gradient italic">cation</span>
        </h2>
        <div className="divider mb-12" />

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-elevated p-6 flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-[15px]">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mt-1">{edu.school}</p>
                <div className="flex gap-4 mt-3 text-xs">
                  {edu.period && <span className="font-mono text-primary/80">{edu.period}</span>}
                  <span className="font-medium text-foreground/60">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
