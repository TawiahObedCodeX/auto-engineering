"use client";
import { motion } from "framer-motion";
import { BiWrench, BiRevision, BiMap, BiPulse, BiShieldX, BiSelectMultiple } from "react-icons/bi";
import { HiOutlineWrenchScrewdriver, HiOutlineBolt } from "react-icons/hi2";

export default function HarnessPage() {
  return (
    <main className="bg-brand-navy text-white pt-32 pb-20 selection:bg-brand-yellow">
      <div className="container mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-brand-yellow font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Physical_Integrity // 02</span>
            <h1 className="text-6xl md:text-9xl font-heading font-black italic uppercase leading-none tracking-tighter mb-10">
              HARNESS <br /> <span className="text-brand-yellow">RESTORATION.</span>
            </h1>
            <p className="max-w-2xl text-slate-400 font-mono text-sm leading-loose uppercase tracking-[0.2em]">
              Car wiring is often the root of "Ghost Faults." We restore complex harnesses back to factory standards using OEM materials and routing techniques.
            </p>
          </motion.div>
        </section>

        {/* --- THE "MASSIVE" IMAGE SECTION --- */}
        <section className="mb-40">
           <div className="relative h-[600px] overflow-hidden border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                alt="Wiring Harness Loom" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-transparent to-brand-navy/20" />
              <div className="absolute bottom-12 left-12 right-12 md:right-auto bg-brand-yellow p-10 text-brand-navy">
                 <h2 className="text-4xl font-heading font-black italic uppercase leading-none mb-4">WE REBUILD <br /> THE NERVOUS SYSTEM.</h2>
                 <p className="font-mono text-[10px] font-bold uppercase tracking-widest">Heat Resistance // Signal Clarity // Signal Shielding</p>
              </div>
           </div>
        </section>

        {/* --- DEEP DATA SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
           <div className="space-y-12">
              <h3 className="text-3xl font-heading font-black italic uppercase text-brand-yellow flex items-center gap-4">
                <BiShieldX /> WHY_HARNESSES_FAIL
              </h3>
              <div className="space-y-8">
                 {[
                   { t: "Heat & Oxidation", d: "Engine heat makes wiring brittle. We replace damaged segments with higher-grade silicone wiring." },
                   { t: "Pest & Rodent Damage", d: "Mice often chew through main looms. We perform forensic splicing to restore original connectivity." },
                   { t: "Improper Previous Repairs", d: "We remove 'Twist-and-Tape' repairs and replace them with professional crimping and heat-shrink." }
                 ].map((item, i) => (
                   <div key={i} className="pl-6 border-l-2 border-brand-yellow/30">
                      <h4 className="text-lg font-black italic uppercase mb-1">{item.t}</h4>
                      <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="space-y-12 bg-white/5 p-12 border border-white/10">
              <h3 className="text-3xl font-heading font-black italic uppercase text-brand-blue flex items-center gap-4">
                <BiPulse /> RECOVERY_STEPS
              </h3>
              <div className="grid gap-6">
                {[
                  "Full continuity testing across all pins",
                  "OEM-spec loom wrapping (Anti-Heat)",
                  "Connector pin extraction and replacement",
                  "Ground-point cleaning and stabilization",
                  "Short-circuit location forensics"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
                    <BiSelectMultiple className="text-brand-yellow" /> {step}
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* --- FINAL MASSIVE BANNER --- */}
        <section className="bg-brand-yellow py-24 text-brand-navy text-center">
           <HiOutlineBolt className="mx-auto text-4xl animate-bounce mb-6" />
           <h2 className="text-5xl md:text-8xl font-heading font-black italic uppercase mb-12 tracking-tighter">RESTORE <br /> ORIGINALITY.</h2>
           <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
              <a href="tel:0244887773" className="px-12 py-6 bg-brand-navy text-white font-heading font-black italic uppercase tracking-widest hover:scale-105 transition-transform">Call_Technician</a>
              <div className="px-12 py-6 border-2 border-brand-navy font-heading font-black italic uppercase tracking-widest">EAGLE_BRAIN_LAB</div>
           </div>
        </section>

      </div>
    </main>
  );
}