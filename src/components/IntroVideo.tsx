"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroVideo({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-9999 bg-brand-navy flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Optional: Skip Button for repeat visitors */}
      <button 
        onClick={onComplete}
        className="absolute bottom-10 right-10 text-brand-yellow font-mono text-xs border border-brand-yellow/30 px-4 py-2 hover:bg-brand-yellow/10 transition-colors"
      >
        SKIP_INTRO // [ESC]
      </button>
    </motion.div>
  );
}