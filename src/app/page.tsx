"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { 
  BiMicrochip, BiPulse, BiNetworkChart, BiShieldQuarter, 
  BiCodeBlock, BiChip, BiCheckDouble, BiTargetLock 
} from "react-icons/bi";
import { 
  HiOutlineCpuChip, HiOutlineBolt, HiChevronRight, 
  HiOutlineWrenchScrewdriver, HiOutlineFingerPrint 
} from "react-icons/hi2";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-brand-navy min-h-screen" />;

  return (
    <main ref={containerRef} className="bg-brand-navy text-white selection:bg-brand-blue selection:text-brand-navy">
      
      {/* --- 1. THE PERSISTENT TELEMETRY BAR --- */}
      <div className="sticky top-0 z-50 w-full bg-brand-blue py-3 overflow-hidden border-y border-white/10 backdrop-blur-md">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-32 items-center text-brand-navy font-black text-[10px] uppercase tracking-[0.5em]"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 whitespace-nowrap">
              <BiPulse size={16} className="animate-pulse" /> 
              SYSTEM: EAGLE_BRAIN_V4.2 • CHIEF_ENGINEER: PATRICK_TAWIAH • SCANNING: ECU_TCU_BCM • HEALTH: OPTIMIZED
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- 2. HERO & MANIFESTO --- */}
      <section className="pt-20 lg:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-5xl"
            >
              <div className="flex items-center gap-3 text-brand-blue mb-6 font-mono text-xs tracking-[0.7em] font-bold">
                <HiOutlineFingerPrint size={20} /> [ LEAD_ENGINEER_STATION ]
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-heading font-black uppercase italic leading-[0.85] tracking-tighter">
                EAGLE BRAIN <br /> <span className="text-brand-blue">AUTO SOLUTION.</span>
              </h1>
            </motion.div>
            <div className="lg:max-w-md pt-6">
                <p className="text-slate-400 font-mono text-sm leading-relaxed uppercase tracking-widest border-l-2 border-brand-yellow pl-6">
                   "WE FIXED COMPLEX ISSUES: THE HEALTH OF YOUR CAR IS OUR CONCERN." Under the leadership of Mr. Patrick Tawiah, we provide factory-grade diagnostic forensics.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE MASTER TECHNICIAN (Mr. Patrick Tawiah Profile) --- */}
      <section className="py-20 bg-brand-slate/10 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Profile Image Container */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 border border-brand-blue/20 group-hover:border-brand-blue/50 transition-colors duration-700" />
              <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="" 
                  alt="Mr. Patrick Tawiah - Chief Engineer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 p-6 bg-brand-navy border border-brand-blue/30 backdrop-blur-md">
                <p className="font-heading font-black italic text-2xl text-white">PATRICK TAWIAH</p>
                <p className="text-[10px] font-mono text-brand-blue tracking-widest uppercase">Chief Technical Director</p>
              </div>
            </div>

            {/* Expertise Content */}
            <div className="lg:col-span-7 space-y-8">
               <h2 className="text-4xl lg:text-6xl font-heading font-black uppercase italic leading-tight">
                THE MAN BEHIND <br/> THE <span className="text-brand-blue">MACHINE.</span>
              </h2>
               <p className="text-slate-400 font-mono text-sm uppercase tracking-widest leading-loose">
                Mr. Patrick Tawiah leads Eagle Brain with a focus on binary precision. From restoring complex car harnesses to their original state to performing dealer-level ECU cloning, his expertise ensures that no "Ghost Error" remains unsolved.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Master of ECU/TCU Logic",
                    "Car Harness Restoration Specialist",
                    "Advanced CAN-Bus Forensics",
                    "Module Programming Expert"
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 hover:border-brand-blue/30 transition-colors">
                      <BiCheckDouble className="text-brand-blue" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest">{skill}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CORE SERVICES GRID (Specific Business Tasks) --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-brand-yellow font-heading italic text-sm tracking-[0.5em] mb-4">DIAGNOSTIC_COMMAND_CENTER</h3>
            <div className="h-px w-full bg-gradient-to-r from-brand-yellow via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { t: "ECU & TCM Programming", d: "High-precision mapping and calibration of Engine and Transmission Control Modules.", i: <BiMicrochip size={40} />, c: "01" },
              { t: "Cloning of All Modules", d: "1:1 bit-perfect cloning of vehicle modules to maintain original factory identity.", i: <BiChip size={40} />, c: "02" },
              { t: "Read & Write Modules", d: "Direct hex-level binary access to ECU, TCU, and BCM layers for data backup.", i: <BiNetworkChart size={40} />, c: "03" },
              { t: "Airbag Crash Reset", d: "Post-collision software restoration. Clearing hard-codes for module reuse.", i: <BiShieldQuarter size={40} />, c: "04" },
              { t: "Restore Car Harness", d: "Complete restoration of complex wiring harnesses back to original factory specs.", i: <HiOutlineWrenchScrewdriver size={40} />, c: "05" },
              { t: "Fixed Error Codes", d: "Deep forensic analysis of fixed and intermittent codes via OEM protocols.", i: <BiTargetLock size={40} />, c: "06" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "rgba(56, 189, 248, 0.05)" }}
                className="p-10 lg:p-14 bg-brand-navy transition-all duration-500 group relative overflow-hidden"
              >
                <div className="text-brand-blue/30 group-hover:text-brand-blue mb-8 transition-colors">{item.i}</div>
                <h3 className="text-2xl lg:text-3xl font-heading font-black uppercase italic mb-6 group-hover:translate-x-2 transition-transform">{item.t}</h3>
                <p className="text-xs text-slate-500 font-bold leading-relaxed uppercase tracking-wider">{item.d}</p>
                <div className="absolute top-8 right-8 font-mono text-[10px] text-white/10 group-hover:text-brand-yellow transition-colors font-black">SYS_{item.c}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FINAL CALL TO ACTION --- */}
      <section className="relative h-[70vh] lg:h-[90vh] flex items-center justify-center bg-brand-blue group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]" />
        <div className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 inline-block p-4 border border-brand-navy group-hover:border-white transition-colors"
          >
             <HiOutlineBolt size={40} className="text-brand-navy group-hover:text-white group-hover:rotate-180 transition-all duration-1000" />
          </motion.div>
          <h2 className="text-6xl md:text-8xl lg:text-[12rem] font-heading font-black uppercase italic text-brand-navy group-hover:text-white transition-colors duration-500 leading-[0.75] tracking-tighter">
            RESTORE <br /> <span className="text-brand-navy group-hover:text-brand-blue">ORIGINALITY.</span>
          </h2>
          <div className="mt-12 lg:mt-16 flex justify-center">
             <button className="px-10 py-6 lg:px-16 lg:py-8 bg-brand-navy text-white font-heading font-black uppercase tracking-[0.4em] text-xs lg:text-sm group-hover:bg-white group-hover:text-brand-navy transition-all duration-500 flex items-center gap-6 shadow-2xl">
               Contact Mr. Tawiah <HiChevronRight size={20} />
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}