import { motion } from "framer-motion";
import { Eye, Bot, Mic, BarChart3, Tv, Cpu, MousePointer, Github } from "lucide-react";

const projects = [
  { 
    title: "Virtual Mouse", 
    desc: "Hand gesture-based mouse controller enabling touchless computer interaction using MediaPipe and OpenCV.", 
    icon: MousePointer, 
    tag: "Computer Vision",
    tech: "Python • OpenCV • MediaPipe • Computer Vision",
    github: "https://github.com/ananthanarayanan-25/virtual-mouse"
  },
  { 
    title: "YOLOv8 Object Detection", 
    desc: "Real-time object detection and tracking pipeline using YOLOv8 with high-accuracy inference for dynamic environments.", 
    icon: Eye, 
    tag: "Deep Learning",
    tech: "Python • YOLOv8 • OpenCV • Deep Learning",
    github: "https://github.com/ananthanarayanan-25/yolov8-object-detection"
  },
  { 
    title: "Lip Reading Model", 
    desc: "CNN-based visual speech recognition system trained on lip movement datasets. Awarded 2nd Prize at Science Expo 2024.", 
    icon: Bot, 
    tag: "Deep Learning",
    tech: "Python • TensorFlow • CNN • Computer Vision",
    github: "https://github.com/ananthanarayanan-25/lip-reading-model"
  },
  { 
    title: "Kaggle Machine Learning Projects", 
    desc: "Machine learning models built for real-world datasets including Titanic survival prediction and house price prediction with feature engineering.", 
    icon: BarChart3, 
    tag: "Machine Learning",
    tech: "Python • Scikit-learn • Pandas • Machine Learning",
    github: "https://github.com/ananthanarayanan-25/kaggle-ml-projects"
  },
  { 
    title: "Text-to-Speech & Speech-to-Text", 
    desc: "Bidirectional voice recognition system that converts speech to text and text to speech for interactive applications.", 
    icon: Mic, 
    tag: "NLP",
    tech: "Python • SpeechRecognition • gTTS • NLP",
    github: "https://github.com/ananthanarayanan-25/tts-stt-system"
  },
  { 
    title: "Netflix Show Manager", 
    desc: "Full-stack web application to manage TV shows and content workflows with automated CRUD operations.", 
    icon: Tv, 
    tag: "Full Stack",
    tech: "HTML • CSS • JavaScript • SQL",
    github: "https://github.com/ananthanarayanan-25/netflix-show-manager"
  },
  { 
    title: "Color & Face Detection", 
    desc: "Real-time computer vision application capable of detecting colors and faces using OpenCV.", 
    icon: Eye, 
    tag: "Computer Vision",
    tech: "Python • OpenCV • Computer Vision",
    github: "https://github.com/ananthanarayanan-25/color-face-detection"
  },
  { 
    title: "Line Follower Robot", 
    desc: "Autonomous robot built using Arduino Uno and sensor array capable of following a predefined path.", 
    icon: Cpu, 
    tag: "Embedded",
    tech: "Arduino • Embedded C • Sensors • Robotics",
    github: "https://github.com/ananthanarayanan-25/line-follower-robot"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">Portfolio</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Selected <span className="text-gradient italic">Projects</span>
        </h2>
        <div className="divider mb-12" />

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group card-elevated p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                  <project.icon className="text-primary" size={18} />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-border bg-secondary/50">
                  {project.tag}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-[15px] mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{project.desc}</p>
              <div className="mt-auto space-y-2">
                <p className="text-[10px] text-muted-foreground/70 font-mono">{project.tech}</p>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                >
                  <Github size={12} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
