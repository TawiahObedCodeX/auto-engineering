"use client";
import { motion } from "framer-motion";
import { BiChip, BiDna, BiCloudDownload, BiShieldQuarter, BiCodeBlock, BiServer } from "react-icons/bi";
import { HiOutlineCpuChip, HiOutlineFingerPrint } from "react-icons/hi2";

export default function ECUCloningPage() {
  return (
    <main className="bg-brand-navy text-white pt-32 pb-20 selection:bg-brand-blue">
      <div className="container mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-brand-blue font-mono text-xs tracking-[0.5em] uppercase mb-4 block underline">Service_Module // 01</span>
            <h1 className="text-6xl md:text-9xl font-heading font-black italic uppercase leading-none tracking-tighter mb-10">
              ECU <span className="text-brand-blue">&</span> <br /> TCM CLONING.
            </h1>
            <p className="max-w-3xl text-slate-400 font-mono text-sm leading-loose uppercase tracking-widest border-l-2 border-brand-yellow pl-8">
              Don't pay dealership prices for new modules. We extract the binary DNA from your failed unit and inject it into a healthy replacement. 100% Plug-and-Play.
            </p>
          </motion.div>
        </section>

        {/* --- IMAGE & TECHNICAL GRID --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-40">
          <div className="lg:col-span-7 relative group overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="ECU Internal Board" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex gap-4">
               <div className="bg-brand-blue p-4 text-brand-navy font-black text-xs uppercase italic tracking-widest">DATA_EXTRACTION_ACTIVE</div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center gap-12">
            {[
              { t: "1:1 Data Replication", d: "We transfer all EEPROM and Flash memory data including VIN, mileage, and immobilization sync.", i: <BiDna /> },
              { t: "Component Protection Removal", d: "We bypass factory locked systems to allow pre-owned modules to function perfectly in your vehicle.", i: <BiShieldQuarter /> },
              { t: "Checksum Correction", d: "Every clone is verified with checksum algorithms to ensure no software crashes occur at high speeds.", i: <BiCodeBlock /> }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="text-brand-blue text-4xl group-hover:scale-110 transition-transform">{item.i}</div>
                <div>
                  <h3 className="text-xl font-heading font-black italic uppercase mb-2">{item.t}</h3>
                  <p className="text-slate-500 font-mono text-[10px] leading-relaxed uppercase">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DEEP SCROLL: THE PROCESS --- */}
        <section className="py-20 bg-white/5 border border-white/10 p-10 mb-40 relative">
          <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/20">EB_PROTOCOL_v4.2</div>
          <h2 className="text-4xl font-heading font-black italic uppercase mb-16 underline decoration-brand-blue">Programming_Workflow</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", t: "READ", d: "Extraction of original HEX data via Bench/Boot mode." },
              { n: "02", t: "ANALYZE", d: "Corrupted data segments identified and repaired." },
              { n: "03", t: "WRITE", d: "Injection of verified data into donor hardware." },
              { n: "04", t: "SYNC", d: "Online synchronization with vehicle gateway." }
            ].map((step) => (
              <div key={step.n} className="p-8 border-l border-white/5 hover:border-brand-blue transition-colors">
                <span className="text-5xl font-heading font-black italic text-brand-blue/20 mb-4 block">{step.n}</span>
                <h4 className="text-lg font-black italic uppercase mb-2">{step.t}</h4>
                <p className="text-slate-500 font-mono text-[10px] uppercase leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="text-center py-20 border-t border-brand-blue/20">
          <HiOutlineCpuChip className="mx-auto text-brand-blue size-20 mb-8 animate-pulse" />
          <h2 className="text-5xl md:text-7xl font-heading font-black italic uppercase mb-10 leading-tight">Clone Your <br /> Failed Module Now.</h2>
          <a href="tel:0244887773" className="px-16 py-8 bg-brand-blue text-brand-navy font-heading font-black italic text-xl uppercase hover:bg-brand-yellow transition-all inline-block">
             Initiate_Transfer
          </a>
        </section>
      </div>
    </main>
  );
}