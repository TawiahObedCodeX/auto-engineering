"use client";
import Hero from "@/app/components/home/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
// Using React Icons for a more diverse technical look
import { BiMicrochip, BiPulse, BiNetworkChart, BiShieldQuarter, BiCodeBlock, BiCommand } from "react-icons/bi";
import { HiOutlineCpuChip, HiOutlineBolt, HiOutlineGlobeAlt, HiChevronRight } from "react-icons/hi2";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[#020617] min-h-screen" />;

  return (
    <main ref={containerRef} className="bg-[#020617] text-white selection:bg-electric selection:text-navy">
      <Hero />
      
      {/* --- 1. THE PERSISTENT TELEMETRY BAR --- */}
      <div className="sticky top-0 z-50 w-full bg-electric py-3 overflow-hidden border-y border-white/10 backdrop-blur-md">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-32 items-center text-navy font-black text-[10px] uppercase tracking-[0.5em]"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 whitespace-nowrap">
              <BiPulse size={16} className="animate-pulse" /> 
              Link: OEM_BOSCH_PRIMARY • Buffer: 0.0001ms • Packet_Loss: 0% • Auth: RSA_4096_STABLE
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- 2. CORE INFRASTRUCTURE (GRID) --- */}
      <section className="py-32 relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#00e5ff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 text-electric mb-6 font-mono text-xs tracking-[0.7em] font-bold">
                <BiCodeBlock size={20} /> [ SYSTEM_MANIFESTO ]
              </div>
              <h2 className="text-7xl md:text-[10rem] font-black uppercase italic leading-[0.8] tracking-tighter">
                RAW <span className="text-electric">LOGIC.</span> <br /> ZERO NOISE.
              </h2>
            </motion.div>
            <div className="lg:max-w-md pt-10">
                <p className="text-slate-400 font-mono text-sm leading-relaxed uppercase tracking-widest border-l-2 border-electric pl-6">
                    We bridge the gap between mechanical engineering and advanced software forensics. Our lab operates on bit-level manipulation to extract hidden performance.
                </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { t: "Logic Remapping", d: "Customized torque mapping via hex-editor direct injection.", i: <BiMicrochip size={40} />, c: "LEVEL_01" },
              { t: "CAN-Bus Sniffing", d: "Packet analysis of vehicle network traffic to solve ghost errors.", i: <BiNetworkChart size={40} />, c: "LEVEL_02" },
              { t: "EEPROM Recovery", d: "Reviving 'bricked' modules through binary identity rebuilding.", i: <BiCodeBlock size={40} />, c: "LEVEL_03" },
              { t: "Inverter Sync", d: "High-voltage timing alignment for performance EV drivetrains.", i: <HiOutlineBolt size={40} />, c: "LEVEL_04" },
              { t: "Cryptographic Keys", d: "Generating dealer-level encryption for luxury security modules.", i: <BiShieldQuarter size={40} />, c: "LEVEL_05" },
              { t: "Global Telematics", d: "Cloud-based diagnostic tunneling for remote fleet audits.", i: <HiOutlineGlobeAlt size={40} />, c: "LEVEL_06" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "rgba(0, 229, 255, 0.05)" }}
                className="p-16 bg-[#020617] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="text-electric/30 group-hover:text-electric mb-10 transition-colors">{item.i}</div>
                <h3 className="text-3xl font-black uppercase italic mb-6 group-hover:translate-x-2 transition-transform">{item.t}</h3>
                <p className="text-sm text-slate-500 font-bold leading-relaxed uppercase tracking-wider">{item.d}</p>
                <div className="absolute top-8 right-8 font-mono text-[10px] text-white/10 group-hover:text-electric transition-colors">{item.c}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. THE VISUAL LAB (IMAGE & SPECS) --- */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h4 className="text-electric font-black italic tracking-widest text-sm uppercase flex items-center gap-2">
                 <BiCommand /> Hardware_Interface
              </h4>
              <h2 className="text-6xl font-black uppercase italic leading-none">THE TOOLS OF <br/> THE TRADE.</h2>
            </div>
            
            <div className="grid gap-6">
               {[
                 { label: "Oscilloscope", val: "4-Channel 1GHz Native" },
                 { label: "Data Rate", val: "12MB/s Over CAN-FD" },
                 { label: "Encryption", val: "End-to-End AES-256" }
               ].map((spec, i) => (
                 <div key={i} className="flex justify-between items-center py-6 border-b border-white/5 group hover:border-electric transition-colors">
                   <span className="text-slate-500 uppercase font-black tracking-[0.3em] text-[10px]">{spec.label}</span>
                   <span className="font-mono text-electric group-hover:text-white transition-colors">[{spec.val}]</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-video group overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=2000" 
                alt="Technical Diagnostic Interface" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 p-8 bg-electric text-navy">
                 <p className="font-black italic text-2xl uppercase">Real-Time Debugging</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Session_ID: 882-Alpha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. MASSIVE "CASE STUDY" STATS --- */}
      <section className="py-40">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { n: "450+", t: "Proprietary Protocols" },
                { n: "0.01ms", t: "Signal Latency" },
                { n: "100%", t: "Binary Integrity" }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-4">
                  <motion.h3 
                    whileInView={{ scale: [0.9, 1.1, 1] }}
                    className="text-8xl md:text-9xl font-black italic text-white"
                  >
                    {stat.n}
                  </motion.h3>
                  <p className="text-electric font-mono uppercase tracking-[0.5em] text-xs font-bold">{stat.t}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- 5. FINAL MASSIVE CTA --- */}
      <section className="relative h-[90vh] flex items-center justify-center bg-electric group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]" />
        <div className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 inline-block p-4 border border-navy group-hover:border-white transition-colors"
          >
             <HiOutlineCpuChip size={40} className="text-navy group-hover:text-white group-hover:rotate-180 transition-all duration-1000" />
          </motion.div>
          <h2 className="text-7xl md:text-[14rem] font-black uppercase italic text-navy group-hover:text-white transition-colors duration-500 leading-[0.75] tracking-tighter">
            UPGRADE <br /> <span className="text-navy group-hover:text-electric">COGNITION.</span>
          </h2>
          <div className="mt-16 flex justify-center">
             <button className="px-16 py-8 bg-navy text-white font-black uppercase tracking-[0.6em] text-sm group-hover:bg-white group-hover:text-navy transition-all duration-500 flex items-center gap-6 shadow-2xl">
               Run Diagnostic Sequence <HiChevronRight size={20} />
             </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER SPEC --- */}
      <footer className="py-10 bg-[#010411] border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-mono text-slate-600 tracking-[0.4em] uppercase">
          <p>©2026 AUTO_ENGINEERING_LAB // ALL_RIGHTS_RESERVED</p>
          <div className="flex gap-10">
            <span className="hover:text-electric cursor-pointer">Security_Protocol</span>
            <span className="hover:text-electric cursor-pointer">Hardware_API</span>
            <span className="hover:text-electric cursor-pointer">Terminal_Access</span>
          </div>
        </div>
      </footer>
    </main>
  );
}