"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Activity, Zap, Terminal, Globe, ShieldCheck, Database } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // We only pass the ref to useScroll AFTER mounting to avoid the "Not Hydrated" error
  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020617]" />;

  return (
    <section ref={containerRef} className="relative min-h-[110vh] w-full flex items-center pt-20 overflow-hidden bg-[#020617] text-white">
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <motion.h2 style={{ y: y1 }} className="text-[35vw] font-black italic tracking-tighter">LAB_05</motion.h2>
        </div>
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: `linear-gradient(to right, #00e5ff 1px, transparent 1px), linear-gradient(to bottom, #00e5ff 1px, transparent 1px)`, backgroundSize: '80px 80px', perspective: '1200px', transform: 'rotateX(55deg) translateY(-10%)' }} />
        <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-electric/10 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div style={{ opacity }} className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-electric/10 border border-electric/20 backdrop-blur-xl">
              <Terminal size={16} className="text-electric animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] font-black text-electric">KERNEL_STATUS: STABLE</span>
            </div>
            
            <h1 className="text-7xl md:text-[11rem] font-heading font-black leading-[0.8] uppercase italic tracking-tighter">
              ENGINEER <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-white to-electric bg-[length:200%_auto] animate-gradient-flow">THE FUTURE.</span>
            </h1>

            <p className="text-xl md:text-3xl text-slate-300 font-light max-w-2xl leading-tight border-l-4 border-electric pl-8">
              The premier laboratory for <span className="text-white font-bold">Automotive Logic Forensics</span>. We optimize the digital DNA of high-performance machinery.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="relative group bg-electric px-12 py-7 overflow-hidden transition-transform active:scale-95 shadow-[0_0_50px_rgba(0,229,255,0.3)]">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 text-navy font-black uppercase tracking-[0.3em] text-sm flex items-center gap-3 group-hover:text-navy">
                  Initialize Booking <ArrowUpRight size={24} />
                </span>
              </button>
              <button className="px-12 py-7 border border-white/20 hover:border-electric transition-all uppercase text-xs font-black tracking-[0.4em] bg-white/5 backdrop-blur-md">
                Access Lab Specs
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-4 hidden xl:block relative">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative p-1 bg-gradient-to-b from-electric/20 to-transparent">
              <div className="bg-[#050b1a] p-8 space-y-8 border border-white/10 backdrop-blur-3xl">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono text-electric font-black uppercase tracking-widest">Active_Telemetry</span>
                  <Activity className="text-electric" size={18} />
                </div>
                <div className="space-y-6">
                   {[ { l: "CPU_LOAD", v: "88%" }, { l: "SIGNAL_INTEGRITY", v: "99%" } ].map((s, i) => (
                     <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[8px] font-bold text-slate-500"><span>{s.l}</span><span>{s.v}</span></div>
                       <div className="h-1 bg-white/5"><motion.div initial={{ width: 0 }} animate={{ width: s.v }} transition={{ duration: 2 }} className="h-full bg-electric" /></div>
                     </div>
                   ))}
                </div>
                <div className="h-32 flex items-end gap-1 opacity-40">
                  {[...Array(15)].map((_, i) => (
                    <motion.div key={i} animate={{ height: ["20%", "80%", "40%"] }} transition={{ duration: 1.5, repeat: Infinity, delay: i*0.1 }} className="flex-1 bg-electric" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}