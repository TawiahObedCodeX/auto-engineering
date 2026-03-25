"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Activity, Zap, Gauge } from "lucide-react";

const tools = [
  { icon: Cpu, title: "Bosch KTS 560", desc: "Full ECU programming &amp; coding" },
  { icon: Activity, title: "Oscilloscope PicoScope", desc: "Waveform analysis up to 200MHz" },
  { icon: Zap, title: "Autel MaxiSys Ultra", desc: "Bi-directional control &amp; ADAS calibration" },
  { icon: Gauge, title: "Battery &amp; Alternator Tester", desc: "Midtronics EXP-1000" },
];

export default function DiagnosticTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="tools" className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold">EQUIPMENT</span>
          <h2 className="font-heading text-5xl mt-3">State-of-the-art diagnostic machines</h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid md:grid-cols-4 gap-8"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:shadow-card transition-all group"
            >
              <tool.icon className="text-accent w-12 h-12 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="font-semibold text-xl mb-3">{tool.title}</h3>
              <p className="text-text-light">{tool.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}