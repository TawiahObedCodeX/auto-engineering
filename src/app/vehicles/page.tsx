"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Cpu, Zap, Box, Shield, Activity, Share2, Binary, 
  Database, Fingerprint, Microscope, Radio, HardDrive, 
  Layers, Settings, ChevronRight
} from "lucide-react";
import { useRef } from "react";

const vehicleTiers = [
  {
    category: "European High-Performance",
    brands: "Porsche, BMW M-Series, Audi RS, Mercedes-AMG",
    desc: "Our laboratory specializes in FlexRay network stability and Bosch MEVD17.2.G control module re-coding. We resolve 'limp mode' errors that standard dealerships cannot trace.",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000",
    stats: { bus: "FlexRay", logic: "SCN Coding", voltage: "12V-48V" },
    codes: ["P0300", "P0171", "U0100"]
  },
  {
    category: "Next-Gen Electric (EV)",
    brands: "Tesla, Rivian, Lucid, Rimac",
    desc: "Specialized protocols for high-voltage battery contactors, DC-DC isolation faults, and liquid-cooled thermal management logic. We verify cell-level health without opening the pack.",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000",
    stats: { bus: "CAN-FD", logic: "BMS Sync", voltage: "400V-800V" },
    codes: ["ISO_FAULT", "BMS_COMM", "HV_LOCK"]
  },
  {
    category: "Luxury Exotic",
    brands: "Ferrari, Lamborghini, McLaren",
    desc: "Handling complex gateway architectures and bespoke wiring loom restoration for low-volume production supercars. We preserve the digital integrity of the vehicle's heritage.",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000",
    stats: { bus: "Ethernet", logic: "Module Clone", voltage: "12V Hybrid" },
    codes: ["NODE_ERR", "GW_TIMEOUT", "FOB_SYNC"]
  },
  {
    category: "Japanese Precision",
    brands: "Lexus F, Nissan GT-R, Honda Type-R",
    desc: "Optimizing Denso ECU logic and ATTESA E-TS control system synchronization. We focus on sensor-level precision and high-frequency data logging.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000",
    stats: { bus: "High-Speed CAN", logic: "Sensor Map", voltage: "12V-24V" },
    codes: ["VDC_OFF", "BOOST_LOG", "TPS_CAL"]
  }
];

