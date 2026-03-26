"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Cpu, Zap, Search, Shield, Activity, ChevronRight, 
  Terminal, Microchip, Radio, Database, HardDrive, 
  Globe, Gauge, PenTool
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "ECU Architecture",
    id: "01",
    icon: <Cpu size={60} />,
    tag: "SOFTWARE_CORE",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    description: "Deep-level binary modification and control module optimization. We interface directly with the silicon to unlock hidden performance parameters and resolve logic-level software conflicts.",
    details: [
      { label: "Remapping", value: "Stage 1, 2, & 3 OEM+" },
      { label: "EEPROM", value: "Hex-Level Data Recovery" },
      { label: "Transmission", value: "TCU Shift Logic Tuning" },
      { label: "Security", value: "Immobilizer & Key Coding" }
    ]
  },
  {
    title: "Network Forensic",
    id: "02",
    icon: <Search size={60} />,
    tag: "DATA_INTEGRITY",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    description: "Specialized analysis of the vehicle's neural network. We sniff packets across CAN, LIN, and FlexRay protocols to identify 'noise,' parasitic drains, and module communication failures.",
    details: [
      { label: "CAN-Bus", value: "Packet Collision Analysis" },
      { label: "FlexRay", value: "Time-Triggered Diagnostics" },
      { label: "Forensics", value: "Parasitic Draw Isolation" },
      { label: "Topology", value: "Full Network Mapping" }
    ]
  },
  {
    title: "High-Voltage Lab",
    id: "03",
    icon: <Zap size={60} />,
    tag: "ENERGY_MGMT",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000",
    description: "The future of automotive repair. Our lab is equipped for high-voltage battery surgery, inverter testing, and thermal management audits for EV and Hybrid platforms.",
    details: [
      { label: "Cells", value: "HV Battery Balancing" },
      { label: "Inverters", value: "Isolation Fault Repair" },
      { label: "Thermal", value: "Coolant Loop Logic" },
      { label: "Charging", value: "J1772 & CCS Protocol Fixes" }
    ]
  }
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="pt-32 pb-20 bg-[#020617] text-white min-h-screen relative overflow-hidden">
      
      {/* --- CATCHY BACKGROUND HUD --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(to right, #00e5ff 1px, transparent 1px), linear-gradient(to bottom, #00e5ff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        
        {/* Animated Scanning Line */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 w-[40%] h-full bg-linear-to-r from-transparent via-electric/5 to-transparent skew-x-12"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER: MASSIVE SCALE */}
        <header className="mb-40 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-electric mb-8"
          >
            <Terminal size={20} className="animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.8em]">System_Capability_Matrix_v4.2</span>
          </motion.div>
          <h1 className="text-8xl md:text-[11rem] font-heading font-black uppercase italic leading-[0.75] mb-12">
            The <br /><span className="text-electric">Programs.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-400 font-light max-w-3xl leading-snug">
            We provide deep-layer electrical engineering. From silicon-level logic to high-voltage energy management.
          </p>
        </header>

        {/* SECTION 1: MASSIVE SERVICE BLOCKS */}
        <div className="space-y-64">
          {services.map((service, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
                
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 group">
                  <div className="relative aspect-square overflow-hidden border border-white/10 rounded-sm">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
                    
                    {/* Big Floating Number */}
                    <div className="absolute -bottom-10 -right-10 text-[15rem] font-black italic text-electric/10 group-hover:text-electric/20 transition-colors select-none">
                      {service.id}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-10 py-10">
                  <div className="flex items-center gap-6">
                    <div className="text-electric">{service.icon}</div>
                    <div className="h-px grow bg-white/10" />
                    <span className="font-mono text-xs text-slate-500">[{service.tag}]</span>
                  </div>

                  <h2 className="text-6xl md:text-8xl font-heading font-black uppercase italic tracking-tighter">
                    {service.title}
                  </h2>

                  <p className="text-xl text-slate-400 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="p-6 bg-white/2 border border-white/5 group hover:border-electric transition-all">
                        <div className="text-[10px] uppercase font-black text-slate-600 mb-1 tracking-widest">{detail.label}</div>
                        <div className="text-lg font-bold text-white uppercase">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* SECTION 2: THE "PROCESS" (MASSIVE FULL-WIDTH CONTENT) */}
        <section className="mt-60 py-32 border-t border-white/10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <h3 className="text-5xl font-heading font-black uppercase italic mb-6">Diagnostic <br /><span className="text-electric">Pipeline.</span></h3>
              <p className="text-slate-500 uppercase text-xs tracking-[0.4em] font-bold">Standard Operating Procedure</p>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
              {[
                { icon: <Search />, step: "01", name: "Packet Sniffing", desc: "Isolating network traffic to find the source of error." },
                { icon: <PenTool />, step: "02", name: "Logic Re-Code", desc: "Rewriting the module binary to correct the fault." },
                { icon: <Activity />, step: "03", name: "Stress Test", desc: "Simulating high-heat loads to ensure stability." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 bg-white/2 border border-white/5">
                  <div className="text-electric/20 absolute top-4 right-4 text-4xl font-black">{item.step}</div>
                  <div className="text-electric mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold uppercase mb-2">{item.name}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: MASSIVE FOOTER CALLOUT */}
        <section className="mt-60 mb-20">
          <div className="relative p-20 overflow-hidden bg-electric group">
             <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
             <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
                <h2 className="text-4xl md:text-7xl font-heading font-black uppercase italic text-navy group-hover:text-white transition-colors">
                  Ready to <br /> Initialize?
                </h2>
                <button className="px-12 py-6 border-2 border-navy text-navy group-hover:border-white group-hover:text-white font-black uppercase tracking-widest text-xs transition-all">
                  Request Technical Audit
                </button>
             </div>
          </div>
        </section>

      </div>
    </main>
  );
}