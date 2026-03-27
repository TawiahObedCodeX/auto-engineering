"use client";
import { motion } from "framer-motion";

export default function EagleLogo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center gap-3 cursor-pointer group ${className}`}
      initial="rest" 
      whileHover="hover" 
      animate="rest"
    >
      {/* THE EAGLE ICON */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-blue stroke-[3]">
          {/* Outer Hexagon Shield */}
          <motion.path
            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
            variants={{
              rest: { pathLength: 1, opacity: 0.2 },
              hover: { pathLength: 1, opacity: 1, stroke: "#38bdf8", transition: { duration: 0.5 } }
            }}
          />
          {/* The Eagle Head Shape */}
          <motion.path
            d="M30 40 C 35 30, 65 30, 70 45 L 55 55 L 75 65 C 60 80, 40 75, 30 65"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              rest: { pathLength: 0.8, x: 0 },
              hover: { pathLength: 1, x: 5, stroke: "#fbbf24", transition: { type: "spring", stiffness: 300 } }
            }}
          />
          {/* Eye of the Eagle */}
          <motion.circle 
            cx="45" cy="45" r="2" fill="currentColor" 
            className="text-brand-yellow"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.5, fill: "#fff" }
            }}
          />
        </svg>
      </div>

      {/* THE TEXT DESIGN */}
      <div className="flex flex-col leading-none">
        <motion.span 
          className="text-2xl font-heading font-black italic tracking-tighter text-white"
          variants={{
            hover: { skewX: -10, transition: { duration: 0.2 } }
          }}
        >
          EAGLE<span className="text-brand-blue">BRAIN</span>
        </motion.span>
        <motion.span 
          className="text-[8px] font-mono font-bold tracking-[0.4em] text-brand-yellow uppercase"
          variants={{
            rest: { opacity: 0.5, x: 0 },
            hover: { opacity: 1, x: 10, transition: { duration: 0.3 } }
          }}
        >
          AUTO_SOLUTION_SYSTEM
        </motion.span>
      </div>
    </motion.div>
  );
}