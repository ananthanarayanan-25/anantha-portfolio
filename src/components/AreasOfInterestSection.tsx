import { motion } from "framer-motion";
import { Eye, Brain, Cpu, Server, Zap } from "lucide-react";

const interests = [
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Building intelligent visual systems capable of understanding real-world environments."
  },
  {
    icon: Brain,
    title: "Deep Learning",
    desc: "Designing neural network models for complex prediction and perception tasks."
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    desc: "Developing intelligent systems that learn, adapt, and make decisions."
  },
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "Building scalable systems and APIs that power intelligent applications."
  },
  {
    icon: Zap,
    title: "Embedded Systems",
    desc: "Integrating AI with hardware systems for real-world automation."
  }
];

const AreasOfInterestSection = () => {
  return (
    <section id="interests" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">Focus</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Areas of <span className="text-gradient italic">Interest</span>
        </h2>
        <div className="divider mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-elevated p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AreasOfInterestSection;
