"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { HiSun, HiMoon, HiMenuAlt3, HiX } from "react-icons/hi";
import { SiSpeedtest } from "react-icons/si";
import { Activity, ShieldCheck, Cpu, Terminal } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Dynamic Height based on scroll - starts massive, gets sleek
  const navHeight = useTransform(scrollY, [0, 100], ["120px", "80px"]);
  const logoScale = useTransform(scrollY, [0, 100], [1.1, 0.9]);

  useEffect(() => setMounted(true), []);

  return (
    <motion.nav 
      style={{ height: navHeight }}
      className="fixed top-0 w-full z-100 flex items-center transition-all duration-300"
    >
      {/* --- LAYERED BACKGROUND --- */}
      <div className="absolute inset-0 bg-navy/80 dark:bg-[#020617]/90 backdrop-blur-2xl border-b border-electric/20" />
      
      {/* Top Scanning Pulse */}
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2], x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 h-[2px] w-full bg-linear-to-r from-transparent via-electric to-transparent"
      />

      <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
        
        {/* MASSIVE LOGO AREA */}
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            style={{ scale: logoScale }}
            className="relative"
          >
            <div className="absolute inset-0 bg-electric blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-navy border-2 border-electric p-3 rounded-none skew-x-[-10deg]">
              <SiSpeedtest className="text-electric text-3xl group-hover:rotate-360 transition-transform duration-700" />
            </div>
          </motion.div>
          
          <motion.div style={{ scale: logoScale }} className="flex flex-col">
            <span className="font-heading text-3xl md:text-4xl tracking-[ -0.05em] uppercase font-black text-white leading-none">
              AUTO<span className="text-electric italic">ELECTRO</span>
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-px w-8 bg-electric/50" />
              <span className="text-[9px] uppercase tracking-[0.6em] text-slate-500 font-black">
                Precision_Lab
              </span>
            </div>
          </motion.div>
        </Link>

        {/* DESKTOP NAVIGATION - High Visibility */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-1">
            {["Services", "Lab", "Vehicles"].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`}
                className="relative px-6 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-all group overflow-hidden"
              >
                <span className="relative z-10">{item}</span>
                {/* Hover Block Effect */}
                <motion.span 
                  className="absolute inset-0 bg-electric/10 translate-y-full group-hover:translate-y-0 transition-transform"
                />
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-electric group-hover:w-full transition-all"
                />
              </Link>
            ))}
          </div>

          {/* SYSTEM TELEMETRY (Visual "Catchiness") */}
          <div className="hidden xl:flex items-center gap-6 px-8 border-l border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                <span className="text-[8px] font-mono text-electric uppercase font-black">Link_Stable</span>
              </div>
              <div className="text-[10px] font-mono text-slate-500 tracking-tighter">OS_VER: 2026.4.2</div>
            </div>
            <Terminal size={20} className="text-slate-700 hover:text-electric cursor-help transition-colors" />
          </div>

          <div className="flex items-center gap-4">
            {/* Action Button - Massive Call to Action */}
            <Link 
              href="/book" 
              className="group relative bg-electric px-10 py-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-navy font-black uppercase tracking-[0.2em] text-[11px] group-hover:text-navy">
                Execute_Order
              </span>
            </Link>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-electric transition-all bg-white/5 text-white"
            >
              {mounted && (theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />)}
            </button>
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col items-center justify-center w-12 h-12 bg-electric text-navy rounded-none shadow-[0_0_15px_rgba(0,229,255,0.4)]"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* MOBILE MENU - Full Screen Tech Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#020617] z-110 flex flex-col justify-center p-12 lg:hidden"
          >
            {/* Background Text for Flair */}
            <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none select-none">
              <div className="text-[20rem] font-black uppercase italic leading-none rotate-12">SYSTEM</div>
            </div>

             <div className="relative z-10 space-y-12">
               {["Services", "Lab", "Vehicles", "Book"].map((item, idx) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block group"
                >
                  <div className="text-slate-600 text-xs font-mono mb-2">0{idx + 1}_ //</div>
                  <div className="text-6xl font-heading uppercase font-black italic text-white group-hover:text-electric group-hover:translate-x-4 transition-all flex items-center gap-4">
                    {item}
                  </div>
                </Link>
               ))}
             </div>

             <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white border border-white/20 p-4"
             >
               <HiX size={32} />
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;