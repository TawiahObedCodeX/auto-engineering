"use client";
import { motion } from "framer-motion";
import { 
  Terminal, ShieldCheck, Zap, AlertCircle, 
  Cpu, Globe, Lock, HardDrive, Fingerprint, 
  Server, ClipboardCheck, PhoneCall
} from "lucide-react";

export default function BookPage() {
  return (
    <main className="pt-32 pb-40 bg-[#020617] text-white min-h-screen relative overflow-hidden">
      
      {/* --- HUD BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: `radial-gradient(#00e5ff 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] border border-electric/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION 1: MASSIVE HEADER --- */}
        <div className="max-w-5xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-electric mb-8"
          >
            <Server size={20} className="animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.8em]">Link_Encryption_Enabled_AES256</span>
          </motion.div>
          <h1 className="text-7xl md:text-[11rem] font-heading font-black uppercase italic leading-[0.75] mb-12">
            Initialize <br /><span className="text-electric">Tech.</span>
          </h1>
          <p className="text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
            Secure a slot in our engineering lab. Due to high demand for forensic electronics, appointments are strictly prioritized by system complexity.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* --- LEFT SIDE: THE PROTOCOLS (CONTENT RICH) --- */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Visual Callout */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-12">
               <img 
                 src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000" 
                 alt="Lab Environment" 
                 className="w-full h-full object-cover grayscale opacity-50"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
               <div className="absolute bottom-6 left-6 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                 <span className="text-[10px] font-mono text-white/60 font-black">LIVE_LAB_FEED // SECURE</span>
               </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-black uppercase italic text-white flex items-center gap-4">
                <Lock className="text-electric" size={24} /> Security Protocols
              </h3>
              
              <div className="grid gap-4">
                {[
                  { icon: <ShieldCheck />, title: "Data Privacy", desc: "We utilize air-gapped systems for sensitive module cloning to ensure no third-party data leaks." },
                  { icon: <ClipboardCheck />, title: "Pre-Diagnostic", desc: "A mandatory baseline scan fee of $120 is required for all hardware-level forensics." },
                  { icon: <HardDrive />, title: "Log Storage", desc: "All vehicle logs are stored on our local secure servers for 12 months for warranty validation." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                    <div className="flex items-center gap-4 mb-3 text-electric group-hover:translate-x-2 transition-transform">
                      {item.icon}
                      <span className="font-bold uppercase text-xs tracking-widest">{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Reach Contact */}
            <div className="pt-10 border-t border-white/5">
               <div className="flex items-center gap-6">
                  <div className="p-4 bg-electric/10 rounded-full">
                    <Globe className="text-electric" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black text-slate-500 tracking-[0.3em]">Support_Matrix</div>
                    <div className="text-lg font-bold">Global Remote Programming Available</div>
                  </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE COMMAND TERMINAL (FORM) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-[#050b1a] border-2 border-white/10 p-12 rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group"
          >
            {/* Corner Decorative Terminal Icon */}
            <Terminal className="absolute top-8 right-8 text-electric/10 group-hover:text-electric/30 transition-colors" size={100} />
            
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-black uppercase italic mb-2">Request_Access</h2>
              <p className="text-xs text-slate-500 font-mono">Fill all required fields to generate a diagnostic ticket.</p>
            </div>

            <form className="space-y-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-electric flex items-center gap-2">
                    <Fingerprint size={12}/> Operator_ID
                  </label>
                  <input className="w-full bg-transparent border-b border-white/10 py-3 focus:border-electric outline-none font-mono text-sm transition-all focus:bg-white/[0.02]" placeholder="Full Name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-electric flex items-center gap-2">
                    <PhoneCall size={12}/> Contact_Sync
                  </label>
                  <input className="w-full bg-transparent border-b border-white/10 py-3 focus:border-electric outline-none font-mono text-sm transition-all focus:bg-white/[0.02]" placeholder="Email/Phone" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-electric flex items-center gap-2">
                  <Cpu size={12}/> Architecture_Model
                </label>
                <input className="w-full bg-transparent border-b border-white/10 py-3 focus:border-electric outline-none font-mono text-sm transition-all focus:bg-white/[0.02]" placeholder="Year, Make, Model (e.g., 2026 Lucid Air)" />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-electric flex items-center gap-2">
                  <AlertCircle size={12}/> Symptom_Log
                </label>
                <textarea rows={5} className="w-full bg-transparent border border-white/10 p-4 focus:border-electric outline-none font-mono text-sm transition-all focus:bg-white/[0.02] rounded-lg" placeholder="Enter error codes (DTCs) or describe the electronic failure in detail..." />
              </div>

              <div className="pt-6">
                <button className="group relative w-full py-8 bg-electric overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-all">
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 text-navy font-black uppercase tracking-[0.5em] text-sm flex items-center justify-center gap-4">
                    Execute_Booking <Zap size={18} fill="currentColor" />
                  </span>
                </button>
              </div>

              <div className="flex justify-between items-center opacity-30 font-mono text-[8px] uppercase tracking-widest pt-6 border-t border-white/5">
                <span>Ref: LAB-992-04</span>
                <span>Server: UTC_0.00</span>
                <span>Status: Waiting_For_Input</span>
              </div>
            </form>
          </motion.div>
        </div>

        {/* --- SECTION 2: THE EQUIPMENT TRUST BAR (ADDITIONAL SCROLLABLE CONTENT) --- */}
        <div className="mt-60 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700">
           {/* Replace these with partner or tool logos */}
           {["BOSCH", "AUTEL", "SNAP-ON", "FLIR", "TEKTRONIX", "HELLA"].map(tool => (
             <div key={tool} className="flex flex-col items-center justify-center border border-white/10 p-8 hover:border-electric transition-colors">
                <span className="font-heading font-black text-lg tracking-tighter">{tool}</span>
                <span className="text-[7px] uppercase mt-2">Verified_Partner</span>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}