import { motion } from "framer-motion";
import { Brain, Eye, Code2, Layers } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI & ML", desc: "Deep learning, neural networks, and intelligent systems" },
  { icon: Eye, label: "Computer Vision", desc: "OpenCV, YOLO, MediaPipe pipelines" },
  { icon: Code2, label: "Problem Solver", desc: "398+ LeetCode problems solved" },
  { icon: Layers, label: "Full Stack", desc: "End-to-end application development" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">Introduction</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          About <span className="text-gradient italic">Me</span>
        </h2>
        <div className="divider mb-12" />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-[1.8] text-[15px]">
            <p>
              I'm an AI and Machine Learning focused Computer Science student with a passion for 
              building systems that learn, see, and adapt. Native Telugu speaker with strong command of <span className="text-foreground font-medium">Java</span> and <span className="text-foreground font-medium">Python</span>, 
              with deep hands-on experience in deep learning frameworks and computer vision libraries.
            </p>
            <p>
              From real-time object detection to lip-reading neural networks, I enjoy tackling 
              challenging problems where data meets design. I actively sharpen my skills through 
              competitive programming — with <span className="text-primary font-medium">398+ problems</span> solved on LeetCode.
            </p>
            <p>
              I believe in building technology that matters — intelligent, accessible, and elegant.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated p-5 group"
              >
                <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={22} />
                <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
