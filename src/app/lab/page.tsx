"use client";
import { motion } from "framer-motion";
import { Activity, Target, Zap, Microscope, Cpu, ShieldAlert, Binary, Gauge } from "lucide-react";

const instruments = [
  { 
    name: "PicoScope 4425A", 
    spec: "4-Channel / 400MS/s", 
    use: "The gold standard for signal analysis. We capture transient spikes in milliseconds to find intermittent wiring faults.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
    tag: "WAVEFORM_ANALYSIS"
  },
  { 
    name: "Thermal Imaging Lab", 
    spec: "FLIR E76 / 0.03°C Sensitivity", 
    use: "Visualizing heat signatures on PCB boards to locate parasitic drains and short-circuited MOSFETs before they fail.",
    img: "https://images.unsplash.com/photo-1614850523296-e8c1d07ed6a0?q=80&w=1000",
    tag: "THERMAL_MAPPING"
  },
  { 
    name: "VCMI Topology Hub", 
    spec: "CAN-FD / DoIP Protocol", 
    use: "Mapping the entire vehicle network architecture. We see every module (ECU, TCU, BCM) and their communication health.",
    img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000",
    tag: "NETWORK_STABILITY"
  }
];

export default function LabPage() {
  return (
    <main className="pt-32 pb-20 bg-[#020617] text-white min-h-screen relative overflow-hidden">
      
      {/* --- HERO-STYLE ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `linear-gradient(to right, #00e5ff 1px, transparent 1px), linear-gradient(to bottom, #00e5ff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        {/* Animated Scanning Beam (Vertical) */}
        <motion.div 
          animate={{ translateY: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[300px] bg-gradient-to-b from-transparent via-electric/10 to-transparent"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* SECTION 1: MASSIVE HEADER */}
        <header className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-electric mb-6"
          >
            <Microscope size={20} />
            <span className="font-mono text-xs uppercase tracking-[0.5em]">Engineering_Lab_Facilities_v6.0</span>
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-heading font-black uppercase italic leading-[0.8] mb-12">
            The <span className="text-electric">Lab.</span>
          </h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
              We operate a Class-10 automotive diagnostics facility. Our lab is designed for forensic-level electrical repair, module recovery, and performance calibration.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="px-6 py-3 border border-white/10 bg-white/5 rounded-full flex items-center gap-3">
                <ShieldAlert className="text-electric" size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">ISO 9001 Certified</span>
              </div>
              <div className="px-6 py-3 border border-white/10 bg-white/5 rounded-full flex items-center gap-3">
                <Zap className="text-electric" size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">ESD Safe Zone</span>
              </div>
            </div>
          </div>
        </header>

        {/* SECTION 2: THE INSTRUMENT MATRIX (MASSIVE CARDS) */}
        <section className="space-y-40">
          {instruments.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image Side with "HUD" callouts */}
              <div className="w-full lg:w-3/5 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric to-blue-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-lg" />
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-navy/20" />
                  
                  {/* Floating Tech Callout */}
                  <motion.div 
                    animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-10 left-10 p-4 backdrop-blur-xl bg-black/60 border border-electric/30 rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="text-electric" size={12} />
                      <span className="text-[8px] font-mono uppercase tracking-widest">Live_Capture</span>
                    </div>
                    <div className="text-xs font-bold font-mono">STATUS: SYNC_OK</div>
                  </motion.div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-2/5">
                <div className="text-electric font-mono text-sm mb-4 tracking-tighter">[{item.tag}]</div>
                <h3 className="text-4xl md:text-6xl font-heading font-black uppercase mb-6">{item.name}</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {item.use}
                </p>
                <div className="p-6 bg-white/[0.03] border-l-4 border-electric">
                  <div className="text-[10px] uppercase font-black text-slate-500 mb-2">Technical Specification</div>
                  <div className="text-xl font-mono text-white">{item.spec}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* SECTION 3: THE CALIBRATION RING (MASSIVE INTERACTIVE AREA) */}
        <section className="mt-60 py-24 border-y border-white/5 relative">
          <div className="grid lg:grid-cols-3 gap-12 items-center text-center">
            
            <div className="space-y-4">
              <div className="text-6xl font-heading font-black italic">0.02<span className="text-electric">ms</span></div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">Signal Latency</p>
            </div>

            <div className="relative flex justify-center py-10">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="w-64 h-64 border border-electric/20 rounded-full border-dashed p-4"
               >
                 <div className="w-full h-full border border-electric/40 rounded-full flex items-center justify-center">
                    <Target size={40} className="text-electric animate-pulse" />
                 </div>
               </motion.div>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-[10px] font-mono text-electric mb-1">ALIGNMENT</span>
                 <span className="text-2xl font-black italic uppercase">OPTIMAL</span>
               </div>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-heading font-black italic">100<span className="text-electric">%</span></div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">Data Integrity</p>
            </div>

          </div>
        </section>

        {/* SECTION 4: LAB PROTOCOLS */}
        <section className="mt-40 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Cpu />, title: "Logic Recovery", desc: "Cloning and recovering data from 'bricked' modules using HEX binary manipulation." },
            { icon: <Gauge />, title: "Stress Testing", desc: "Simulating vehicle loads on components using lab power supplies to ensure stability." },
            { icon: <Activity />, title: "Packet Sniffing", desc: "Isolating specific CAN-Bus packets to find the 'noise' causing network crashes." },
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white/[0.02] border border-white/10 hover:border-electric/50 transition-all group">
              <div className="text-electric mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-heading font-bold uppercase mb-4">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-wider">{item.desc}</p>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}