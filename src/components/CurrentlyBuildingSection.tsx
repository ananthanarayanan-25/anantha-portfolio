import { motion } from "framer-motion";
import { AlertTriangle, Video, Zap } from "lucide-react";

const CurrentlyBuildingSection = () => {
  return (
    <section id="building" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">In Progress</span>
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Currently <span className="text-gradient italic">Building</span>
        </h2>
        <div className="divider mb-12" />

        <div className="card-elevated p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">Accident Detection System</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A computer vision based system designed to detect accident scenarios from video streams in real time using deep learning techniques.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The goal is to assist in faster emergency response by automatically identifying accident events from surveillance footage.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Video size={12} />
                  Computer Vision
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                  <Zap size={12} />
                  Deep Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CurrentlyBuildingSection;