export default function VehiclesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main ref={containerRef} className="pt-32 pb-20 bg-[#020617] text-white min-h-screen relative overflow-hidden">
      
      {/* --- MASSIVE BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `radial-gradient(#00e5ff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        {/* Horizontal Progress Data Stream */}
        <motion.div 
          style={{ width: scrollX }}
          className="absolute top-0 left-0 h-[2px] bg-electric shadow-[0_0_15px_#00e5ff] z-50"
        />
        
        {/* Floating Binary Background */}
        <div className="absolute right-10 top-1/4 text-[10px] font-mono text-electric/10 leading-none select-none hidden lg:block">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i}>0101101001011010110100101</div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* SECTION 1: MASSIVE HEADER */}
        <header className="mb-40">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-electric mb-6">
            <Database size={14} className="animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.6em]">Architecture_Database_v9.4</span>
          </motion.div>
          <h1 className="text-7xl md:text-[12rem] font-heading font-black uppercase italic leading-[0.75] mb-12">
            The <br /> <span className="text-electric">Matrix.</span>
          </h1>
          <div className="grid lg:grid-cols-2 gap-20">
            <p className="text-2xl text-slate-400 font-light leading-relaxed">
              We don't just repair cars; we interface with their digital soul. Our facility is engineered to handle the world's most complex electrical architectures.
            </p>
            <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-10">
              <div>
                <div className="text-4xl font-bold italic text-electric">4,200+</div>
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mt-2">DBC Files Decoded</div>
              </div>
              <div>
                <div className="text-4xl font-bold italic text-white">100%</div>
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mt-2">Bit-Level Accuracy</div>
              </div>
            </div>
          </div>
        </header>

        {/* SECTION 2: THE VEHICLE TIERS (SCROLLABLE LIST) */}
        <div className="space-y-60">
          {vehicleTiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 relative group">
                <div className="absolute -top-10 -left-10 text-[12rem] font-black italic text-white/3 select-none">0{i+1}</div>
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5">
                  <img src={tier.img} alt={tier.category} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-navy/20" />
                  
                  {/* Digital HUD Overlay */}
                  <div className="absolute bottom-6 right-6 flex gap-2">
                    {tier.codes.map(code => (
                      <span key={code} className="px-3 py-1 bg-black/80 backdrop-blur-md border border-electric/30 text-[9px] font-mono text-electric">
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <h3 className="text-5xl font-heading font-black uppercase italic leading-none">{tier.category}</h3>
                <p className="text-electric text-xs font-black uppercase tracking-widest">Mastery: {tier.brands}</p>
                <p className="text-slate-400 text-lg leading-relaxed">{tier.desc}</p>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-6 bg-white/2 border border-white/5 flex justify-between items-center group hover:border-electric transition-all">
                    <div className="flex items-center gap-4">
                      <Radio className="text-electric" size={20} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Bus Protocol</span>
                    </div>
                    <span className="font-mono text-sm text-white">{tier.stats.bus}</span>
                  </div>
                  <div className="p-6 bg-white/2 border border-white/5 flex justify-between items-center group hover:border-electric transition-all">
                    <div className="flex items-center gap-4">
                      <Microscope className="text-electric" size={20} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Logic Tier</span>
                    </div>
                    <span className="font-mono text-sm text-white">{tier.stats.logic}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 3: MASSIVE COMPONENT INFOGRAPHIC */}
        <section className="mt-60 py-32 border-y border-white/10 relative">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase italic mb-8">Hardware <span className="text-electric italic font-light">Forensics.</span></h2>
            <p className="text-slate-500 uppercase text-xs tracking-[0.5em]">Deconstructing the Signal Chain</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Cpu />, title: "MCU Re-Balancing", desc: "Correcting internal clock-timing issues in engine control units." },
              { icon: <Layers />, title: "Layer Restoration", desc: "Repairing micro-fractures in multi-layer PCBs using silver-conductive bonding." },
              { icon: <Settings />, title: "Logic Cloning", desc: "Moving encrypted security data from water-damaged modules to virgin hardware." },
              { icon: <HardDrive />, title: "Data Recovery", desc: "Extracting crash data and EEPROM logs for forensic accident reconstruction." }
            ].map((box, idx) => (
              <div key={idx} className="p-10 bg-white/1 border border-white/5 hover:bg-electric/5 hover:border-electric transition-all duration-500">
                <div className="text-electric mb-8">{box.icon}</div>
                <h4 className="text-xl font-heading font-bold uppercase mb-4">{box.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest">{box.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: THE "LIMP MODE" CURE (MASSIVE CTA SECTION) */}
        <section className="mt-60 relative h-[600px] flex items-center justify-center rounded-[4rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" 
            alt="CTA BG"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#020617] via-transparent to-[#020617]" />
          
          <div className="relative z-10 text-center px-6">
            <motion.div 
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              className="space-y-10"
            >
              <h2 className="text-6xl md:text-9xl font-heading font-black uppercase italic leading-none">
                Signal <br /> <span className="text-electric">Resolved.</span>
              </h2>
              <button className="px-16 py-6 bg-electric text-navy font-black uppercase tracking-[0.5em] text-xs hover:bg-white transition-all transform hover:scale-110 active:scale-95">
                Initialize Diagnostic
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: SYSTEM LOGS (FOOTER DATA) */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-20">
          {["P0011_SYNC", "U0121_COMM", "B1232_SHORT", "P0340_PHASE"].map((log) => (
            <div key={log} className="flex flex-col">
              <span className="text-[10px] font-mono text-electric mb-2 animate-pulse">{log}</span>
              <div className="h-px w-full bg-white/10" />
              <span className="text-[8px] font-mono text-slate-600 mt-2 uppercase italic tracking-tighter">Verified_at_0.02ms</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}